import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function Projects(props) {
    // create state to hold projects
    const [projects, setProjects] = useState(null);

    //create function to make api call
    const getProjectsData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + "projects");
        // turn response into javascript object
        const data = await response.json();
        console.log(data)
        // set the projects state to the data
        setProjects(data);
    };

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => {
        getProjectsData()
    }, []);

    // define a function that will return the JSX needed once we get the data
    const loaded = () => {
        const imgStyle = {
            height: "300px",
            width: "450px",
            justifyContent: "centre",
        }
        return projects.map((project) => (
            <div className="project-display">
                <div>
                    <h1>{project.name}</h1>
                    <img style={imgStyle} src={project.image} /> <br />
                </div>
                <div className="project-buttons">
                    <a href={project.git}>
                        <Button>Github</Button>
                    </a><br />
                    <a href={project.live}>
                        <Button>Live Site</Button>
                    </a>
                </div>
            </div>
        ));
    };

    return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;