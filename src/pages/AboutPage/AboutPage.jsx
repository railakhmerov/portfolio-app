import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import AboutStartText from "../../components/AboutStartText/AboutStartText";
import Footer from "../../components/Footer/Footer";
import experienceIcon from "../../assets/about-me-icons/Bag.svg"
import codeIcon from "../../assets/about-me-icons/Code.svg"
import infinityIcon from "../../assets/about-me-icons/Infinity.svg"
import rulerIcon from "../../assets/about-me-icons/TriangularRuler.svg"
import sportIcon from "../../assets/about-me-icons/Dumbbell.svg"
import cameraIcon from "../../assets/about-me-icons/CameraFill.svg"
import teaIcon from "../../assets/about-me-icons/TeacupWithoutHandle.svg"
import myImage from "../../assets/my-photo/photo_2026-01-10_16-06-42.jpg"
import githubSocialLink from "../../assets/social-icons/Github.svg"
import telegramSocialLink from "../../assets/social-icons/Telegram.svg"
import arrowLeftIcon from "../../assets/ArrowLeft.svg"
import arrowRightIcon from "../../assets/ArrowRight.svg"

function AboutPage() {
   return (
      <div className="about-page w-full
      lg:flex">
         <header className="navigation mb-10
         lg:mb-0 lg:max-h-full lg:w-[10%] lg:flex">
            <Navigation />
         </header>
         <main className="min-h-screen scroll-auto
         lg:w-[90%]">
               <div className="sides min-h-full
               lg:flex lg:justify-between">
                  <div className="left-side__wrapper w-full
                  lg:w-1/2">
                     <div className="container px-4 min-w-full my-0 mx-auto
                     sm:w-[450px]">
                        <div className="left-sides mb-28
                        lg:py-14 lg:px-5 lg:mb-0 lg:w-full"> 
                           <AboutStartText />
                           <ul className="about-me__info max-w-[850px] m-auto grid grid-cols-1 gap-y-8 gap-x-4
                           mm:grid-cols-2
                           sm:text-xl">
                              <li className="about-me__info_item flex flex-col gap-3 justify-center items-center">
                                 <img
                                    src={experienceIcon} 
                                    alt="иконка" 
                                    width="32px"
                                    height="32px"
                                    loading="lazy"/>
                                 <p className="text-center">Опыт разработки 1.5 года</p>
                              </li>
                              <li className="about-me__info_item flex flex-col gap-3 justify-center items-center">
                                 <img
                                    src={codeIcon} 
                                    alt="иконка" 
                                    width="32px"
                                    height="32px"
                                    loading="lazy"/>
                                 <p className="text-center">Люблю программировать</p>
                              </li>
                              <li className="about-me__info_item flex flex-col gap-3 justify-center items-center">
                                 <img
                                    src={infinityIcon} 
                                    alt="иконка" 
                                    width="32px"
                                    height="32px"
                                    loading="lazy"/>
                                 <p className="text-center">Постоянно учусь</p>
                              </li>
                              <li className="about-me__info_item flex flex-col gap-3 justify-center items-center">
                                 <img
                                    src={rulerIcon} 
                                    alt="иконка" 
                                    width="32px"
                                    height="32px"
                                    loading="lazy"/>
                                 <p className="text-center">Склонный к перфекционизму</p>
                              </li>
                              <li className="about-me__info_item flex flex-col gap-3 justify-center items-center">
                                 <img
                                    src={sportIcon} 
                                    alt="иконка" 
                                    width="32px"
                                    height="32px"
                                    loading="lazy"/>
                                 <p className="text-center">Занимаюсь спортом</p>
                              </li>
                              <li className="about-me__info_item flex flex-col gap-3 justify-center items-center">
                                 <img
                                    src={cameraIcon} 
                                    alt="иконка" 
                                    width="32px"
                                    height="32px"
                                    loading="lazy"/>
                                 <p className="text-center">Люблю красивые фотографии</p>
                              </li>
                              <li className="about-me__info_item flex flex-col gap-3 justify-center items-center">
                                 <img
                                    src={teaIcon} 
                                    alt="иконка" 
                                    width="32px"
                                    height="32px"
                                    loading="lazy"/>
                                 <p className="text-center">Любитель чая</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="right-side__wrapper min-h-full bg-(--main-cyan)
                  lg:max-w-full lg:w-1/2">
                     <div className="container px-4 min-w-full my-0 mx-auto
                     sm:w-[450px]">
                        <div className="right-sides w-full relative
                        lg:px-8 lg:flex lg:flex-col lg:justify-between lg:items-center">
                           <div className="social-links pt-28 mb-10 flex flex-col gap-5
                           sm:pb-12">
                              <div className="flex justify-center items-center">
                                 <img
                                    className="w-80 h-80 rounded-full object-cover border-10 border-(--main-white)
                                    sm:h-100 sm:w-100" 
                                    src={myImage}
                                    alt="my-img" />
                              </div>
                              <div className="w-full flex justify-center items-center">
                                 <ul className="grid grid-cols-2 gap-3">
                                    <li className="h-15 w-15 flex justify-center items-center rounded-full bg-(--main-white)
                                    sm:h-18 sm:w-18">
                                       <a href="https://github.com/railakhmerov" target="_blank" rel="noopener noreferrer">
                                          <img
                                             className="sm:h-10 sm:w-10 animate-bounce" 
                                             src={githubSocialLink}
                                             width="32px"
                                             height="32px"
                                             alt="github-icon" 
                                             title="GitHub"/>
                                       </a>
                                    </li>
                                    <li className="h-15 w-15 flex justify-center items-center rounded-full bg-(--main-white)
                                    sm:h-18 sm:w-18">
                                       <a href="https://t.me/Akhmer0v" target="_blank" rel="noopener noreferrer">
                                          <img 
                                             className="sm:h-10 sm:w-10 animate-bounce"
                                             src={telegramSocialLink} 
                                             width="32px"
                                             height="32px"
                                             alt="telegram-icon" 
                                             title="Telegram"/>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="pb-28 flex flex-col gap-2 justify-center items-center">
                              <Link 
                                 to="/skills"
                                 className="skills__btn w-[300px] py-4 px-8 flex gap-2 justify-center items-center rounded-lg font-semibold bg-(--main-black)
                                 sm:text-xl
                                 lg:text-2xl
                                 xl:py-6">
                                 Навыки
                                 <img 
                                    src={arrowRightIcon}
                                    alt="arrows-icon"
                                    height="18px" 
                                    width="18px"
                                    loading="lazy" />
                              </Link>
                              <Link
                                 to="/"
                                 className="home__btn w-[300px] py-4 px-8 flex gap-2 justify-center items-center rounded-lg font-semibold bg-(--main-black)
                                 sm:text-xl
                                 lg:text-2xl
                                 xl:py-6">
                                 <img 
                                    src={arrowLeftIcon}
                                    alt="arrows-icon"
                                    height="18px" 
                                    width="18px"
                                    loading="lazy" />
                                 Главная
                              </Link>
                           </div>
                           <Footer />
                        </div>
                     </div>
                  </div>
               </div>
         </main>
      </div>
   );
}

export default AboutPage;
