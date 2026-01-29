import Navigation from "../../components/Navigation/Navigation";
import ContactsStartText from "../../components/ContactsStartText/ContactsStartText";
import Footer from "../../components/Footer/Footer";

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
                        <ContactsStartText />
                     </div>
                  </div>
               </div>
               <Footer />
            </div>
         </main>
      </div>
   );
}

export default ContactsPage;
