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
      resultText: '',
      secret: 'Хороший выбор',
    },
    {
      title: 'Дорн',
      img: dorn,
      resultText: '',
    },
    {
      title: 'Скриптонит',
      img: scrip,
      resultText: '',
    },
    {
      title: 'Хлеб',
      img: hleb,
      resultText: '',
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
