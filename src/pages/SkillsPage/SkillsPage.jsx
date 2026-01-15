import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import triangle from "../../assets/accordion/TriangleRightFill.svg"
import js from "../../assets/accordion/Javascript.svg"
import react from "../../assets/accordion/React.svg"
import html from "../../assets/accordion/Html5.svg"

function SkillsPage() {
   const [accordionOpen, setAccordionOpen] = useState(false)

   function clickOnAccordion() {
      console.log('accordion is open')
      setAccordionOpen(!accordionOpen)
   }

   return (
      <div className="skills-page w-full
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
                        <div className="skills__title mb-5">
                           <h2 className="text-3xl font-bold text-(--main-purple)
                           sm:text-4xl
                           lg:text-5x">
                              Навыки
                           </h2>
                        </div>
                        <div className="skills__text mb-12
                        sm:mb-18
                        xl:mb-24">
                           <p className="text-lg font-bold max-w-[750px]
                           sm:text-xl
                           lg:text-2xl">
                              Разрабатываю <span className="text-(--main-cyan)">приложения</span>, <span className="text-(--main-cyan)">многостраничные сайты</span> и <span className="text-(--main-cyan)">лендинги</span>.
                              Любимый стек - <span className="underline text-(--main-cyan)">React</span> + <span className="underline text-(--main-cyan)">Tailwind/Material UI</span> + <span className="underline text-(--main-cyan)">Vite</span>
                           </p>
                        </div>
                        <div className="skills-content">
                           <ul className="accordion rounded-xl text-(--main-fullblack) bg-(--main-white)">
                              <li className="accordion__item p-4 border-b">
                                 <div
                                    className="accordion__title flex justify-between items-center text-xl"
                                    onClick={clickOnAccordion}>
                                       <h2>Логика</h2>
                                       <img 
                                          src={triangle} 
                                          alt="icon-btn" />
                                 </div>
                                 {accordionOpen === true ? (
                                    <div className="accordion__content mt-10 h-max grid grid-cols-2">
                                       <img src={js} alt="js-icon" />
                                       <img src={react} alt="js-icon" />
                                    </div>
                                 ) : (
                                    ''
                                 )}
                              </li>
                              <li className="accordion__item p-4 border-b">
                                 <div 
                                    className="accordion__title flex justify-between items-center text-xl"
                                    onClick={clickOnAccordion}>
                                       <h2>Разметка</h2>
                                       <img 
                                          src={triangle}
                                          alt="icon-btn" />
                                 </div>
                                 {accordionOpen === true ? (
                                    <div className="accordion__content mt-10 h-max grid grid-cols-2">
                                       <img src={html} alt="js-icon" />
                                       <img src={react} alt="js-icon" />
                                    </div>
                                 ) : (
                                    ''
                                 )}
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="right-side__wrapper min-h-full
               lg:max-w-full lg:w-1/2">
                  <div className="px-4 min-w-full my-0 mx-auto
                  sm:w-[450px]">
                     <div className="right-sides mb-28
                     lg:py-14 lg:px-5 lg:mb-0 lg:w-full">
                        правая сторона
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}

export default SkillsPage;