import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HomePage = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <div className="about-image">
            <img
              src="https://images.pexels.com/photos/4170566/pexels-photo-4170566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Videograf"
            />
            <div className="contact-info">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-link">Facebook</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="contact-link">TikTok</a>
              <a href="mailto:example@email.com" className="contact-link">Email</a>
              <a href="tel:+994501234567" className="contact-link">+994 50 123 45 67</a>
            </div>
          </div>
        </div>

        <div className="hero-middle">
          <div className="about-skills">
            <h2>Videograf Bacarıqlarım</h2>
            <ul className="skills-list">

              <Accordion>
                <AccordionSummary className='summary' expandIcon={<ExpandMoreIcon />}>
                  Kamera və Kompozisiya
                </AccordionSummary>
                <AccordionDetails className='accord'>
                  <p>Framing, exposure balansı, fokus və DSLR/mirrorless kamera təcrübəsi ilə peşəkar görüntülər əldə edirəm.</p>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary className='summary1' expandIcon={<ExpandMoreIcon />}>
                  İşıqlandırma & Set Dizaynı
                </AccordionSummary>
                <AccordionDetails className='accord1'>
                  <p>3-point lighting, softbox və LED panellərlə işıq qurulumu edərək, çəkilişdə professional atmosfer yaradıram.</p>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary className='summary2' expandIcon={<ExpandMoreIcon />}>
                  Kadr Montajı
                </AccordionSummary>
                <AccordionDetails className='accord2'>
                  <p>Adobe Premiere və DaVinci Resolve ilə rəng düzəlişi, keçidlər və storytelling yanaşması tətbiq edirəm.</p>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary className='summary3' expandIcon={<ExpandMoreIcon />}>
                  Hərəkətli Çəkilişlər
                </AccordionSummary>
                <AccordionDetails className='accord3'>
                  <p>Gimbal və drone istifadə edərək hərəkətli, eyni zamanda stabil və estetik kadrlar çəkirəm.</p>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary className='summary4' expandIcon={<ExpandMoreIcon />}>
                  Səs Qeyd & Mixing
                </AccordionSummary>
                <AccordionDetails className='accord4'>
                  <p>Lavalier və shotgun mikrofonlarla səs yazımı aparıram, təmizləmə və mixing ilə peşəkar səsləndirmə əldə edirəm.</p>
                </AccordionDetails>
              </Accordion>

            </ul>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-content">
            <h2>Sənin websaytın və Video Editlərin</h2>
            <h1>Videographer Nijat'in Portfoliosu</h1>
            <Link to="/about" className="cta-button">Haqqımda daha çox</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
