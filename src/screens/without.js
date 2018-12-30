import React from 'react';
import RadioForm from '../components/Radio';

import coffee from '../img/coffee.jpg';
import friends from '../img/Friends.jpg';
import whiterus from '../img/whiterus.jpg';
import ping from '../img/ping.jpg';

const quiz = {
  question: 'Что сильнее поддерживало тебя в 2018 году?',
  answers: [
    {
      title: 'Белый Русский',
      img: whiterus,
      resultText: 'Только представь, сколько Белого русского будет в следующем году. Да им можно целую ванну залить! ' +
        'Тут стоит пожелать разве что здоровья :) 20 лет как-никак, старость.',
      secret: 'Я не сомневался',
    },
    {
      title: 'Друзья',
      img: friends,
      resultText: 'true',
    },
    {
      title: 'Кофе',
      img: coffee,
      resultText: 'Только представь, сколько кофе ждёт тебя в следующем году. Да им можно целую ванну залить! ' +
        'И после такой ванны я бы точно проснулся :) Тут определённо стоит пожелать тебе крепкого здоровья. 20 лет как-никак, старость.',
    },
    {
      title: 'Всё вместе',
      img: ping,
      resultText: 'true',
      secret: 'Божечки, милая хрюшка какая!',
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
