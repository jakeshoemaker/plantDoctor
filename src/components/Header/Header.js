/** @jsx jsx **/
import { jsx } from 'theme-ui';
import { Button } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
    return (
        <header sx={{bg: "backgroundSecondary"}}>
            <h1 className="logo-text" sx={{ color:"text"}}>
            <img src={require('../../assets/hnet.com-image.ico')} alt='logo'/>
            plant doctor
            </h1>
            <Button className="plantButton" variant="success">plants</Button>{' '}
        </header>
    );
};

export default Header;