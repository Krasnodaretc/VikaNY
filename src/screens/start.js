import React from 'react';

export default function StartScreen(props) {
  return (
    <div>
      <h1>
        Ты готова к Новому Году?
      </h1>
      <button onClick={props.onNext}>
        Начнём!
      </button>
    </div>
  )};
