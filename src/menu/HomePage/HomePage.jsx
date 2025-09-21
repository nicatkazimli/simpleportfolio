import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="hero">
  <div className="hero-container">
    <div className="hero-left">
      <div className="about-image">
        <img src="https://images.pexels.com/photos/4170566/pexels-photo-4170566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Videograf" />
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
          <li><strong>Kamera və Kompozisiya</strong><p>Framing, exposure, fokus və DSLR/mirrorless təcrübəsi.</p></li>
          <li><strong>İşıqlandırma & Set Dizaynı</strong><p>3-point lighting, softbox, LED panellərlə işıq qurulumu.</p></li>
          <li><strong>Kadr Montajı</strong><p>Adobe Premiere, DaVinci Resolve, rəng düzəlişi və storytelling.</p></li>
          <li><strong>Hərəkətli Çəkilişlər</strong><p>Gimbal, drone və stabil çəkilişlər.</p></li>
          <li><strong>Səs Qeyd & Mixing</strong><p>Lavalier, shotgun mikrofon, səs təmizləmə və mixing.</p></li>
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
