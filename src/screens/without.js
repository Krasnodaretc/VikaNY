import React from 'react';
import RadioForm from '../components/Radio';

import coffee from '../img/coffee.jpg';
import friends from '../img/Friends.jpg';
import whiterus from '../img/whiterus.jpg';
import ping from '../img/ping.jpg';

const quiz = {
  question: 'Что больше всего удержало тебя от суицида в 2018 году?',
  answers: [
    {
      title: 'Белый Русский',
      img: whiterus,
      resultText: '',
    },
    {
      title: 'Друзья',
      img: friends,
      resultText: '',
    },
    {
      title: 'Кофе',
      img: coffee,
      resultText: '',
    },
    {
      title: 'Всё вместе',
      img: ping,
      resultText: '',
    },
  ]
};

export default class Screen extends React.PureComponent {
  render() {
    const { onSubmit } = this.props;
    return (
      <RadioForm
        options={quiz.answers}
        onSubmit={onSubmit}
      />
    );
  }
};
