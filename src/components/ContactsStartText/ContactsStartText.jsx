function ContactsStartText(){
   return (
      <>
         <div className="contacts__title mb-7">
            <h2 className="text-3xl font-bold text-(--main-purple)
            sm:text-4xl
            lg:text-5x">
               Контакты
            </h2>
         </div> 
         <div className="contacts__text mb-12
         sm:mb-18
         xl:mb-24">
            <p className="text-lg font-bold max-w-[750px]
            sm:text-xl
            lg:text-2xl">
               Нужна моя <span className="text-(--main-cyan)">помощь?</span>
            </p>
            <p className="text-lg font-bold max-w-[750px]
            sm:text-xl
            lg:text-2xl">
               Есть ко мне <span className="text-(--main-cyan)">предложение?</span>
            </p>
            <p className="text-lg font-bold max-w-[750px]
            sm:text-xl
            lg:text-2xl">
               Отправьте мне <span className="text-(--main-cyan)">сообщение</span> на <a className="border-b text-xl sm:text-2xl lg:text-3xl" href="mailto:akhmerovrail.it@gmail.com">akhmerovrail.it@gmail.com</a>
            </p>
         </div>
      </>
   )
}

export default ContactsStartText
