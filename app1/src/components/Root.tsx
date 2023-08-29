import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div>
            <div>Root Component</div>
            <nav className="bg-blue-300 p-5">
                <ul className="flex">
                    <li className="text-blue-700 mr-10 border-2 p-2 border-blue-500 text-sm">
                        <Link to={``}>Dashboard</Link>
                    </li>
                    <li className="text-blue-700 mr-10 border-2 p-2 border-blue-500 text-sm">
                        <Link to={`about`}>About</Link>
                    </li>
                </ul>
            </nav>
            <div className="bg-blue-300 p-5">
                <Outlet />
            </div>
            
        </div>

    )
}