function SkillsStartText() {
   return (
      <>
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
      </>
   )
}

export default SkillsStartText