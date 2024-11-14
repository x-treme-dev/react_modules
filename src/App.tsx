import React, { useState } from 'react';
import NewsEditor from './components/NewsEditor';
import NewsList from './components/NewsList';
import {News} from './types/interface.ts';
import './App.css';




const App: React.FC = () => {
  const [newsList, setNewsList] = useState<News[]>([]); 

  const addNews = (news: News) => {  
    setNewsList((prevNews) => [...prevNews, news]);
  };

  return (
    <div className="App">
      <NewsEditor onAddNews={addNews} />
      <NewsList newsList={newsList} />
    </div>
  );
};

export default App;



