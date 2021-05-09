import './App.css';
import React, { useState } from 'react';
import items from './data'
import Menu from './components/Menu';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === 'all') {
      setMenuItem(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category)
    setMenuItem(newItem);

  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Ous menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItem={filterItem} categories={categories} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
