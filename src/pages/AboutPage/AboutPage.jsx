import Navigation from "../../components/Navigation/Navigation";
import experienceIcon from "../../assets/about-me-icons/Bag.svg"
import codeIcon from "../../assets/about-me-icons/Code.svg"
import infinityIcon from "../../assets/about-me-icons/Infinity.svg"
import rulerIcon from "../../assets/about-me-icons/TriangularRuler.svg"
import sportIcon from "../../assets/about-me-icons/Dumbbell.svg"
import cameraIcon from "../../assets/about-me-icons/CameraFill.svg"
import teaIcon from "../../assets/about-me-icons/TeacupWithoutHandle.svg"
import myImage from "../../assets/my-photo/photo_2026-01-10_16-06-42.jpg"

function AboutPage() {
   return (
      <div className="about-page w-full
      lg:flex">
         {/* навигация */}
         <header className="navigation mb-10
         lg:mb-0 lg:max-h-full lg:w-[10%] lg:flex">
            <Navigation />
         </header>
         <main>
            {/* <div className="container px-4 min-w-full sm:w-[450px] my-0 mx-auto">
            </div> */}
               <div className="sides
               lg:flex lg:justify-between">
                  <div className="left-side__wrapper">
                     <div className="container px-4 min-w-full my-0 mx-auto
                     sm:w-[450px]">
                        <div className="left-sides mb-40
                        lg:py-14 lg:px-5 lg:mb-0 lg:w-[50%]"> 
                           <div className="about-me__title mb-5">
                              <h2 className="text-3xl font-bold text-(--main-purple)
                              sm:text-4xl
                              lg:text-5x">
                                 Обо мне
                              </h2>
                           </div> 
                           <div className="about-me__text mb-12
                           sm:mb-18">
                              <p className="text-lg font-bold max-w-[750px]
                              sm:text-xl
                              lg:text-2xl">
                                 Я программист занимаюсь <span className="text-(--main-cyan)">фронтенд-разработкой</span>. 
                                 Создаю проекты и воплощаю в жизнь UI/UX идеи.
                              </p>
                           </div>
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
                  <div className="right-side__wrapper bg-(--main-cyan)">
                     <div className="container px-4 min-w-full my-0 mx-auto
                     sm:w-[450px]">
                        <div className="right-sides
                        lg:px-8 lg:w-[50%] lg:flex lg:flex-col lg:justify-between lg:items-center">
                           <div className="social-links">
                              <div className="flex justify-center items-center">
                                 <img
                                    className="w-80 h-80 rounded-full object-cover border-3 border-(--main-purple)
                                    sm:w-32 sm:h-32" 
                                    src={myImage}
                                    alt="my-img" />
                              </div>
                              <ul>
                                 <li></li>
                              </ul>
                           </div>

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
               </div>
         </main>
      </div>
   );
}

export default AboutPage;
