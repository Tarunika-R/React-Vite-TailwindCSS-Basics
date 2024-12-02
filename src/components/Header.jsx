import React from "react";

const Header = () => {
    return (
        <header className="bg-gray-900 text white py-6 px-5">
            <div className="max-w-7xl mx-auto flex justify-between item-center">
                <h1 className="text-xl font-bold px-16 ">Najm AI</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#home" className="hover:extra-bold px-16">
                                More Templates
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

);  
};

export default Header;