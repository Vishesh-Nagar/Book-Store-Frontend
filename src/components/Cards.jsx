import React from "react";

function Cards({ item }) {
    const { title, author, category, price } = item;

    return (
        <div className="card border rounded-md p-4 shadow-md">
            <div className="mt-4">
                <h2 className="text-lg font-bold text-white-800">
                    {title || "Untitled"}
                </h2>
                <p className="text-sm text-gray-500">
                    {author || "Unknown Author"}
                </p>
                <p className="text-gray-700 mt-2 text-sm">
                    {category || "No category description available."}
                </p>
            </div>
            <div className="card-actions flex items-center justify-between">
                <div className="badge badge-outline">
                    ${price || "0.00"}
                </div>
                <button className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                    Buy Now
                </button>
            </div>
        </div>
    );
}

export default Cards;
