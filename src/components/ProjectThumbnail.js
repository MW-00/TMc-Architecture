import React from "react"

const ProjectThumbnail = ({title, type, image}) => {
    return (
        <div className="col projectCard" style={{ minHeight: '100px' }}>
            <div className="imgContainer ratio ratio-1x1">
                <img src={image} className="thumbnail" alt={title} />
            </div>

            <div className="projectTitle">
                <h5>{title}</h5>
                <h6>{type}</h6>
            </div>
        </div>



    );
}

export default ProjectThumbnail;