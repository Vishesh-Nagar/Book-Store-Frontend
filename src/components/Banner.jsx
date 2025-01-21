import { useNavigate } from "react-router-dom";
import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/books");
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 min-h-[90vh]">
                <div className="w-full order-2 md:order-1 md:w-1/2 flex items-center md:mt-36">
                    <div className="space-y-8">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Hello, welcome here to learn something{" "}
                            <span className="text-pink-500">
                                new every day!!!
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl">
                            Welcome to our bookstore, your go-to for literary
                            treasures! Discover a curated collection of genres,
                            from classics to bestsellers.
                        </p>
                        <div className="flex items-center gap-4 ">
                            <button
                                className="btn btn-secondary"
                                onClick={handleClick}
                                style={{ fontSize: "20px", color: "white" }}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <div className="order-1 w-full mt-20 md:w-1/2">
                    <img
                        src={banner}
                        className="md:w-[550px] md:h-[460px] md:ml-12"
                        alt="Banner"
                    />
                </div>
            </div>
        </>
    );
}

export default Banner;