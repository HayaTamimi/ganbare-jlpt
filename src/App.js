import "./App.css";
import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import axios from "axios";
import Homepage from "../src/pages/Homepage";
import NotFound from "../src/pages/NotFound";
import About from "../src/pages/About";
//import Quiz from "../src/pages/Quiz";
// import Leaderboard from "../src/pages/Leaderboard";
import LayOut from "../src/components/layout/LayOut";
import Favorite from "./pages/Favorite";
import LevelPage from "./pages/LevelPage";


export default function App() {
  let apiUrl = "http://localhost:5171/";
  //console.log(response);

  const [response, setResponse] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);
  //const [searchInput, setSearchInput] = useState(""); no need
  //const [fav, setFav] = useState([]);

  //console.log(searchInput);
  console.log(response);

  useEffect(() => {
    function getData() {
      axios
        .get(apiUrl)
        .then((response) => {
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
    return <div> Please wait </div>;
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
          element: <About />,
        },
        // {
        //   path: "/quiz",
        //   element: (
        //     <Quiz
        //     // products={products}
        //     // searchInput={searchInput}
        //     // setSearchInput={setSearchInput}
        //     />
        //   ),
        // },
        {
          path: "/quiz/levels",
          element: (
            <LevelPage
            // products={products}
            // searchInput={searchInput}
            // setSearchInput={setSearchInput}
            />
          ),
        },
        // {
        //   path: "/shop/:productId",
        //   element: <Product
        //     // fav={fav} setFav={setFav}
        //   />,
        // },
        {
          path: "/",
          element: <Homepage response={response} setResponse={setResponse} />,
        },
        {
          path: "/favorite",
          element: (
            <Favorite
            //fav={fav}
            />
          ),
        },
        {
          path: "*", // for random typing
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
