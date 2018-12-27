import React from 'react';
import RadioForm from '../components/Checkbox';

const quiz = {
  question: 'Кто из этих музыкантов тебе больше запомнился в 2018 году?',
  answers: [
    {
      title: 'Хуже, чем те самые чебуреки',
      resultText: '',
    },
    {
      title: 'Средненький год',
      resultText: '',
    },
    {
      title: 'Хорошо, я же стала мэ-э-энеджером',
      resultText: '',
    },
    {
      title: 'Отличный год, жаль только в Грузию не попала',
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
