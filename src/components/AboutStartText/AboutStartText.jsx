function AboutStartText(){
   return (
      <>
         <div className="about-me__title mb-5">
            <h2 className="text-3xl font-bold text-(--main-purple)
            sm:text-4xl
            lg:text-5x">
               Обо мне
            </h2>
         </div> 
         <div className="about-me__text mb-12
         sm:mb-18
         xl:mb-24">
            <p className="text-lg font-bold max-w-[750px]
            sm:text-xl
            lg:text-2xl">
               Я программист занимаюсь <span className="text-(--main-cyan)">фронтенд-разработкой</span>. 
               Создаю проекты и воплощаю в жизнь UI/UX идеи.
            </p>
         </div>
      </>
   )
}

export default AboutStartText
