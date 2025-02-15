import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
    const [visible, setVisible] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        const deployedBackendURL =
            "https://book-store-backend-6f44.onrender.com/user/login";

        await axios
            .post(deployedBackendURL, userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success("Logged in Successfully");
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload();
                        localStorage.setItem(
                            "Users",
                            JSON.stringify(res.data.user)
                        );
                    }, 1000);
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                    setTimeout(() => {}, 2000);
                }
            });
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() =>
                                document.getElementById("my_modal_3").close()
                            }
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg text-center">Login</h3>

                        <div className="mt-4 space-y-2 flex flex-col items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="mt-4 space-y-2 flex flex-col items-center">
                            <div className="relative w-80">
                                <input
                                    type={visible ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-full px-3 py-1 border rounded-md outline-none pr-10"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                <span
                                    onClick={() => setVisible(!visible)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                                >
                                    {visible ? "🙈" : "👁️"}
                                </span>
                            </div>
                            {errors.password && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col items-center mt-6">
                            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Login
                            </button>
                            <p className="mt-4">
                                Not registered?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-blue-500 cursor-pointer"
                                >
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
