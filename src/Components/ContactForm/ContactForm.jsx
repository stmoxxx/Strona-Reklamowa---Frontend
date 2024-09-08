import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import myContactForm from './ContactForm.module.css'


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });

    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });

        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    const onSubmit = async (data) => {
        const { name, email, phone, message } = data;
        try {
            setDisabled(true);

            const templateParams = {
                name,
                email,
                phone,
                message,
            };

            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_PUBLIC_KEY,
            );

            toggleAlert('Form submission was successful!', 'success');
        } catch (e) {
            console.error(e);
            toggleAlert('We are not taking the requests yet :(', 'danger');
        } finally {
            setDisabled(false);
            reset();
        }
    };

    return (
        <div className='ContactForm'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className={myContactForm.contactform}>
                            <form
                                id='contact-form'
                                onSubmit={handleSubmit(onSubmit)}
                                noValidate
                            >
                                {/* Row 1 of form */}
                                <div className='row formRow'>
                                    <div className='col-6'>
                                        <div className={myContactForm.name_title}>Imie i nazwisko</div>
                                        <input
                                            type='text'
                                            name='name'
                                            {...register('name', {
                                                required: {
                                                    value: true,
                                                    message: 'Please enter your name',
                                                },
                                                maxLength: {
                                                    value: 30,
                                                    message: 'Please use 30 characters or less',
                                                },
                                            })}
                                            className={myContactForm.name}
                                            placeholder='Imie i nazwisko'
                                        ></input>
                                       
                                    </div>
                                    <div className='col-6'>
                                        <div className={myContactForm.email_title}>Email</div>
                                        <input
                                            type='email'
                                            name='email'
                                            {...register('email', {
                                                required: true,
                                                pattern:
                                                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            })}
                                            className={myContactForm.email}
                                            placeholder='Email'
                                        ></input>
                                        
                                    </div>
                                </div>
                                {/* Row 2 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <div className={myContactForm.phone_title}>Telefon</div>
                                        <input
                                            type='text'
                                            name='subject'
                                            {...register('subject', {
                                                required: {
                                                    value: true,
                                                    message: 'Please enter a phone',
                                                },
                                                maxLength: {
                                                    value: 75,
                                                    message: 'Subject cannot exceed 75 characters',
                                                },
                                            })}
                                            className={myContactForm.phone}
                                            placeholder='Telefon'
                                        ></input>
                                        
                                    </div>
                                </div>
                                {/* Row 3 of form */}
                                <div className='row formRow'>
                                    <div className='col'>
                                        <div className={myContactForm.message_title}>Wiadomość</div>
                                        <textarea
                                            rows={3}
                                            name='message'
                                            {...register('message', {
                                                required: true,
                                            })}
                                            className={myContactForm.message}
                                            placeholder='Wiadomość'
                                        ></textarea>
                                       
                                    </div>
                                </div>

                                <button
                                    className={myContactForm.submitBtn}
                                    disabled={disabled}
                                    type='submit'
                                >
                                    Zgłoś się
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {alertInfo.display && (
                <div
                    className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
                    role='alert'
                >
                    {alertInfo.message}
                    <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='alert'
                        aria-label='Close'
                        onClick={() =>
                            setAlertInfo({ display: false, message: '', type: '' })
                        } // Clear the alert when close button is clicked
                    ></button>
                </div>
            )}
        </div>
    );
};

export default ContactForm;