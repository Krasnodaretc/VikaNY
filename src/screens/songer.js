import React from 'react';
import RadioForm from '../components/Radio';

import scrip from '../img/Scrip.png';
import hleb from '../img/Hleb.png';
import meladze from '../img/meladze.png';
import dorn from '../img/dorn.png';

const quiz = {
  question: 'Кто из этих музыкантов тебе больше запомнился в 2018 году?',
  answers: [
    {
      title: 'Меладзе',
      img: meladze,
      resultText: ' Ты не сбываешься, хоть снишься в ночь на пятницу. ' +
        ' Не отзываешься, ни на один пароль. ' +
        ' Не ошибаешься, и мне все чаще кажется, ' +
        ' Что ты посланница неведомых миров. ' +
        ' Салют, Вика! Пусть 2019 год будет душевным, как песни Меладзе.',
      secret: 'Я не могу без тебя, я не могу без тебя!',
    },
    {
      title: 'Дорн',
      img: dorn,
      secret: 'Не надо стесняться',
      resultText: ' Как говорил Ваня Дорн: ' +
        ' "Для десятка из ста мысль песни проста". ' +
        ' Не знаю, к чему это, но "Не надо стесняться" в новом году говорить и делать разные весёлые глупости.',
    },
    {
      title: 'Скриптонит',
      img: scrip,
      secret: 'Танцуй сама!',
      resultText: ' Желаю тебе никогда не танцевать самой ламбаду в новом году, быть мультибрендовой и продолжать дарить свой стиль.',
    },
    {
      title: 'Хлеб',
      img: hleb,
      secret: 'Если устала на работе, э, делай эба',
      resultText: 'Чай, сахар, шашлындос - желаю тебе всего этого и побольше в новом году! Главное, чтобы половин всегда было достаточно.',
    },
  ]
};

export default class Screen extends React.PureComponent {
  render() {
    const { onSubmit } = this.props;
    return (
      <RadioForm
        title={quiz.question}
        options={quiz.answers}
        onSubmit={onSubmit}
      />
    );
  }
};
