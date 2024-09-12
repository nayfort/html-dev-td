import {File, Hat, Tree} from "../../../../assets/imgs/index.jsx";
import './styles.css'

const Interaction = () => {
    return (
        <div>
            <div className='interaction--title'>Inizia a servire con noi</div>
            <div className="interaction--blocks">
                <div className='interaction--st-block'>
                    <img src={File} alt="File" className="interaction--picture"/>
                    <div className='interaction--blockTitle'>Registrazione</div>
                    <div className='interaction--blockDescr'>Compilare tutti i campi del modulo di registrazione sul sito web.</div>
                    <button className='interaction--button' onClick={() => {console.log('Start!')}}>INIZIARE</button>
                </div>
                <div className='interaction--mid-block'>
                    <img src={Hat} alt="Hat" className="interaction--picture"/>
                    <div className='interaction--blockTitle'>Consultazione di esperti</div>
                    <div className='interaction--blockDescr'>Dopo la registrazione, rispondere all'invito del Consulente di supporto di Petrol Energia e seguire tutte le sue istruzioni.</div>
                    <button className='interaction--button' onClick={() => {console.log('Start!')}}>INIZIARE</button>
                </div>
                <div className='interaction--last-block'>
                    <img src={Tree} alt="Tree" className="interaction--picture"/>
                    <div className='interaction--blockTitle'>Deposito</div>
                    <div className='interaction--blockDescr'>Dopo la verifica, è necessario depositare un minimo di 250 euro sul conto dell'azionista.</div>
                    <button className='interaction--button' onClick={() => {console.log('Start!')}}>INIZIARE</button>
                </div>
            </div>
        </div>
    );
};

export default Interaction;
