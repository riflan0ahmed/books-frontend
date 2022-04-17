import { Dispatch, forwardRef, SetStateAction, useRef } from "react";
import Buttons from "./Buttons/Buttons";
import Fields from "./Fields/Fields";

const Form = forwardRef(
  (
    props: {
      close: Dispatch<SetStateAction<boolean>>;
    },
    ref
  ) => {
    const divRef = useRef(null);

    return (
      <div
        ref={divRef}
        className="flex flex-col w-3/4 h-auto bg-white rounded-lg shadow-lg lg:w-3/5 xl:w-2/4 2xl:w-2/6 max-h-4/6"
      >
        <div className="flex justify-start px-5 py-3 mb-auto font-medium text-gray-700 uppercase border-b border-gray-200">
          Preview
        </div>
        <div className="flex h-full p-5">
          <Fields />
        </div>
        <div className="flex justify-end px-3 py-3 mt-auto font-medium text-gray-700 uppercase border-t border-gray-200">
          <Buttons close={props.close} />
        </div>
      </div>
    );
  }
);

export default Form;
