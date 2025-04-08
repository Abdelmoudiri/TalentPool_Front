import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="text-xl bg-slate-500" aria-label="Main Navigation">
            <ul className="flex p-4 space-x-8 m-5">
                <li>
                    <Link
                        to="/home"
                        className="text-white hover:text-gray-300 transition-colors"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Annonces"
                        className="text-white hover:text-gray-300 transition-colors"
                    >
                        Annonces
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login"
                        className="text-white hover:text-gray-300 transition-colors"
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        to="/register"
                        className="text-white hover:text-gray-300 transition-colors"
                    >
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
