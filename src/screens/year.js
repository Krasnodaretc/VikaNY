import React from 'react';
import RadioForm from '../components/Radio';

const quiz = {
  question: 'Как тебе прошедший год?',
  answers: [
    {
      title: 'Хуже, чем те самые чебуреки',
      resultText: 'Надеюсь, для тебя этот праздник и небольшой отдых станет глотком свежего воздуха, принесёт спокойствие и уют.',
    },
    {
      title: 'Средненький год',
      resultText: 'Надеюсь, тебе этот праздник и небольшой отдых помогут перезарядить батарейки и набраться сил, чтобы следующий год прошёл лучше.',
    },
    {
      title: 'Хорошо, я же стала мэ-э-энеджером',
      resultText: 'Надеюсь, для тебя этот праздник и небольшой отдых станут небольшим пит-стопом перед покорением новой ступеньки на твоём пути.',
    },
    {
      title: 'Отличный год, жаль только в Грузию не попала',
      resultText: 'Надеюсь, для тебя этот праздник и небольшой отдых станут небольшим пит-стопом перед покорением новой ступеньки на твоём пути.',
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
