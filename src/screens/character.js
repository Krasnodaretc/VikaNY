import React from 'react';
import RadioForm from '../components/Radio';

import first from '../img/self.jpg';
import second from '../img/Vika3.jpg';
import third from '../img/Vika4.jpg';
import fourth from '../img/Vika5.jpg';

const quiz = {
  question: 'Как ты думаешь, с чем ты у меня ассоциируешься?',
  answers: [
    {
      title: 'С чудом',
      img: first,
      resultText: 'true',
      secret: 'Я слишком часто тебе это говорил, да?',
    },
    {
      title: 'С этими вот штанишками',
      img: second,
      resultText: 'true',
    },
    {
      title: 'С радостью',
      img: third,
      resultText: 'true',
    },
    {
      title: 'С трезвостью',
      img: fourth,
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
