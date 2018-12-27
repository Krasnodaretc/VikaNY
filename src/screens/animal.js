// Какое волшебное животное больше нравится
import React from 'react';
import RadioForm from '../components/Radio';

const quiz = {
  question: 'Выбери волшебное животное :) Какое больше нравится?',
  answers: [
    {
      title: 'Единорог',
      resultText: '',
    },
    {
      title: 'Сфинкс',
      resultText: '',
    },
    {
      title: 'Дракон',
      resultText: '',
    },
    {
      title: 'НЕдолбанутый Ричард',
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
