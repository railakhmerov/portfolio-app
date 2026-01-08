import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import macbookImage from "../../assets/CITYPNGCOMApple_Macb.webp"
import htmlIcon from "../../assets/Html5.svg"
import cssIcon from "../../assets/Css3.svg"
import jsIcon from "../../assets/Javascript.svg"
import reactIcon from "../../assets/React.svg"
import tailwindIcon from "../../assets/Tailwindcss.svg"
import viteIcon from "../../assets/Vitejs.svg"
import gitIcon from "../../assets/Git.svg"
import vscodeIcon from "../../assets/Vscode.svg"

function HomePage() {

console.log('htmlIcon:', htmlIcon)

   return (
      <div className="home-page w-full">
         <div className="navigation mb-14">
            <Navigation />
         </div>
         <div className="container px-4 min-w-full sm:w-[450px] my-0 mx-auto">
            <section className="home-page__about-me mb-36
            sm:mb-44">
               <div className="home-page__about-me_text">
                  <h2 className="mb-4 text-3xl font-bold text-(--main-purple)
                  sm:text-4xl">
                     Я Раиль - Frontend developer
                  </h2>
                  <p className="text-lg font-bold sm:text-xl">Люблю чай, красивые фотографии и программирование</p>
               </div>
            </section>
            <section className="home-page__links-btns mb-36 flex flex-col gap-5 text-xl">
               <div className="about-me__btn w-full sm:w-[250px]">
                  <button className="py-4 px-8 w-full rounded-lg border border-(--main-purple)">
                     <Link to="/about">Обо мне</Link>
                  </button>
               </div>
               <div className="projects__btn w-full sm:w-[250px]">
                  <button className="py-4 px-8 w-full border border-(--main-purple) rounded-lg bg-transparent">
                     <Link to="/projects">Портфолио</Link>
                  </button>
               </div>
               <div className="contacts__btn w-full sm:w-[250px]">
                  <button className="py-4 px-8 w-full rounded-lg border border-(--main-purple)">
                     <Link to="/contacts">Контакты</Link>
                  </button>
               </div>
            </section>
            <section className="banner mb-12">
               <div className="animation relative animate-fadeInOut">
                  <img src={macbookImage} alt="macbook" />
                  <figure className="absolute top-[43%] left-1/2 -translate-1/2  w-[64%] h-[48%] flex items-center justify-center overflow-hidden">
                     <div className="icon-animation relative w-full h-full">
                        <img 
                           src={htmlIcon} 
                           className="html-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                           style={{ animationDelay: '0s' }}
                           alt="HTML" 
                        />
                        <img 
                           src={cssIcon}
                           className="css-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                           style={{ animationDelay: '4s' }}
                           alt="CSS" 
                        />
                        <img 
                           src={jsIcon} 
                           className="js-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                           style={{ animationDelay: '8s' }}
                           alt="JavaScript" 
                        />
                        <img 
                           src={reactIcon} 
                           className="react-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                           style={{ animationDelay: '12s' }}
                           alt="React" 
                        />
                        <img 
                           src={tailwindIcon} 
                           className="tailwind-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                           style={{ animationDelay: '16s' }}
                           alt="Tailwind CSS" 
                        />
                        <img 
                           src={viteIcon} 
                           className="vite-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                           style={{ animationDelay: '20s' }}
                           alt="Vite" 
                        />
                        <img 
                           src={gitIcon} 
                           className="git-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                           style={{ animationDelay: '24s' }}
                           alt="Git" 
                        />
                        <img
                           src={vscodeIcon} 
                           className="vsCode-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                           style={{ animationDelay: '28s' }}
                           alt="VS Code" 
                        />
                     </div>
                  </figure>
               </div>
            </section>
            <div className="p-5 w-full relative bottom-0 left-1/2 translate -translate-x-1/2">
               <p className="text-center">© 2025, Ахмеров Раиль</p>
            </div>
         </div>
      </div>
   );
}

export default HomePage;
