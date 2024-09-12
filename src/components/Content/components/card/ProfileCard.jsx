import './styles.css';
import {Facebook, Jeff} from "../../../../assets/imgs/index.jsx";

const ProfileCard = () => {
    return (
        <div className='profile-card-component'>
            <div className='profile-card'>
                <div className='profile-card-header'>
                    <img src={Jeff} alt="Jeff" className="profile-card__img"/>
                    <div className='profile-card-info'>
                        <div className='profile-card-name'>Jeff Bezos:</div>
                        <div className='profile-card-title'>Technologieunternehmer, Investor und Philanthrop</div>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt="Facebook" className="profile-card__net"/>
                        </a>
                    </div>
                </div>
                <div className='profile-card-description'>Dem Quantencomputing gehört die Zukunft. Ich übertreibe nicht,
                    wenn ich sage, es wird
                    alles verändern wird. Das Quantencomputing steht noch ganz am Anfang; nicht viele
                    Menschen wissen davon, was bedeutet, dass nur sehr wenige es nutzen. Die wenigen, die
                    es nutzen, treffen unglaublich kluge (und profitable) Entscheidungen.</div>
            </div>
        </div>
    );
};

export default ProfileCard;
