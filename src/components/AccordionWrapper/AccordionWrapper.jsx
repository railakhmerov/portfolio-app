import AccordionItem from "../../components/AccordionItem/AccordionItem";
import js from "../../assets/accordion/Javascript.svg"
import react from "../../assets/accordion/React.svg"
import html from "../../assets/accordion/Html5.svg"
import tailwind from "../../assets/accordion/Tailwindcss.svg"
import scss from "../../assets/accordion/FileTypeScss.svg"
import css from "../../assets/accordion/Css3.svg"
import bem from "../../assets/accordion/Bem.svg"
import chatGPT from "../../assets/skills-accordions-icons/OpenaiChatgpt.svg"
import youtube from "../../assets/skills-accordions-icons/YoutubeIcon.svg"
import yandexMusic from "../../assets/skills-accordions-icons/yandex-music.svg"
import git from "../../assets/skills-accordions-icons/Git.svg"
import yarn from "../../assets/skills-accordions-icons/YarnFill.svg"
import npm from "../../assets/skills-accordions-icons/NpmWordmark.svg"
import vite from "../../assets/skills-accordions-icons/Vitejs.svg"
import vscode from "../../assets/skills-accordions-icons/Vscode.svg"
import figma from "../../assets/skills-accordions-icons/Figma.svg"

function AccordionWrapper() {
   return (
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
   )
}

export default AccordionWrapper