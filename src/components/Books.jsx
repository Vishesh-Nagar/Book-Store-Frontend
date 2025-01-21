import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get(
                    "https://book-store-backend-6f44.onrender.com/book"
                );
                setBooks(Array.isArray(res.data) ? res.data : []);
            } catch (error) {
                console.error("Error fetching books:", error);
                setBooks([]);
            }
        };
        getBooks();
    }, []);

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center justify-center text-center">
                <h1 className="text-2xl md:text-4xl">
                    We're delighted to have you{" "}
                    <span className="text-pink-500">Here! :)</span>
                </h1>
                <p className="mt-12">
                    Visit our collection of books, where you'll find a diverse
                    range of genres and titles waiting to be discovered. Whether
                    you're seeking timeless classics or the latest bestsellers,
                    we have something for every reader. Explore today and find
                    your next great read!
                </p>
                <Link to="/">
                    <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                        Back
                    </button>
                </Link>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
                {books.length > 0 ? (
                    books.map((item) => <Cards key={item._id} item={item} />)
                ) : (
                    <p className="text-center text-gray-500">
                        No books available. Please check back later.
                    </p>
                )}
            </div>
        </div>
    );
}

export default Books;