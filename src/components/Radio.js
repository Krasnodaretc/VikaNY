import React from 'react';

const RadioElement = ({ title, img, value, onChange }) => (
  <div className='answer'>
    <label htmlFor={title}>
      {img ? (
        <img className='answer__img' alt='' src={img} />
      ) : null}
      <div className='answer__title'>
        {title}
      </div>
    </label>
    <input className='answer__input' type="radio" name="radioGroup" id={title} value={value} onChange={onChange}/>
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
    const { options } = this.props;
    return (
        <form onSubmit={this.onSubmit} className='form'>
          {options.map(option => (
            <RadioElement
              key={option.title}
              title={option.title}
              img={option.img}
              value={option.resultText}
              onChange={(e) => this.onChange(e.target.value)}
            />
          ))}
          <button type="submit" className='form__next'>
            Далее
          </button>
        </form>
    )
  };
}