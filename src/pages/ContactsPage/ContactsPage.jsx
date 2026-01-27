import Navigation from "../../components/Navigation/Navigation";

function ContactsPage() {
   return (
      <div className="contacts-page min-h-screen h-full w-full
      lg:flex">
         <header className="navigation mb-10
         lg:mb-0 lg:max-h-full lg:w-[10%] lg:flex">
            <Navigation />
         </header>
         <main className="min-h-full scroll-auto 
         lg:w-[90%]">
            <div className="sides min-h-full
            lg:flex lg:flex-row lg:justify-between">
               <div className="left-side__wrapper h-full w-full relative
               lg:w-1/2">
                  <div className="container px-4 my-0 w-full
                  lg:mx-auto">
                     <div className="left-sides mb-28
                     lg:py-14 lg:px-5 lg:mb-0 lg:w-full">
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
                     </div>
                  </div>
               </div>
               <footer className="w-full absolute bottom-0 left-0 font-semibold
               lg:absolute lg:bottom-0 lg:left-0">
                  <div className="py-8 px-5 w-full relative bottom-0 left-1/2 translate -translate-x-1/2
                  sm:py-10
                  lg:bottom-0">
                     <p className="text-center sm:text-lg lg:text-xl">© 2025, Ахмеров Раиль</p>
                  </div>
               </footer>
            </div>
         </main>
      </div>
   );
}

export default ContactsPage;
