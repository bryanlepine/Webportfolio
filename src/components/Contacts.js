import React, { useEffect, useRef, useState } from 'react';
import '../css-styles/Contacts.scss';
import ImprimanteImage from '../images/texture imprimante.png';

import { useColorContext } from '../components/ColorContext';

function Contacts() {

    const textImprimRef = useRef(null);
    const [isAnimationTriggered, setAnimationTriggered] = useState(false);

    const { colorOptions, currentColorIndex } = useColorContext(); 
    const currentColorOption = colorOptions[currentColorIndex];

    const handleScroll = () => {
        if (textImprimRef.current) {
            const boundingBox = textImprimRef.current.getBoundingClientRect();
            if (boundingBox.top < window.innerHeight && !isAnimationTriggered) {
                setAnimationTriggered(true);
                textImprimRef.current.classList.add('open');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="contact" className="contact-container">
            <div>
                <h2 className="title-Contacts" style={{ color: currentColorOption.title }}>Me contacter</h2>
            </div>
            <div className='form-container'>
                 <div className='imprim-container'>
                <img className='imprim-form' src={ImprimanteImage} alt='carte-puces-electroniques' />
                <div className='bloc-container'>
                    <div className={`text-imprim ${isAnimationTriggered ? 'open' : ''}`} ref={textImprimRef}>
                        <p>N'hésitez pas à me contacter via ce formulaire</p>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                </div>
               
            </div>
                

                <form action="#" method="post">
                    <label htmlFor="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" required />

                    <label htmlFor="nom">Prénom :</label>
                    <input type="text" id="prénom" name="prénom" required />

                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message :</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    );
}

export default Contacts;