import React from 'react';

export default function StartScreen(props) {
  return (
    <div className="start">
      <h1 className="start__title">
        Ты готова к Новому Году?
      </h1>
      <button className="start__button" onClick={props.onNext}>
        Да, давай начнём!
      </button>
    </div>
  )};
