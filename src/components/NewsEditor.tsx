import React, { useState } from 'react';
import styles from './NewsEditor.module.css';
import {News} from '../types/interface.ts';


interface Props {
  onAddNews: (news: News) => void;
}

const NewsEditor: React.FC<Props> = ({ onAddNews }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const news = { title, content, date, isActive };
    onAddNews(news);
    setTitle('');
    setContent('');
    setDate('');
    setIsActive(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Добавить новость</h2>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Текст новости"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label>
        Активна:
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
      </label>
      <button type="submit">Опубликовать</button>
    </form>
  );
};

export default NewsEditor;
