/** @jsx jsx **/
import { jsx } from 'theme-ui';
import { Button } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
    return (
        <header sx={{bg: "backgroundSecondary"}}>
            <h3 className="logo-text" sx={{ color:"text"}}>
            <img src={require('../../assets/hnet.com-image.ico')} alt='logo'/>
            plant doctor
            </h3>
            <div className="buttons"> 
            <Button className="plantButton" variant="success">plants</Button>
            <Button className="codeButton" variant="success" href="https://github.com/jakeshoemaker/plantDoctor">code</Button>
            <Button className="aboutMeButton" variant="success" href="https://jakeshoemaker.github.io/portfolio">about me</Button>
            </div>
            {' '}
        </header>
    );
};

export default Header;