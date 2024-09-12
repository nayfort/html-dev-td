import './styles.css'
import {Man} from "../../../../assets/imgs/index.jsx";
import MultiSlider from "./slider/Slider.jsx";
import {useState} from "react";

const ProfitInformation = () => {
    const [profit, setProfit] = useState(120.2);

    const handleProfitChange = (newProfit) => {
        setProfit(newProfit);
    };

    return (
        <div className="profit-container">
            <div className="man-block">
                <img src={Man} alt="Man" className='profit-image-man'/>
                <div className="profit-info">
                    Philippe Donnet, amministratore delegato di Generali,
                    ha appena festeggiato dieci anni in Italia e in un’intervista
                    a “Repubblica” spiega che bilancio trae dal nostro Paese:
                    “In questi dieci anni il mondo ha dovuto fare i conti con prove
                    molto dure e questo ci ha resi più capaci di gestire l’imprevedibile.
                    L’Italia ha resistito bene. Per quanto mi riguarda, tre anni fa sono
                    diventato cittadino italiano: perché ci tenevo a rimarcare un’adesione
                    forte ai valori e alla cultura di questo Paese”. Un’altra prova per l’economia
                    è stato il repentino rialzo dei tassi: “A mio parere è improprio parlare
                    oggi di tassi alti: quando ero teenager, i mutui viaggiavano a due cifre
                    percentuali. La vera anomalia è stata vivere con tassi a zero per quindici
                    anni. Oggi siamo in una situazione normale. Per quel che riguarda il
                    nostro gruppo, abbiamo un business mix grazie al quale possiamo crescere
                    in qualsiasi ciclo economico”. La crescita dell’Italia è stimata attorno allo
                    0,7 per cento: “Noi non avremo problemi ma per la crescita si può fare meglio,
                    in Italia e in Europa. Ritengo che in Europa non ci sia abbastanza Europa,
                    ma troppe tasse e troppe norme, che si sovrappongono a quelle nazionali.
                    Questo non aiuta né le famiglie né le imprese: quindi abbassiamo le tasse,
                    riduciamo le norme e liberiamo le energie imprenditoriali”.
                </div>
            </div>
            <div className='p-profit-text'>Potencijal dobiti</div>
            <div className='profit-calculate'>
                <div className='profit-card-block'>
                    <MultiSlider onProfitChange={handleProfitChange}/>
                    <div className='profit-sign'>MOGUĆA DOBIT: <div className='profit-result'>€ {profit}</div></div>
                </div>
                <div className='calc-part'>
                    <div>
                        <div className='calc-text-part'>UKUPNA DOBIT KORISNIKA:</div>
                        <div className='calc-sum'>€ 128 567 000</div>
                    </div>
                    <div>
                        <div className='calc-text-part'>AKTIVNI KORISNICI:</div>
                        <div className='calc-sum'>77 335</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfitInformation;
