import React from 'react';

const RadioElement = ({ title, img, secret, value, onChange }) => (
  <div className='answer'>
    <input className='answer__input' type="radio" name="radioGroup" id={title} value={value} onChange={onChange}/>
    <label className='answer__label' htmlFor={title}>
      <div className='answer__title'>
        {title}
      </div>
      {img ? (
        <div className='answer__img'>
          <img alt='' src={img} />
        </div>
      ) : null}
      {secret ? (
        <div className="answer__secret">
          {secret}
        </div>
      ) : null}
    </label>
  </div>
);

export default class Radio extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  onChange = (value) => {
    this.setState({
      value,
    });
  };

  onSubmit = () => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
  };

  render() {
    const { options, title } = this.props;
    return (
        <form onSubmit={this.onSubmit} className='form'>
          <div className='form__title'>
            {title}
          </div>
          <div className="form__fields">
            {options.map(option => (
              <RadioElement
                key={option.title}
                title={option.title}
                img={option.img}
                value={option.resultText}
                secret={option.secret}
                onChange={(e) => this.onChange(e.target.value)}
              />
            ))}
          </div>
          <button type="submit" className='form__next'>
            Далее
          </button>
        </form>
    )
  };
}