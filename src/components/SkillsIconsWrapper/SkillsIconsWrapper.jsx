import SkillsIconsItem from "../SkillsIconsItem/SkillsIconsItem"
import guard from "../../assets/skills-accordions-icons/ShieldFillCheck.svg"
import speedtest from "../../assets/skills-accordions-icons/BaselineSpeed.svg"
import psihology from "../../assets/skills-accordions-icons/BaselinePsychology.svg"
import device from "../../assets/skills-accordions-icons/Devices2.svg"
import todolist from "../../assets/skills-accordions-icons/TodoList.svg"

function SkillsIconsWrapper() {
   return (
      <ul className="skills__icons mb-28 max-w-[850px] m-auto grid grid-cols-1 gap-y-8 gap-x-4
      mm:grid-cols-2
      sm:text-xl">
         <SkillsIconsItem 
            img={guard}
            text="Разрабатываю надежные и правильно работающие интерфейсы"
         />
         <SkillsIconsItem 
            img={speedtest}
            text="Пишу современный и производительный код"
         />
         <SkillsIconsItem 
            img={psihology}
            text="Выбираю простой способ решения задачи"
         />
         <SkillsIconsItem 
            img={device}
            text="Реализую адаптивный интерфейс и анимации"
         />
         <SkillsIconsItem 
            img={todolist}
            text="Планирую и декомпозирую задачи"
         />
      </ul>
   )
}

export default SkillsIconsWrapper