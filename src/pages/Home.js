import { Button } from 'react-bootstrap';

const Home = (props) => {
    return (
        <div className="details">
            <div className="name-details">
                <h1>Hello, I'm Madhumida Sanjeeviraj.</h1>
                <h3>I'm a full-stack web developer</h3>
                <Button variant="primary" size="sm">Contact Me</Button>
            </div>
            <div className="image">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF74IrPsARdig/profile-displayphoto-shrink_800_800/0/1651174393409?e=1658966400&v=beta&t=mNOWD6UbtUoZ3ZasivC730QzRnDqBTHhUbCObQGY2to"></img>
            </div>
        </div>
    );
}

export default Home;