import React from 'react'
import ProjectSummary from '../projects/ProjectSumary'
const ProjectList = (props) => {
    // console.log(props);
    return (
        <div className="project-list section">
        {
            props.projectList.map( item =>{
                //console.log(item);
                return (
                    <ProjectSummary project={item} key={item.id} />
                )
            })}
        </div>
    )
}

export default ProjectList;