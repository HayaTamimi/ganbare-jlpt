import "./App.css";
import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import axios from "axios";
import Homepage from "../src/pages/Homepage";
import NotFound from "../src/pages/NotFound";
import About from "../src/pages/About";
import LayOut from "../src/components/layout/LayOut";
import LevelPage from "./pages/LevelPage";
import Dictionary from "./pages/Dictionary";

export default function App() {
  //let apiUrl = "http://localhost:5171/";
  let apiUrl =
    "http://localhost:5171/api/v1/questions/2f92ce7f-9753-41c0-988b-50e0a250ba51";

  //console.log(response);

  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function getData() {
      axios
        .get(apiUrl)
        .then((response) => {
         // console.log(response.data.questionText); worked!
          setResponse(response.data);
          setLoad(false);
        })
        .catch((error) => {
          setError("there is error");
          setLoad(false);
        });
    }
    getData();
  }, []);

  if (load) {
    return <div>  </div>;
  }

  if (error) {
    return <div> {error.message}</div>;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: "/about",
          element: <About response={response} setResponse={setResponse} />,
        },

        {
          path: "/quiz/levels",
          element: <LevelPage />,
        },

        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/dictionary",
          element: <Dictionary />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
