import { useState } from "react";
import React from 'react'



const Categories = () => {

  const [activeIndex, setActiveindex] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ];

  const elements = categories.map((value, i) => (
    <li 
      key={i}
      onClick={() => onClickCategory(i)}
      className={activeIndex=== i ? 'active' : ''} >
      {value}
    </li>
  ));

  const onClickCategory = (index) => {
    setActiveindex(index)
  };

  return (
    <div className="categories">
      <ul>
        {elements}
      </ul>
    </div>
    );
  };

export default Categories;

