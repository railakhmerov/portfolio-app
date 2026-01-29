function SkillsIconsItem({img, text}) {
   return (
      <li className="skills__icon flex flex-col gap-3 justify-center items-center">
         <img 
            src={img}
            width="32px"
            height="32px" 
            loading="lazy"
            alt="icon" />
         <p className="text-center">{text}</p>
      </li>
   )
}

export default SkillsIconsItem