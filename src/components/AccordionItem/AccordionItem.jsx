import { useState } from "react"
import triangle from "../../assets/accordion/TriangleRightFill.svg"

function AccordionItem({ accordionItemTitle, children, itsFirstAccordion }) {
   const [isOpen, setIsOpen] = useState(false)

   return (
      itsFirstAccordion ? (
         <li className="accordion__item p-4 border-b">
            <div
               className="accordion__title flex justify-between items-center text-xl cursor-pointer"
               onClick={() => setIsOpen(!isOpen)}
            >
               <h2>{accordionItemTitle}</h2>
               <img
                  src={triangle}
                  alt="toggle"
                  className={isOpen ? 'rotate-0' : 'rotate-90'}
                  style={{ transition: 'transform 0.2s' }}
               />
            </div>
            {!isOpen && (
               <div className="accordion__content mt-10 h-max grid grid-cols-2 justify-items-center
               mm:flex mm:flex-wrap mm:gap-1.5
               sm:gap-8
               lg:grid lg:grid-cols-2 lg:justify-items-center
               xl:flex xl:flex-wrap">
                  {children}
               </div>
            )}
         </li>
      ) : (
         <li className="accordion__item p-4 border-b">
            <div
               className="accordion__title flex justify-between items-center text-xl cursor-pointer"
               onClick={() => setIsOpen(!isOpen)}
            >
               <h2>{accordionItemTitle}</h2>
               <img
                  src={triangle}
                  alt="toggle"
                  className={isOpen ? 'rotate-90' : 'rotate-0'}
                  style={{ transition: 'transform 0.5s' }}
               />
            </div>
            {isOpen && (
               <div className="accordion__content mt-10 h-max grid grid-cols-2 justify-items-center
               mm:flex mm:flex-wrap mm:gap-1.5
               sm:gap-8
               lg:grid lg:grid-cols-2 lg:justify-items-center
               xl:flex xl:flex-wrap">
                  {children}
               </div>
            )}
         </li>
      )
   )
}

export default AccordionItem