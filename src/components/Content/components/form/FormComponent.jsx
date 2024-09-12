import './styles.css';
import { NormalRectangle, Rectangle } from "../../../../assets/imgs/index.jsx";
import intlTelInput from "intl-tel-input";
import 'intl-tel-input/build/css/intlTelInput.css';
import { useEffect, useRef } from "react";
import { useIsMobile } from "../../../../hooks/useIsMobile.jsx";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstName: Yup.string()
        .max(50, 'First name must be 50 characters or less')
        .required('First name is required'),
    lastName: Yup.string()
        .max(50, 'Last name must be 50 characters or less')
        .required('Last name is required'),
    email: Yup.string()
        .email('Invalid email format')
        .max(64, 'Email must be 64 characters or less')
        .required('Email is required'),
    phone: Yup.string()
        .max(15, 'Phone number must be 15 characters or less')
        .required('Phone number is required')
});

const FormComponent = () => {
    const isMobile = useIsMobile();
    const phoneInputRef = useRef(null);
    let itiInstance = useRef(null);

    useEffect(() => {
        const input = phoneInputRef.current;

        itiInstance.current = intlTelInput(input, {
            initialCountry: 'ua',
            separateDialCode: !isMobile,
            autoHideDialCode: false,
            formatOnDisplay: false
        });

        return () => {
            if (itiInstance.current) itiInstance.current.destroy();
        };
    }, [isMobile]);

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log('Form submitted:', values);
                resetForm();

                if (itiInstance.current) {
                    itiInstance.current.setNumber('');
                }
            }}
        >
            {({ setFieldValue, handleSubmit, errors, touched }) => (
                <Form onSubmit={(e) => {
                    const phoneNumber = itiInstance.current.getNumber();
                    const isValid = itiInstance.current.isValidNumber();

                    if (!isValid || phoneNumber.length > 15) {
                        setFieldValue('phone', '', false);
                    } else {
                        setFieldValue('phone', phoneNumber);
                    }

                    handleSubmit(e);
                }}>
                    <div className="form-component">
                        <div className='form-description'>
                            Investire 250 euro per raggiungere 5000 euro in una settimana vi sembra impossibile?
                            Con il Gruppo Generali potete fare ancora di più!
                        </div>
                        {isMobile && <img src={NormalRectangle} alt="rectangle" className="rectangle-pic" />}
                        <div className='form-container'>
                            <div className='form'>
                                <Field
                                    name="firstName"
                                    placeholder="il suo nome"
                                    className='form-control'
                                    maxLength="50"
                                />
                                <ErrorMessage name="firstName" component="div" className="error" />

                                <Field
                                    name="lastName"
                                    placeholder="il suo cog"
                                    className='form-control'
                                    maxLength="50"
                                />
                                <ErrorMessage name="lastName" component="div" className="error" />

                                <Field
                                    name="email"
                                    placeholder="e-mail"
                                    className='form-control'
                                    maxLength="64"
                                />
                                <ErrorMessage name="email" component="div" className="error" />

                                <div>
                                    <input
                                        ref={phoneInputRef}
                                        className='number-control'
                                        type="tel"
                                        onBlur={() => {
                                            const phoneNumber = itiInstance.current.getNumber();
                                            const isValid = itiInstance.current.isValidNumber();

                                            if (!isValid || phoneNumber.length > 15) {
                                                setFieldValue('phone', '', false);
                                            } else {
                                                setFieldValue('phone', phoneNumber);
                                            }
                                        }}
                                    />
                                    {touched.phone && errors.phone && (
                                        <div className="error">{errors.phone}</div>
                                    )}
                                </div>

                                <button type="submit" className='sign-up-btn' onClick={() => {console.log('When libraries formik and intlTelInput interacted, there were problems with phone validation, which took time to fix in order to figure out how best to combine them.')}}>REGISTRATI</button>
                            </div>
                        </div>
                    </div>
                    <div className='rectangle-part'>
                        {!isMobile && <img src={Rectangle} alt="rectangle" className="rectangle-pic" />}
                        <div className='rect-text'>
                            <div className='rect-title'>IL NOSTRO SCOPO</div>
                            <div className='rect-description'>Siamo qui per promuovere lo sviluppo e la circolazione delle persone, delle imprese e del Paese.</div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default FormComponent;
