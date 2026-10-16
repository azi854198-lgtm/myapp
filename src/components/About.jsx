import React, { useState, useEffect } from 'react';

function About() {
  // Состояния для хранения данных с API и отслеживания процесса загрузки
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Делаем асинхронный GET-запрос к нашему локальному API
    fetch('/data.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Сеть ответила с ошибкой');
        }
        return res.json();
      })
      .then((data) => {
        setAboutData(data.about); // Сохраняем данные секции about в стейт
        setLoading(false);         // Выключаем индикатор загрузки
      })
      .catch((error) => {
        console.error('Ошибка при получении данных About из API:', error);
        setLoading(false);
      });
  }, []);

  // Если данные ещё загружаются из API
  if (loading) {
    return <div className="loading-container">Загрузка информации из API...</div>;
  }

  // Если API вернул ошибку или файл data.json пуст
  if (!aboutData) {
    return <div className="error-container">Не удалось загрузить описание проекта.</div>;
  }

  return (
    <div className="about-container">
      {/* Динамический заголовок из API */}
      <h1 className="page-title">{aboutData.title}</h1>
      
      <div className="about-content">
        {/* Динамический текст описания из API */}
        <p>{aboutData.description}</p>
        
        <h2 className="section-subtitle">Наши Ценности</h2>
        
        {/* Рендерим массив ценностей, полученный с сервера */}
        <div className="values-list">
          {aboutData.values.map((value, index) => (
            <div key={index} className="value-item">
              <strong>{value.keyword}:</strong> {value.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
