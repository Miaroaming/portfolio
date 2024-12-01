import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

const Singlepage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleBackClick = (event) => {
        event.preventDefault();
        navigate(-1);
    }

    // fetching projects
    useEffect(() => {
        const fetchProject = async () => {
            try{
                const response = await axios.get('/WEB.json');
                const numericId= Number(id);
                const foundProject = response.data.find((p) => p.id === numericId);
                if (foundProject) {
                    console.log(foundProject);
                    
                    setProject(foundProject);
                }
                console.log(foundProject);
                
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the project data:', error);
                setLoading(false);
              }
        }
 
        fetchProject()
    }, [id]);

    if (loading) {
        return <p>Loading project details...</p>;
        
    }

  return (
    <>
    <div className='single-header'>
        <button className='read-more' onClick={handleBackClick}><FaArrowLeftLong /> Back</button>
        <h2>{project.name}</h2>
    </div>

    <div className='single-section'>
        <div className='single-img'>
            <img src={project.image} alt={project.name} />
        </div>

        <div className='single-info'>
            <div className='single-title'>
                <h2>Project Type: {project.type}</h2>
                <h3>Date Completed: {project.date_created}</h3>
            </div>
            
            <h3>{project.code}</h3>
            <div className='single-description'>
                <h3>Description:</h3>
                <p dangerouslySetInnerHTML={{__html: project.description}}/>
            </div>

            <div className='single-description'>
                <h3>Website Link:</h3>
                <a href={project.link}> <p>{project.link}</p> </a>
            </div>
            
            
        </div>
    </div>
    
    </>
    
  )
}

export default Singlepage
