import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="max-w-screen-lg mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
            <p className="text-lg mb-4">
                Welcome to Paper Pulse, your go-to online bookstore! Our mission
                is to provide readers with a curated selection of books from
                various genres. Whether you're looking for the latest
                bestsellers or timeless classics, we have something for
                everyone.
            </p>
            <p className="text-lg mb-4">
                We believe in the power of books to transform lives, and we're
                passionate about making great books accessible to everyone. Join
                us on this journey to explore, learn, and grow through the
                written word.
            </p>
            <p className="text-lg mb-6">
                Explore our collection today and discover your next great read!
            </p>

            <Link to="/">
                <button className="bg-pink-500 text-white px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-pink-600">
                    Go to Home
                </button>
            </Link>
        </div>
    );
}

export default About;
