import Link from 'next/link';
import { AiFillPlusCircle } from "react-icons/ai";
import Icon from "@/app/favicon.ico";
import Image from 'next/image';

const Navbar = () => {


    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white text-xl font-bold">
                        <Link href="/" className='text-4xl flex items-center justify-center gap-3'><Image className='h-12 w-14' src={Icon} alt="Icon" />Blogpost.com</Link>
                    </div>
                    <ul className="flex items-center justify-center space-x-6 gap-7 text-lg">
                        <li>
                            <Link href="/" className='text-white hover:text-indigo-500 transition'>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className='text-white hover:text-indigo-500 transition'>About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className='text-white hover:text-indigo-500 transition'>Contact Us</Link>
                        </li>
                        <Link href="/newBlog" className="bg-white text-indigo-500 hover:bg-slate-200 active:translate-y-1 transition-all ease-in-out duration-[.3s] hover:text-indigo-600 flex items-center justify-center gap-2 px-4 py-2 rounded-md">Blog <AiFillPlusCircle size={24} /></Link>
                        <button className="text-white bg-indigo-500 px-9 py-2 uppercase rounded-md">
                            <Link href="/login">Login</Link>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
