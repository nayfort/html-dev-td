import Logo from '../../assets/imgs/logo.png';
import './styles.css'
import {NavLink} from "react-router-dom";
import {useIsMobile} from "../../hooks/useIsMobile.jsx";
import Stack from "../../assets/imgs/svg/Stack.jsx";

const Header = () => {
    const isMobile = useIsMobile();

    return (
        <div className='header'>
            <img src={Logo} alt="logo" className="project-logo" />
            {
                isMobile ? (
                    <Stack className="mob-burger-menu" onClick={() => {console.log('There should be a burger menu here with links from desktop which won\'t redirect anywhere))')}}/>
                ) : (
                    <div className='header--links'>
                        <NavLink exact to="/" activeClassName="active" className="app-link">
                            Informazioni
                        </NavLink>
                        <NavLink exact to="/" activeClassName="active" className="app-link">
                            CEO
                        </NavLink>
                        <NavLink exact to="/" activeClassName="active" className="app-link">
                            Iniziare a guadagnare subito
                        </NavLink>
                    </div>
                )
            }
            {!isMobile && <div></div>}
        </div>
    );
};

export default Header;
