import "./App.css";
import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
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
import UserDashBoard from "./components/dashboard/UserDashboard";
import QuestionDash from "./pages/QuestionDash"


export default function App() {
  let apiUrl = "https://ganbare.onrender.com/api/v1/quizzes/";


  const [response, setResponse] = useState({});
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);

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

  const [userData, setUserData] = useState(null);
  const [isUserDataLoading, setIsUserDataLoading] = useState(true);

  function getUserData() {
    setIsUserDataLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get("https://ganbare.onrender.com/api/v1/users/auth", {
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
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  let isAuthenticated = userData ? true : false;

  if (load) {
    return (
      <div>
        {" "}
        <ClipLoader color="rgba(255, 255, 255, 1)" />
      </div>
    );
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
          element: (
            <QuizPage
              score={score}
              setScore={setScore}
              userData={userData}
              setUserData={setUserData}
              getUserData={getUserData}
            />
          ),
        },
        {
          path: "/quizzes",
          element: <LevelPage />,
        },
        {
          path: "/leaderboard/:leaderboardId",
          element: (
            <Leaderboard
              // score={score}
              // setScore={setScore}
              setError={setError}
              //setLoad={setLoad}
            />
          ),
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
          path: "/questions-dashboard",
          element: (
            <ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              shouldCheckAdmin={true} //check above
              userData={userData}
              element={<QuestionDash />}
            />
          ),
        },
        // {
        //   path: "/options-dashboard",
        //   element: (
        //     <ProtectedRoute
        //       isUserDataLoading={isUserDataLoading}
        //       isAuthenticated={isAuthenticated}
        //       shouldCheckAdmin={true}
        //       userData={userData}
        //       element={<OptionDash />}
        //     />
        //   ),
        // },
        {
          path: "/users-dashboard",
          element: (
            <ProtectedRoute
              isUserDataLoading={isUserDataLoading}
              isAuthenticated={isAuthenticated}
              shouldCheckAdmin={true}
              userData={userData}
              element={<UserDashBoard />}
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
