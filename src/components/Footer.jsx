import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Dream Life Website. Все права защищены.</p>
        <div className="footer-links">
          <span className="footer-link">Политика конфиденциальности</span>
          <span className="footer-link">Условия использования</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

