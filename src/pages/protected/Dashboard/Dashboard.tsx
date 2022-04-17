import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);

  const handleFetch = () => {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:5000/api/books", {
        params: {
          pages: 1,
          limit: 15,
          term: "",
        },
      })
      .then(function (response) {
        // handle success
        setData(response.data["results"]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <ul>
        {data.map((i: any) => (
          <li key={i._id}>{i.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
