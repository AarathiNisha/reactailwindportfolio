import HeroImg from '../assets/hero.png';
import { FaLinkedin, FaGithub, FaMailBulk} from "react-icons/fa";
export default function Hero() {
      const config  = {
         subtitle: 'Im a Full-stack web developer',
         social: {
          linkedin: 'https://www.linkedin.com/in/aara-at01',
          github: 'https://github.com/AarathiNisha',
          mail: 'https://gmail.com/AarathiNisha',
      }
   }
   return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
    <div className=' md:w-1/2 flex flex-col'>
         <h1 className='text-white text-6xl font-hero-font'>Hi , <br/>I'm Aarathi Nisha
         <p className='text-2xl'>{config.subtitle}</p>
         </h1>
         <div className='flex py-10'>
            <a href={config.social.linkedin} className='pr-5 hover:text-white'><FaLinkedin size={40}/></a> 
            <a href={config.social.github} className='pr-5 hover:text-white' ><FaGithub size={40}/></a> 
            <a href={config.social.mail} className='hover:text-white'><FaMailBulk size={40}/></a> 
         </div>
    </div>
    <img className='md:w-1/3'src={HeroImg} />
   </section> 
}