import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';

function Navigation() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className="relative z-50">
         <div className="top-0 left-0 lg:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#c1c4f4" size={20} />
         </div>

         {isOpen && (
            <div className="relative">
               <div className="h-full w-[270px] fixed top-0 left-0 bg-(--main-lilac)">
                     <div className="p-5 w-max relative top-[25%] flex flex-col gap-8 text-2xl">
                        <Link to="/" onClick={() => setIsOpen(false)}>
                           Главная
                        </Link>
                        <Link to="/about" onClick={() => setIsOpen(false)}>
                           Обо мне
                        </Link>
                        <Link to="/projects" onClick={() => setIsOpen(false)}>
                           Портфолио
                        </Link>
                        <Link to="/contacts" onClick={() => setIsOpen(false)}>
                           Контакты
                        </Link>
                     </div>

                  <div className="p-4 absolute top-0 right-0">
                     <Hamburger 
                        toggled={isOpen}
                        toggle={setIsOpen} 
                        color="white" 
                        size={24} 
                     />
                  </div>
               </div>
            </div>
         )}
         <div className="hidden lg:h-screen lg:w-[400px] lg:flex lg:flex-col lg:bg-(--main-lilac)">
            <Link to="/" className="hover:text-gray-300 transition">Главная</Link>
            <Link to="/about" className="hover:text-gray-300 transition">Обо мне</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Портфолио</Link>
            <Link to="/contacts" className="hover:text-gray-300 transition">Контакты</Link>
         </div>
      </nav>
   )
}

export default Navigation;
