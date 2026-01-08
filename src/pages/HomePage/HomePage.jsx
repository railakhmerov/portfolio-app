import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import macbookImage from "../../assets/CITYPNGCOMApple_Macb.webp"
import htmlIcon from "../../assets/notebook-icons/Html5.svg"
import cssIcon from "../../assets/notebook-icons/Css3.svg"
import jsIcon from "../../assets/notebook-icons/Javascript.svg"
import reactIcon from "../../assets/notebook-icons/React.svg"
import tailwindIcon from "../../assets/notebook-icons/Tailwindcss.svg"
import viteIcon from "../../assets/notebook-icons/Vitejs.svg"
import gitIcon from "../../assets/notebook-icons/Git.svg"
import vscodeIcon from "../../assets/notebook-icons/Vscode.svg"
import myImage from "../../assets/my-photo/image_1760972512988_0qjy8n.png"

function HomePage() {

console.log('htmlIcon:', htmlIcon)

   return (
      <div className="home-page w-full">
         <header className="navigation mb-10">
            <Navigation />
         </header>
         <main>
            <div className="container px-4 min-w-full sm:w-[450px] my-0 mx-auto">
               <section className="home-page__about-me mb-22
               sm:mb-40">
                  <div className="home-page__about-me_text">
                     <h2 className="mb-4 text-3xl font-bold text-(--main-purple)
                     sm:text-4xl">
                        Я Раиль - Frontend developer
                     </h2>
                     <p className="text-lg font-bold sm:text-xl">Люблю чай, красивые фотографии и программирование</p>
                  </div>
               </section>
               <div className="home-page__links-and-my-image mb-28 w-full flex flex-col gap-16 
                  sm:flex-row sm:gap-5 sm:items-center
                  md:mb-32">
                  <div className="home-page__links-btns 
                  sm:w-[45%]">
                     <div className="flex flex-col gap-4 text-xl
                     sm:gap-7 sm:text-2xl sm:w-full">
                        <Link 
                           to="/about"
                           className="about-me__btn w-full py-4 px-8 flex justify-center items-center rounded-lg border border-(--main-purple)">
                           Обо мне
                        </Link>
                        <Link 
                           to="/projects"
                           className="about-me__btn w-full py-4 px-8 flex justify-center items-center rounded-lg border border-(--main-purple)">
                           Портфолио
                        </Link>
                        <Link 
                           to="/contacts"
                           className="about-me__btn w-full py-4 px-8 flex justify-center items-center rounded-lg border border-(--main-purple)">
                           Контакты
                        </Link>
                     </div>
                  </div>
                  <div className="my-image flex justify-center items-center sm:w-[55%]">
                     <img 
                        src={myImage} 
                        alt="my-img" 
                        className="h-100 w-130 object-cover rounded-4xl border-2 border-(--main-purple) shadow-md
                        sm:w-md"/>
                  </div>
               </div>
               <section className="banner mb-28">
                  <div className="animation relative flex justify-center animate-fadeInOut">
                     <img src={macbookImage} alt="macbook" width="850px"/>
                     <figure className="absolute top-[43%] left-1/2 -translate-1/2 w-[64%] h-[48%] flex items-center justify-center overflow-hidden">
                        <div className="icon-animation relative w-full h-full">
                           <img 
                              src={htmlIcon} 
                              className="html-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                              style={{ animationDelay: '0s' }}
                              alt="HTML"
                              loading="lazy" 
                           />
                           <img 
                              src={cssIcon}
                              className="css-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                              style={{ animationDelay: '4s' }}
                              alt="CSS" 
                              loading="lazy"
                           />
                           <img 
                              src={jsIcon} 
                              className="js-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                              style={{ animationDelay: '8s' }}
                              alt="JavaScript"
                              loading="lazy"
                           />
                           <img 
                              src={reactIcon} 
                              className="react-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                              style={{ animationDelay: '12s' }}
                              alt="React"
                              loading="lazy" 
                           />
                           <img 
                              src={tailwindIcon} 
                              className="tailwind-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                              style={{ animationDelay: '16s' }}
                              alt="Tailwind CSS"
                              loading="lazy" 
                           />
                           <img 
                              src={viteIcon} 
                              className="vite-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                              style={{ animationDelay: '20s' }}
                              alt="Vite"
                              loading="lazy" 
                           />
                           <img 
                              src={gitIcon} 
                              className="git-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                              style={{ animationDelay: '24s' }}
                              alt="Git"
                              loading="lazy" 
                           />
                           <img
                              src={vscodeIcon} 
                              className="vsCode-icon absolute inset-0 w-full h-full object-contain opacity-0 animate-fadeInOut" 
                              style={{ animationDelay: '28s' }}
                              alt="VS Code"
                              loading="lazy" 
                           />
                        </div>
                     </figure>
                  </div>
               </section>
            </div>
         </main>
         <footer>
            <div className="py-8 px-5 w-full relative bottom-0 left-1/2 translate -translate-x-1/2
            sm:py-10">
               <p className="text-center sm:text-lg">© 2025, Ахмеров Раиль</p>
            </div>
         </footer>
      </div>
   );
}

export default HomePage;
