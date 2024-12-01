import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProjectDetails = ({project}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        let path = `/project/${project.id}`;
        navigate(path);
    };

  return (
    <>
    <div className='post'>
        <img className='post-img' src={project.image} alt={project.name}/>
        <h3>{project.name}</h3>
        <p> <strong>{project.type}</strong></p>
        <p>{project.code}</p>
        <p>{project.date_created}</p>
        <button className='read-more' onClick={handleNavigate}>Read more</button>
    </div>
    </>

    // projects[(project.id - 1)]
      
  )
}

export default ProjectDetails
