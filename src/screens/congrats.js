import React from 'react';
import schemaVika from '../img/schemaVika.png';

export default class Screen extends React.PureComponent {
  render() {
    const { answers } = this.props;

    const filteredAnswers = {};
    Object.keys(answers).map(ans => {
        filteredAnswers[ans] = answers[ans] !== 'true' ? answers[ans] : null;
        return ans;
    });

    return (
      <div className='congrats-text'>
        <div className='congrats-text__title'>Милая Вика!</div>
        <div className="schema">
          <img src={schemaVika} alt=""/>
        </div>
        <p>
          Для многих Новый Год бывает переломным моментом. Для кого-то - шансом начать с чистого листа.
          {` ${filteredAnswers.Year}`}
        </p>
        <p>
          В начале я хочу поздравить тебя с будущим переводом на другую точку! Кажется, это может стать прекрасным началом года и тебе, наконец, станет полегче.
          Понравился тебе 2018 год или нет, но в нём ты прошла очень большой профессиональный путь от барристы до уверенного в себе менеджера. Работа стала для тебя очень важной частью жизни и я хочу
           пожелать, чтобы ты перестала тратить на неё столько нервов, времени и сил. Пусть коллектив на новой точке будет небольшой дружной командой. А ты её украсишь!
          {` ${filteredAnswers.Animal[0] === 'К' ? filteredAnswers.Animal : ''}`}
        </p>
        <p>
          Как думаешь, что будет в 2019 году?
        </p>
        <p>
          {filteredAnswers.Songer}
        </p>
        <p>
          Встречи с друзями, новые люди и места, повышения зарплаты, вагоны смеха и радости.
          {filteredAnswers.Trip}
          Желаю тебе, чтобы все конфликты с близкими были исчерпаны, а друзья только прибавлялись.
        </p>
        <p>
          {filteredAnswers.Without}
        </p>
        {filteredAnswers.Animal[0] !== 'К' ?
          (
            <p>{filteredAnswers.Animal}</p>
          ) : null}
        <p>
          Помнишь вопрос про то, с чем ты у меня ассоциируешься? Правильный ответ - со всеми вариантами. Для меня ты чудо и радость в этих странных штанах и с трезвостью... рассудка, конечно.
        </p>
        <p>
          После нашей последней встречи я подумал, что у меня не получится этим поздравлением сделать тебе настолько приятно, насколько я хочу.
          Поэтому главное пожелание - пусть весь пиздец, что был в 2018 году, в нём же и останется. Я тебя люблю.
        </p>
        <p className="final-congrats">
          С новым годом!
        </p>
      </div>
    );
  }
};
