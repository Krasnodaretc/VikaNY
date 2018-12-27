import React from 'react';
import RadioForm from '../components/Radio';

const quiz = {
  question: 'Какое из этих маленьких приключений в прошлом году тебе больше запомнилось?',
  answers: [
    {
      title: 'Поездка в Питер',
      resultText: 'Melaaaaa',
    },
    {
      title: 'Лето, море, чебуреки, ммм',
      resultText: 'DorNN',
    },
    {
      title: 'Сюрприз для родных - прилёт домой',
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
