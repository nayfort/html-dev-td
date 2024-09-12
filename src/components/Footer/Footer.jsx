import './styles.css'
import {NavLink} from "react-router-dom";
import {BDHodlings, CarloCassara, ItalyBank, Logo, Mediobanca, Unicredit} from "../../assets/imgs/index.jsx";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer--firstBlock">
                <div className='footer--text'>Gli azionisti dell'azienda</div>
                <div className='footer--pics'>
                    <img src={Mediobanca} alt="Mediobanca" className='mb-pic'/>
                    <img src={Unicredit} alt="Unicredit" className='uc-pic'/>
                    <img src={ItalyBank} alt="ItalyBank" className='ib-pic'/>
                    <img src={BDHodlings} alt="BDHodlings" className='bd-pic' />
                    <img src={CarloCassara} alt="CarloCassara" className='cc-pic' />
                    <img src={Logo} alt="Generali" className="project-logo-pic"/>
                </div>
            </div>
            <div className="footer--secondBlock">
                <img src={Logo} alt="logo" className="project-logo-footer"/>
                <div className='footer--links'>
                    <NavLink exact to="/" activeClassName="active" className="app-link-footer">
                        Mappa del sito
                    </NavLink>
                    <NavLink exact to="/" activeClassName="active" className="app-link-footer">
                        Termini di utilizzo
                    </NavLink>
                    <NavLink exact to="/" activeClassName="active" className="app-link-footer">
                        Avviso di accessibilità
                    </NavLink>
                    <NavLink exact to="/" activeClassName="active" className="app-link-footer">
                        Gestione dei Cookie
                    </NavLink>
                    <NavLink exact to="/" activeClassName="active" className="app-link-footer">
                        Politica sulla protezione dei dati e informativa sulla privacy
                    </NavLink>
                    <NavLink exact to="/" activeClassName="active" className="app-link-footer">
                        Avviso di frode Web e phishing
                    </NavLink>
                    <NavLink exact to="/" activeClassName="active" className="app-link-footer">
                        Politica sui reclami – Australia
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;
