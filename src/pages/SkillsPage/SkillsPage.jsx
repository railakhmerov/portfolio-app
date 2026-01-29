import Navigation from "../../components/Navigation/Navigation";
import SkillsStartText from "../../components/SkillsStartText/SkillsStartText";
import SkillsIcons from "../../components/SkillsIconsWrapper/SkillsIconsWrapper";
import AccordionWrapper from "../../components/AccordionWrapper/AccordionWrapper";
import Footer from "../../components/Footer/Footer";

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
                        <SkillsStartText />
                        <SkillsIcons />
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
                           <AccordionWrapper />
                        </div>
                        <Footer />
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}

export default SkillsPage;