import React from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import About from "./components/About";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider";

function App() {
    const [authUser, setAuthUser] = useAuth();
    return (
        <>
            <div className="dark:bg-slate-900 dark:text-white">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/books"
                        element={
                            authUser ? <Courses /> : <Navigate to="/signup" />
                        }
                    />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<About />} />{" "}
                </Routes>
                <Toaster />
            </div>
        </>
    );
}

export default App;
