import {
  Dispatch,
  forwardRef,
  SetStateAction,
  useCallback,
  useRef,
} from "react";
import Buttons from "./Buttons/Buttons";
import Fields from "./Fields/Fields";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useAppSelector } from "utils/hooks/hook";
import { editBooks, selectBook } from "utils/bookSlice";
import { useDispatch } from "react-redux";

interface InterfaceForm {
  name: string;
  category: string;
  quantity: number;
  amount: number;
}

const schema = yup
  .object({
    name: yup
      .string()
      .required("Name must be required")
      .min(3, "Name must be at least 3 characters"),
    category: yup
      .string()
      .required("Category must be required")
      .min(3, "Category must be at least 3 characters"),
    quantity: yup
      .string()
      .required("Quantity must be required")
      .min(1, "Quantity must be at least 1 characters")
      .max(10, "Quantity must be minimum of 10 characters"),
    amount: yup
      .string()
      .required("Amount must be required")
      .min(1, "Amount must be at least 1 characters")
      .max(10, "Amount must be minimum of 10 characters"),
  })
  .required();

const Form = forwardRef(
  (
    props: {
      close: Dispatch<SetStateAction<boolean>>;
    },
    ref
  ) => {
    const formRef = useRef(null);

    const book = useAppSelector(selectBook);
    const bookId = useAppSelector(selectBook)._id;

    const dispatch = useDispatch();

    const methods = useForm({
      resolver: yupResolver(schema),
    });

    const handleClose = useCallback(() => {
      props.close(false);
    }, [props]);

    const onSubmit = useCallback(
      async (data: InterfaceForm) => {
        const url = process.env.REACT_APP_BACKEND_URL;

        try {
          await axios.put(`${url}/books/${bookId}`, {
            name: data.name,
            category: data.category,
            quantity: data.quantity,
            amount: data.amount,
          });

          dispatch(
            editBooks({
              ...book,
              name: data.name,
              category: data.category,
              quantity: data.quantity,
              amount: data.amount,
            })
          );

          handleClose();
        } catch (error) {
          console.log(error as AxiosError);
        }
      },
      [bookId, dispatch, book, handleClose]
    );

    return (
      <div
        ref={formRef}
        className="flex flex-col w-3/4 h-auto bg-white rounded-lg shadow-lg lg:w-3/5 xl:w-2/4 2xl:w-2/6 max-h-4/6"
      >
        <div className="flex justify-start px-5 py-3 mb-auto font-medium text-gray-700 uppercase border-b border-gray-200">
          Edit
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col h-full p-5 overflow-auto">
              <Fields />
            </div>
            <div className="flex justify-end px-3 py-4 mt-auto font-medium text-gray-700 uppercase border-t border-gray-200">
              <Buttons close={props.close} />
            </div>
          </form>
        </FormProvider>
      </div>
    );
  }
);

export default Form;
