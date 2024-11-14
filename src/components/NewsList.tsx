import React from 'react';
import styles from './NewsList.module.css';
import {News} from '../types/interface.ts';

 
interface Props {
  newsList: News[];
}

const NewsList: React.FC<Props> = ({ newsList }) => {
  return (
    <>
    <div className={styles.newsList}>
    <h2>Список новостей</h2>
       {newsList.length === 0 ? (
        <p>Нет новостей для отображения.</p>
      ) : (
        newsList.map((news, index) => (
            <div key={index} className={styles.newsItem}>
              <h3>{news.title}</h3>
              <p>{news.content}</p>
              <p><strong>Дата:</strong> {news.date}</p>
              <p><strong>Активна:</strong> {news.isActive ? 'Да' : 'Нет'}</p>
            </div>
        ))
      )
    }
    </div>
    </>
  );
};

export default NewsList;
