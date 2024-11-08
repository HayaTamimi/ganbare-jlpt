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
import UserRegister from "./components/user/UserRegister";
import UserLogin from "./components/user/UserLogin";
import UserProfile from "./components/user/UserProfile";
import ProtectedRoute from "./components/user/ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import QuizDash from "./pages/QuizDash";
import QuizPage from "./pages/QuizPage";
import Leaderboard from "./pages/Leaderboard";


export default function App() {
  let apiUrl = "http://localhost:5171/api/v1/quizzes/";


  const [response, setResponse] = useState({});
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

   // console.log(response[0]);


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

  const [userData, setUserData] = useState(null);
  const [isUserDataLoading, setIsUserDataLoading] = useState(true);

  function getUserData() {
    setIsUserDataLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5171/api/v1/users/auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
        setIsUserDataLoading(false);
      })
      .catch((err) => {
        setIsUserDataLoading(false);
       // console.log(err);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  let isAuthenticated = userData ? true : false;

  if (load) {
    return <div> </div>;
  }

  if (error) {
    return <div> {error.message}</div>;
  }

  ///let shouldCheckAdmin = true; <- other way 
  // then between {put shouldCheckAdmin instead of true}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut isAuthenticated={isAuthenticated} userData={userData} />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/quizzes/:quizId",
          element: <QuizPage />,
        },
        {
          path: "/quizzes",
          element: <LevelPage />,
        },
        {
          path: "/leaderboard",
          element: <Leaderboard />,
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
          path: "/signup",
          element: <UserRegister />,
        },
        {
          path: "/signin",
          element: <UserLogin getUserData={getUserData} />,
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              element={
                <UserProfile
                  userData={userData}
                  setUserData={setUserData}
                  getUserData={getUserData}
                />
              }
            />
          ),
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              shouldCheckAdmin={true} //check above
              userData={userData}
              element={<Dashboard />}
            />
          ),
        },
        {
          path: "/quizzes-dashboard",
          element: (
            <ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              shouldCheckAdmin={true} //check above
              userData={userData}
              element={<QuizDash />}
            />
          ),
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
