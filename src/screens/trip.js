import React from 'react';
import RadioForm from '../components/Radio';

const quiz = {
  question: 'Какое из этих маленьких приключений в прошлом году тебе больше запомнилось?',
  answers: [
    {
      title: 'Поездка в Питер',
      resultText: ' Уверен, что 2019 год принесёт тебе больше таких маленьких путешествий, как в Питер.',
    },
    {
      title: 'Лето, море, чебуреки, ммм',
      resultText: ' Уверен, что чебуреки на море в 2019 году будут огненно-вкусными, но не такими опасными, как в 2018',
      secret: 'Вкуснотаа',
    },
    {
      title: 'Сюрприз для родных - прилёт домой',
      resultText: 'true',
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
