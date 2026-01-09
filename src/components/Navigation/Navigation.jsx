import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';
import smallSiteLogo from "../../assets/site-logo/favicon.svg"
import bigSiteLogo from "../../assets/site-logo/web-app-manifest-512x512.png"
import homePageIcon from "../../assets/navigation-icons/House.svg"
import aboutMePageIcon from "../../assets/navigation-icons/Person.svg"
import skillsPageIcon from "../../assets/navigation-icons/Wrench.svg"
import projectsPageIcon from "../../assets/navigation-icons/RoundWidgets.svg"
import experiencePageIcon from "../../assets/navigation-icons/BagSolid.svg"
import contactsPageIcon from "../../assets/navigation-icons/EnvelopeSolid.svg"

function Navigation() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className="py-1 relative z-50 border-b
      lg:h-full lg:border-0 lg:border-none">
         <div className="top-0 left-0 flex justify-between items-center lg:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#c1c4f4" size={20} />
            <Link to="/" onClick={() => setIsOpen(false)}>
               <div className="logo px-3 focus:border-none focus:outline-0">
                  <img src={smallSiteLogo} alt="site-logo" height="50px" width="50px" loading="lazy"/>
               </div>
            </Link>
         </div>

         {isOpen && (
            <div className="relative">
               <div className="h-full w-[250px] fixed top-0 left-0 bg-(--main-purple)">
                     <div className="p-5 w-max relative top-[25%] flex flex-col gap-8 text-2xl">
                        <Link to="/" onClick={() => setIsOpen(false)}>
                           Главная
                        </Link>
                        <Link to="/about" onClick={() => setIsOpen(false)}>
                           Обо мне
                        </Link>
                        <Link to="/skills" onClick={() => setIsOpen(false)}>
                           Навыки
                        </Link>
                        <Link to="/experience" onClick={() => setIsOpen(false)}>
                           Опыт
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
         <div className="hidden
         lg:absolute lg:top-0 lg:left-0 lg:flex lg:flex-col lg:gap-30 lg:justify-center lg:items-center">
            <div>
               <Link to="/">
                  <div className="logo px-3 h-[110px] w-[120px] focus:border-none focus:outline-0">
                     <img src={bigSiteLogo} alt="site-logo" loading="lazy"/>
                  </div>
               </Link>
            </div>
            <div className="lg:w-[100px] lg:flex lg:flex-col lg:gap-8 lg:justify-center lg:items-center
            xl:gap-10">
               <Link to="/" className="hover:text-gray-300 transition">
                  <img src={homePageIcon} alt="home-page-icon" height="32px" width="32px" title="Главная" loading="lazy"/>
               </Link>
               <Link to="/about" className="hover:text-gray-300 transition">
                  <img src={aboutMePageIcon} alt="about-me-page-icon" height="32px" width="32px" title="Обо мне" loading="lazy"/>
               </Link>
               <Link to="/skills" className="hover:text-gray-300 transition">
                  <img src={skillsPageIcon} alt="skills-page-icon" height="32px" width="32px" title="Навыки" loading="lazy"/>
               </Link>
               <Link to="/experience" className="hover:text-gray-300 transition">
                  <img src={experiencePageIcon} alt="experience-page-icon" height="32px" width="32px" title="Опыт" loading="lazy"/>
               </Link>
               <Link to="/projects" className="hover:text-gray-300 transition">
                  <img src={projectsPageIcon} alt="experience-page-icon" height="32px" width="32px" title="Портфолио" loading="lazy"/>
               </Link>
               <Link to="/contacts" className="hover:text-gray-300 transition">
                  <img src={contactsPageIcon} alt="contacts-page-icon" height="32px" width="32px" title="Контакты" loading="lazy"/>
               </Link>
            </div>
         </div>
      </nav>
   )
}

export default Navigation;
