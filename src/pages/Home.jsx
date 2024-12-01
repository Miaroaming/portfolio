import React, {useEffect, useState} from 'react'
import axios from 'axios';
import ProjectDetails from '../components/ProjectDetails';
import {useNavigate} from 'react-router-dom'
// qualification icons
import { MdDesignServices } from "react-icons/md";
import { LuFolderCog2 } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { SiTaichigraphics } from "react-icons/si";
import { TbCodeDots } from "react-icons/tb";
import { FaLaptop } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { LuPackageOpen } from "react-icons/lu";
import { DiMongodb } from "react-icons/di";
import { SiAdobecreativecloud } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { LuFigma } from "react-icons/lu";
import { FaWordpress } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiNodemon } from "react-icons/si";

// skill icons
import { GiTalk } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { IoTimer } from "react-icons/io5";
import { IoCalendarSharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPuzzlePiece } from "react-icons/fa6";
import { GiPublicSpeaker } from "react-icons/gi";
import { GiStrong } from "react-icons/gi";
import { FaBrain } from "react-icons/fa6";
import { ImPencil2 } from "react-icons/im";

const Home = () => {

    const [projects, setProjects] = useState(null)

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('/WEB.json')
 
            if (response.status === 200) {
                console.log(response.data);
                
                setProjects(response.data)
                
            }
        }
 
        fetchProjects()
    }, [])

    const navigate = useNavigate();
    const handleNavigate = () => {
        let path = `/contact`;
        navigate(path);
    };

  return (
    <>
    <div className='box'>
        <div className='box-txt'>
            <h2>Kia ora and Welcome to</h2>
            <h1>Mia Lamerton Design</h1>
            <h3>I’m a qualified Web and UX designer/developer. Feel free to reach out if you’re interested in collaborating or utilizing my skills!</h3>
        </div>
      
      <div className='home-img' />
    </div>


    <h2 className='skills-header'>Qualifications</h2>
    <div className='skills-cont'>
        <div className='skill'>
        <MdDesignServices />    
        <h3>UI & UX Design</h3>
        </div>

        <div className='skill'>
        <LuFolderCog2 />    
        <h3>CMS</h3>
        </div>
        
        <div className='skill'>
        <IoCodeSlash />    
        <h3>HTML & CSS</h3>
        </div>

        <div className='skill'>
        <SiTaichigraphics />    
        <h3>Graphic Design</h3>
        </div>

        <div className='skill'>
        <TbCodeDots />  
        <h3>Javascript</h3>
        </div>

        <div className='skill'>
        <FaLaptop />   
        <h3>Web Design</h3>
        </div>

        <div className='skill'>
        <RiReactjsLine />    
        <h3>React</h3>
        </div>

        <div className='skill'>
        <DiMongodb />   
        <h3>MongoDB</h3>
        </div>
        
        <div className='skill'>
        <LuPackageOpen />   
        <h3>Package Design</h3>
        </div>

        <div className='skill'>
        <SiAdobecreativecloud />  
        <h3>Adobe Creative Cloud</h3>
        </div>

        <div className='skill'>
        <FaGithub /> 
        <h3>Github</h3>
        </div>

        <div className='skill'>
        <LuFigma /> 
        <h3>Figma</h3>
        </div>

        <div className='skill'>
        <FaWordpress /> 
        <h3>Wordpress</h3>
        </div>

        <div className='skill'>
        <SiPostman /> 
        <h3>Postman</h3>
        </div>

        <div className='skill'>
        <SiNodemon />
        <h3>Nodemon</h3>
        </div>
    </div>


    <div className='post-box'>
        <h2>Recent Work</h2>
        <div className='post-row'>
                    {/* if there is workouts map over the array */}
         {projects && projects.map((project, index) => {
                return (
                    <ProjectDetails key={index} project={project}/>
                )
            })}
        </div>
    </div>        

    <h2 className='skills-header'>Soft Skills</h2>
    <div className='skills-cont'>
        <div className='skill'>
        <GiTalk />   
        <h3>Communication</h3>
        </div>

        <div className='skill'>
        <RiTeamFill />    
        <h3>Team Work</h3>
        </div>
        
        <div className='skill'>
        <IoTimer />    
        <h3>Time Management</h3>
        </div>

        <div className='skill'>
        <IoCalendarSharp />    
        <h3>Organisation</h3>
        </div>

        <div className='skill'>
        <RiCustomerService2Fill /> 
        <h3>Customer Service</h3>
        </div>

        <div className='skill'>
        <FaPuzzlePiece />   
        <h3>Problem Solving</h3>
        </div>

        <div className='skill'>
        <GiPublicSpeaker />  
        <h3>Leadership</h3>
        </div>

        <div className='skill'>
        <GiStrong />  
        <h3>Determination</h3>
        </div>
        
        <div className='skill'>
        <FaBrain />   
        <h3>Critical Thinking</h3>
        </div>

        <div className='skill'>
        <ImPencil2 />   
        <h3>Attention to Detail</h3>
        </div>
    </div>

    <div className='post-box'>
        <div className='about-section'>
            <img src="/images/mia.jpg" alt="mia-about" />
            <div className='about-info'>
                <h2>About me</h2>
                <p>From a young age, I’ve always found joy in design, appreciating how creativity and aesthetics come together to communicate ideas. Over time, programming has added a new layer to this passion, bringing my ideas to life and adding a satisfying challenge. 
                <br /> <br />
                Combining these skills allows me to craft experiences that are as enjoyable to build as they are to use. And now, as a freelance UX and web designer/developer, I bring this passion to every project I take on, creating intuitive designs and seamless functionality tailored to clients' unique needs.
                </p>
                <button className='contact-btn' onClick={handleNavigate}>Contact Me</button>
            </div>
        </div>
            
    </div>
    </>
    
  )
}

export default Home
