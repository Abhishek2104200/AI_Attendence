import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center shadow-lg">
            <h1 className="text-xl font-bold">AI Attendance System</h1>
            <div>
                <Link to="/login">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
                        Admin Login
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
