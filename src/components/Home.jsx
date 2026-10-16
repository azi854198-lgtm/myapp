import React, { useState, useEffect } from 'react';

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитируем запрос к API для получения контента главной страницы
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data.home);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка API:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Загрузка данных из API...</div>;
  if (!data) return <div style={{ textAlign: 'center', color: 'red' }}>Ошибка при получении данных</div>;

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">{data.title}</h1>
        <p className="hero-subtitle">{data.subtitle}</p>
        <button className="cta-button">Узнать больше</button>
      </section>

      <section className="features-grid">
        {data.features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
