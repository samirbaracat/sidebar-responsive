import { useState } from "react";
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="flex">
        <div className={`fixed top-0 left-0 h-full md:w-64 bg-gray-800 transition duration-300 text-white ${isOpen ? "w-64" : "w-20"}`}>
            <div className="flex justify-between items-center p-4">
                <h2 className={`text-xl font-bold md:block ${isOpen ? "block" : "hidden"}`}>Meu App</h2>
                <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            <nav className="mt-4">
                <ul>
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                        <FaHome size={24} />
                        <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                            Home
                        </span>
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                        <FaUserAlt size={24} />
                        <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                            Perfil
                        </span>
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                        <FaCog size={24} />
                        <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                            Configurações
                        </span>
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                        <FaSignOutAlt size={24} />
                        <span className={`ml-4 md:block ${isOpen ? "block" : "hidden"}`}>
                            Sair
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
        {/* dashboard */}
        <div className="ml-20 md:ml-64 p-8 bg-gray-100 min-h-screen flex-1">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p className="">Conteúdo</p>
        </div>
    </div>
    )
}

export default Sidebar