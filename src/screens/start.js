import React from 'react';

export default function StartScreen(props) {
  return (
    <div className="start">
      <h1 className="start__title">
        Привет, Вичуличка-Викуля
      </h1>
      <p className="start__text text">
        Мне было тяжело придумать хорошее поздравление, поэтому я воспользовался лайвхаком.
      </p>
      <p className="start__text text">
        Ты поможешь мне с поздравлением :) Я приготовил несколько вопросов, чтобы понять, что тебе больше понравилось в прошедшем году.
        Это займёт минут 15.
      </p>
      <p className="start__text text">
        Ты готова?
      </p>
      <button className="start__button" onClick={props.onNext}>
        Да, давай начнём!
      </button>
    </div>
  )};
