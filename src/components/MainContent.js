import React, { useState, useEffect } from 'react';
import '../assets/stylesheets/MainContent.css';
import banner from '../assets/images/banner.jpg';
import photo1 from '../assets/images/galeria1.jpeg';
import photo2 from '../assets/images/galeria2.jpeg';
import photo3 from '../assets/images/galeria3.jpeg';
import photo4 from '../assets/images/galeria4.jpeg';
import photo5 from '../assets/images/galeria5.jpeg';
import photo6 from '../assets/images/galeria6.jpeg';
import map from '../assets/images/rzeszow.png';

function MainContent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        // Check if there's a selected photo in localStorage on component mount
        const storedPhoto = localStorage.getItem('selectedPhoto');
        if (storedPhoto) {
            setSelectedPhoto(storedPhoto);
            setIsModalOpen(true);
        }

        const sections = document.querySelectorAll('.section-card, .section-image, .banner-text, .image-background img');
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(section => section.classList.add('hidden'));

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('show');
            }
        });

        const handleScroll = () => {
            sections.forEach(section => {
                if (isElementInViewport(section)) {
                    section.classList.add('show');
                }
            });
            highlightCurrentSection();
        };

        const highlightCurrentSection = () => {
            let currentSection = '';
            sections.forEach(section => {
                if (isElementInViewport(section)) {
                    currentSection = section.id;
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.href.includes(currentSection)) {
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        highlightCurrentSection();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setIsModalOpen(true);
        // Save selected photo to localStorage
        localStorage.setItem('selectedPhoto', photo);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
        setIsModalOpen(false);
        // Remove selected photo from localStorage when modal is closed
        localStorage.removeItem('selectedPhoto');
    };

    const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

    return (
        <div className="main-content">
            <section id="banner-section">
                <div className="banner-text">
                    <h1>Potrzebujesz naszej pomocy?</h1>
                    <p>Jeśli potrzebujesz profesjonalnego transportu dla swojego pojazdu, 
                        skontaktuj się z nami już dziś! Jesteśmy dostępni 24/7, 
                        gotowi odpowiedzieć na Twoje potrzeby transportowe.</p>
                    <a href="tel:+48-788-152-520">+48 788 152 520</a>
                    <a href="tel:+48-575-121-052">+48 575 121 052</a>
                </div>
                <div className="image-background">
                    <img loading="lazy" src={banner} alt="banner" />
                </div>
            </section>
            <section id="services-section" className="section-card">
                <h1>Czym się zajmujemy?</h1>
                <div className='services-text'>
                    <div className="row">
                        <div className='service-card'>
                            <h2>Przewóz aut osobowych</h2>
                            <p>Nasza autolaweta umożliwia bezpieczny transport pojazdów osobowych zarówno na terenie miasta, jak i poza nim.</p>
                        </div>
                        <div className='service-card'>
                            <h2>Transport motocykli</h2>
                            <p>Specjalizujemy się również w przewozie motocykli, zapewniając odpowiednie zabezpieczenie i opiekę podczas transportu.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className='service-card'>
                            <h2>Pomoc drogowa</h2>
                            <p>Nasza flota jest wyposażona w niezbędny sprzęt do udzielania pomocy drogowej w przypadku awarii lub wypadku.</p>
                        </div>
                        <div className='service-card'>
                            <h2>Transport specjalistyczny</h2>
                            <p>Posiadamy doświadczenie w transporcie pojazdów niskopodwoziowych, klasycznych czy luksusowych, gwarantując bezpieczny i rzetelny przewóz.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gallery-section" className="section-image">
                <h1>Galeria</h1>
                <div className='row'>
                    {photos.slice(0, 3).map((photo, index) => (
                        <div className='col' key={index}>
                            <img loading="lazy" src={photo} alt={`Photo ${index + 1}`} onClick={() => openModal(photo)} />
                        </div>
                    ))}
                </div>
                <div className='row'>
                    {photos.slice(3).map((photo, index) => (
                        <div className='col' key={index + 3}>
                            <img loading="lazy" src={photo} alt={`Photo ${index + 4}`} onClick={() => openModal(photo)} />
                        </div>
                    ))}
                </div>
            </section>
            <section id="contact-section" className="section-image">
                <h1>Gdzie nas znajdziesz?</h1>
                <div className='contact-container'>
                    <img id="map-image" loading="lazy" src={map} alt="banner" />
                    <div className='contact-text'>
                        <p>Autolaweta Rzeszów</p>
                        <p><a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x473cfbbca6f709e5:0xccff66ee1a96a7a0?sa=X&ved=1t:8290&ictx=111">Wieniawskiego 63, 35-603 Rzeszów</a></p>
                        <p>+48 788 152 520</p>
                        <p>+48 575 121 052</p>
                        <p>autolawetaforek@gmail.com</p>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={selectedPhoto} alt="Selected" />
                </div>
            )}
        </div>
    );
}

export default MainContent;
