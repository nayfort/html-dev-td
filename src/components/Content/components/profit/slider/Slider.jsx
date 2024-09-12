import { useEffect } from 'react';
import $ from 'jquery';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider';
import './styles.css'
import {useIsMobile} from "../../../../../hooks/useIsMobile.jsx";

// eslint-disable-next-line react/prop-types
const MultiSliderIon = ({ onProfitChange }) => {
    const isMobile = useIsMobile();
    const containerStyle = {
        padding: isMobile ? '10px 0 20px 0' : '20px 0 50px 0',
        width: isMobile ? '350px' : '400px',
    };

    const handleAmountChange = (data) => {
        const amount = data.from;
        const investment = $('#investmentSlider').data('from');
        calculateProfit(amount, investment);
    };

    const handleInvestmentChange = (data) => {
        const amount = $('#monthSlider').data('from');
        const investment = data.from;
        calculateProfit(amount, investment);
    };

    const calculateProfit = (amount, investment) => {
        const calculatedProfit = amount * 0.2 + investment * 0.4;
        onProfitChange(calculatedProfit);
    };

    useEffect(() => {
        $('#monthSlider').ionRangeSlider({
            skin: 'flat',
            min: 1,
            max: 12,
            from: 1,
            grid: true,
            grid_num: 5,
            prettify_enabled: true,
            onChange: handleAmountChange,
            onUpdate: function () {
                $('.irs-min').append(' month');
                $('.irs-max').append(' months');
            }
        });

        $('#investmentSlider').ionRangeSlider({
            skin: 'flat',
            min: 300,
            max: 15000,
            from: 300,
            step: ((15000 - 300) / 20),
            grid: true,
            grid_num: 5,
            prettify_enabled: true,
            prettify_separator: ' ',
            onChange: handleInvestmentChange,
            onUpdate: function () {
                $('.irs-min').append(' €');
                $('.irs-max').append(' €');
            }
        });

        return () => {
            $('#monthSlider').data('ionRangeSlider').destroy();
            $('#investmentSlider').data('ionRangeSlider').destroy();
        };
    }, []);

    return (
        <div style={containerStyle}>
            <div>
                <input type="text" id="monthSlider" name="monthSlider" />
            </div>

            <div>
                <input type="text" id="investmentSlider" name="investmentSlider" />
            </div>
        </div>
    );
};

export default MultiSliderIon;
