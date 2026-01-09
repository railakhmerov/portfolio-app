import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import macbookImage from "../../assets/CITYPNGCOMApple_Macb.webp"
import htmlIcon from "../../assets/notebook-icons/Html5.svg"
import cssIcon from "../../assets/notebook-icons/Css3.svg"
import jsIcon from "../../assets/notebook-icons/Javascript.svg"
import reactIcon from "../../assets/notebook-icons/React.svg"
import tailwindIcon from "../../assets/notebook-icons/Tailwindcss.svg"
import viteIcon from "../../assets/notebook-icons/Vitejs.svg"
import gitIcon from "../../assets/notebook-icons/Git.svg"
import vscodeIcon from "../../assets/notebook-icons/Vscode.svg"
import myImage from "../../assets/my-photo/image_1760972512988_0qjy8n.png"
import projectsPageIcon from "../../assets/navigation-icons/AppsSolid.svg"
import contactsPageIcon from "../../assets/navigation-icons/EnvelopeSolid.svg"
import aboutMePageIcon from "../../assets/navigation-icons/Person.svg"
import arrowRightIcon from "../../assets/ArrowRight.svg"

function HomePage() {
   return (
      <div className="home-page w-full 
      lg:flex">
         {/* навигация */}
         <header className="navigation mb-10
         lg:mb-0 lg:max-h-full lg:w-[10%] lg:flex">
            <Navigation />
         </header>
         <main className="lg:w-[90%] scroll-auto">
            <div className="container px-4 min-w-full sm:w-[450px] my-0 mx-auto">
               {/* разделение на стороны - левая и правая */}
               <div className="sides 
               lg:flex lg:justify-between">
                  {/* левая сторона */}
                  <div className="left-sides mb-28
                  lg:py-14 lg:px-5 lg:mb-0 lg:w-[50%]">
                     <section className="home-page__about-me mb-22
                     sm:mb-40
                     lg:mb-20">
                        <div className="home-page__about-me_text">
                           <h2 className="mb-4 text-3xl font-bold text-(--main-purple)
                           sm:text-4xl
                           lg:text-5xl">
                              Я Раиль - Frontend developer
                           </h2>
                           <p className="text-lg font-bold sm:text-xl lg:text-2xl">Люблю чай, красивые фотографии и программирование</p>
                        </div>
                     </section>
                     {/* общий блок с ссылками и фото */}
                     <div className="w-full 
                     sm:flex sm:gap-14
                     lg:flex-col lg:gap-0">
                        <div className="mb-28 flex flex-col gap-4 text-xl
                        sm:w-[45%]
                        lg:mb- lg:w-full lg:text-2xl">
                           <Link 
                              to="/projects"
                              className="about-me__btn about-me__btn w-full py-4 px-8 flex gap-2 justify-center items-center rounded-lg border border-(--main-purple)
                              sm:w-full
                              xl:py-6">
                              Портфолио
                              <img
                                 src={projectsPageIcon} 
                                 alt="contacts-page-icon" 
                                 height="32px" 
                                 width="32px"
                                 loading="lazy"/>
                           </Link>
                           <Link 
                              to="/contacts"
                              className="about-me__btn py-4 px-8 flex gap-2 justify-center items-center rounded-lg border border-(--main-purple)
                              xl:py-6">
                              Контакты
                              <img
                                 src={contactsPageIcon} 
                                 alt="contacts-page-icon" 
                                 height="32px" 
                                 width="32px" 
                                 title="Контакты" 
                                 loading="lazy"/>
                           </Link>
                        </div>
                        <div className="my-img w-full flex justify-center items-center
                        sm:w-[55%]
                        lg:w-full">
                           <img 
                              src={myImage} 
                              alt="my-image"
                              className="h-100 w-130 object-cover rounded-4xl border-2 border-(--main-purple) shadow-md
                              sm:w-md
                              lg:w-full
                              lg:max-w-full
                              xl:h-[700px] xl:max-w-[700px]"/>
                        </div>
                     </div>
                  </div>
                  {/* правая сторона */}
                  <div className="right-sides
                  lg:px-8 lg:w-[50%] lg:flex lg:flex-col lg:justify-between lg:items-center">
                     <section className="banner mb-28
                     lg:py-40 lg:mb-0">
                        <div className="animation relative flex justify-center animate-fadeInOut mb-8">
                           <img src={macbookImage} alt="macbook" width="850px"/>
                           <figure className="absolute top-[43%] left-1/2 -translate-1/2 w-[64%] h-[48%] flex items-center justify-center overflow-hidden">
                              <div className="icon-animation relative w-full h-full">
                                 <img 
                                    src={htmlIcon} 
                                    className="html-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                                    style={{ animationDelay: '0s' }}
                                    alt="HTML"
                                    loading="lazy" 
                                 />
                                 <img 
                                    src={cssIcon}
                                    className="css-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                                    style={{ animationDelay: '2s' }}
                                    alt="CSS" 
                                    loading="lazy"
                                 />
                                 <img 
                                    src={jsIcon} 
                                    className="js-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                                    style={{ animationDelay: '4s' }}
                                    alt="JavaScript"
                                    loading="lazy"
                                 />
                                 <img 
                                    src={reactIcon} 
                                    className="react-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                                    style={{ animationDelay: '6s' }}
                                    alt="React"
                                    loading="lazy" 
                                 />
                                 <img 
                                    src={tailwindIcon} 
                                    className="tailwind-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                                    style={{ animationDelay: '8s' }}
                                    alt="Tailwind CSS"
                                    loading="lazy" 
                                 />
                                 <img 
                                    src={viteIcon} 
                                    className="vite-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                                    style={{ animationDelay: '10s' }}
                                    alt="Vite"
                                    loading="lazy" 
                                 />
                                 <img 
                                    src={gitIcon} 
                                    className="git-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                                    style={{ animationDelay: '12s' }}
                                    alt="Git"
                                    loading="lazy" 
                                 />
                                 <img
                                    src={vscodeIcon} 
                                    className="vsCode-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                                    style={{ animationDelay: '14s' }}
                                    alt="VS Code"
                                    loading="lazy" 
                                 />
                              </div>
                           </figure>
                        </div>
                        <div className="flex justify-center items-center">
                           <Link 
                              to="/about"
                              className="about-me__btn w-[300px] py-4 px-8 flex gap-2 justify-center items-center rounded-lg border border-(--main-purple)
                              sm:text-xl
                              lg:text-2xl
                              xl:py-6">
                              Обо мне
                              <img
                                 className="md:h-6 md:w-6"
                                 src={arrowRightIcon} 
                                 alt="contacts-page-icon" 
                                 height="16px" 
                                 width="16px"
                                 loading="lazy"/>
                           </Link>
                        </div>
                     </section>
                     <footer>
                        <div className="py-8 px-5 w-full relative bottom-0 left-1/2 translate -translate-x-1/2
                        sm:py-10
                        lg:bottom-0">
                           <p className="text-center sm:text-lg lg:text-xl">© 2025, Ахмеров Раиль</p>
                        </div>
                     </footer>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}

export default HomePage;
