import AccordionItem from "../../components/AccordionItem/AccordionItem";
import Navigation from "../../components/Navigation/Navigation";
import js from "../../assets/accordion/Javascript.svg"
import react from "../../assets/accordion/React.svg"
import html from "../../assets/accordion/Html5.svg"
import tailwind from "../../assets/accordion/Tailwindcss.svg"
import scss from "../../assets/accordion/FileTypeScss.svg"
import css from "../../assets/accordion/Css3.svg"
import bem from "../../assets/accordion/Bem.svg"
import guard from "../../assets/skills-accordions-icons/ShieldFillCheck.svg"
import speedtest from "../../assets/skills-accordions-icons/BaselineSpeed.svg"
import psihology from "../../assets/skills-accordions-icons/BaselinePsychology.svg"
import device from "../../assets/skills-accordions-icons/Devices2.svg"
import todolist from "../../assets/skills-accordions-icons/TodoList.svg"
import chatGPT from "../../assets/skills-accordions-icons/OpenaiChatgpt.svg"
import youtube from "../../assets/skills-accordions-icons/YoutubeIcon.svg"
import yandexMusic from "../../assets/skills-accordions-icons/yandex-music.svg"
import git from "../../assets/skills-accordions-icons/Git.svg"
import yarn from "../../assets/skills-accordions-icons/YarnFill.svg"
import npm from "../../assets/skills-accordions-icons/NpmWordmark.svg"
import vite from "../../assets/skills-accordions-icons/Vitejs.svg"
import vscode from "../../assets/skills-accordions-icons/Vscode.svg"
import figma from "../../assets/skills-accordions-icons/Figma.svg"

