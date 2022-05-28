import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { AiFillLinkedin } from 'react-icons/ai'

function About(props) {
    // create state to hold about data
    const [about, setAbout] = useState(null);

    // create function to make api call
    const getAboutData = async () => {
        // make api call and get response
        const response = await fetch(props.URL + "about");
        // turn response into javascript object
        const data = await response.json();
        console.log(data)
        // set the about state to the data
        setAbout(data);
    };

    // make an initial call for the data inside a useEffect, so it only happens once on component load
    useEffect(() => { getAboutData() }, []);

    // define a function that will return the JSX needed once we get the data
    const loaded = () => (

        <div className="my-data">
            <h2>{about.name}</h2>
            <h4 style={{ fontStyle: "italic" }}>{about.email}</h4>
            <p>{about.bio}</p>
            <IconContext.Provider value={{ color: "white", size: '1.5em' }}>
                <div>
                    <a href="https://www.linkedin.com/in/madhumida-sanjeeviraj/" target="_blank"><AiFillLinkedin /></a>

                </div>
            </IconContext.Provider>

        </div>
    );

    // if data arrives return the result of loaded, if not, an h1 that says loading
    return about ? loaded() : <h1>Loading...</h1>;
}

export default About;