function SkillsPage() {
   return (
      <div className="skills-page w-full
      lg:flex">
         <header className="navigation mb-10
         lg:mb-0 lg:max-h-full lg:w-[10%] lg:flex">
            <Navigation />
         </header>
         <main className="scroll-auto
         lg:w-[90%]">
            <div className="sides min-h-screen
            lg:flex lg:justify-between">
               <div className="left-side__wrapper min-h-full w-full
               lg:w-1/2">
                  <div className="container px-4 min-w-full my-0 mx-auto
                  sm:w-[450px]">
                     <div className="left-sides
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
                        <ul className="skills__icons mb-28 max-w-[850px] m-auto grid grid-cols-1 gap-y-8 gap-x-4
                        mm:grid-cols-2
                        sm:text-xl">
                           <li className="skills__icon flex flex-col gap-3 justify-center items-center">
                              <img 
                                 src={guard}
                                 width="32px"
                                 height="32px" 
                                 loading="lazy"
                                 alt="icon" />
                              <p className="text-center">Разрабатываю надежные и правильно работающие интерфейсы</p>
                           </li>
                           <li className="skills__icon flex flex-col gap-3 justify-center items-center">
                              <img 
                                 src={speedtest}
                                 width="32px"
                                 height="32px"
                                 loading="lazy"
                                 alt="icon" />
                              <p className="text-center">Пишу современный и производительный код</p>
                           </li>
                           <li className="skills__icon flex flex-col gap-3 justify-center items-center">
                              <img 
                                 src={psihology}
                                 width="32px"
                                 height="32px"
                                 loading="lazy"
                                 alt="icon" />
                              <p className="text-center">Выбираю простой способ решения задачи</p>
                           </li>
                           <li className="skills__icon flex flex-col gap-3 justify-center items-center">
                              <img 
                                 src={device}
                                 width="32px"
                                 height="32px"
                                 loading="lazy"
                                 alt="icon" />
                              <p className="text-center">Реализую адаптивный интерфейс и анимации</p>
                           </li>
                           <li className="skills__icon flex flex-col gap-3 justify-center items-center">
                              <img 
                                 src={todolist}
                                 width="32px"
                                 height="32px"
                                 loading="lazy"
                                 alt="icon" />
                              <p className="text-center">Планирую и декомпозирую задачи</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="right-side__wrapper min-h-full relative
               lg:max-w-full lg:w-1/2">
                  <div className="container px-4  min-w-full my-0 mx-auto
                  sm:w-[450px]">
                     <div className="right-sides 
                     lg:py-14 lg:px-5 lg:mb-0 lg:w-full">
                        <div className="skills-content pb-28 flex flex-col justify-center items-center">
                           <ul className="accordion w-full rounded-xl text-(--main-fullblack) bg-(--main-white)
                           lg:max-w-[600px]">
                              <AccordionItem 
                                 accordionItemTitle="Логика"
                                 itsFirstAccordion={true}
                              >
                                 <img 
                                    src={js}
                                    className="w-28 h-28 cursor-pointer title:bg-red-500"
                                    title="JS"
                                    alt="icon" />
                                 <img 
                                    src={react}
                                    className="w-28 h-28 cursor-pointer"
                                    title="React"
                                    alt="icon" />

                              </AccordionItem>
                              <AccordionItem 
                                 accordionItemTitle="Разметка"
                                 itsFirstAccordion={false}
                              >
                                 <img 
                                    src={react}
                                    className="w-28 h-28 cursor-pointer"
                                    title="React"
                                    alt="icon" />
                                 <img 
                                    src={html} 
                                    className="w-28 h-28 cursor-pointer"
                                    title="HTML"
                                    alt="" />
                              </AccordionItem>
                              <AccordionItem 
                                 accordionItemTitle="Стили"
                                 itsFirstAccordion={false}
                              >
                                 <img 
                                    src={tailwind}
                                    className="w-28 h-28 cursor-pointer"
                                    title="Tailwind CSS"
                                    alt="icon" />
                                 <img 
                                    src={scss} 
                                    className="w-28 h-28 cursor-pointer"
                                    title="SCSS"
                                    alt="icon" />
                                 <img 
                                    src={css} 
                                    className="w-28 h-28 cursor-pointer"
                                    title="CSS"
                                    alt="icon" />
                                 <img 
                                    src={bem} 
                                    className="w-28 h-28 cursor-pointer"
                                    title="BEM"
                                    alt="icon" />
                              </AccordionItem>
                              <AccordionItem
                                 accordionItemTitle="Утилиты"
                                 itsFirstAccordion={false}
                              >
                                 <img 
                                    src={git}
                                    className="w-28 h-28 cursor-pointer"
                                    title="Git"
                                    alt="icon" />                                 
                                 <img 
                                    src={yarn}
                                    className="w-28 h-28 cursor-pointer"
                                    title="yarn"
                                    alt="icon" />                                 
                                 <img 
                                    src={npm}
                                    className="w-28 h-28 cursor-pointer"
                                    title="npm"
                                    alt="icon" />                                 
                                 <img 
                                    src={vite}
                                    className="w-28 h-28 cursor-pointer"
                                    title="Vite"
                                    alt="icon" />                                 
                              </AccordionItem>
                              <AccordionItem
                                 accordionItemTitle="Разное"
                                 itsFirstAccordion={false}
                              >
                                 <img 
                                    src={chatGPT} 
                                    className="w-28 h-28 cursor-pointer"
                                    title="Chat GPT"
                                    alt="icon" />
                                 <img 
                                    src={youtube} 
                                    className="w-28 h-28 cursor-pointer"
                                    title="YouTube"
                                    alt="icon" />
                                 <img 
                                    src={yandexMusic} 
                                    className="w-28 h-28 cursor-pointer"
                                    title="Yandex Music"
                                    alt="icon" />
                              </AccordionItem>
                              <AccordionItem
                                 accordionItemTitle="Программы"
                                 itsFirstAccordion={false}
                              >
                                 <img 
                                    src={vscode} 
                                    className="w-28 h-28 cursor-pointer"
                                    title="VS Code"
                                    alt="icon" />
                                 <img 
                                    src={figma} 
                                    className="w-28 h-28 cursor-pointer"
                                    title="Figma"
                                    alt="icon" />
                              </AccordionItem>
                           </ul>
                        </div>
                        <footer className="w-full fixed bottom-0 left-0 font-semibold
                        lg:absolute">
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

export default SkillsPage;