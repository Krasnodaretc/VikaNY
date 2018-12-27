import React from 'react';

const RadioElement = ({ title, img, value, onChange }) => (
  <div>
    <label htmlFor={title}>
      {img ? (
        <img alt='' src={img} />
      ) : null}
      <div>
        {title}
      </div>
    </label>
    <input type="radio" name="radioGroup" id={title} value={value} onChange={onChange}/>
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
        <form onSubmit={this.onSubmit}>
          {options.map(option => (
            <RadioElement
              key={option.title}
              title={option.title}
              img={option.img}
              value={option.resultText}
              onChange={(e) => this.onChange(e.target.value)}
            />
          ))}
          <button type="submit">
            Далее
          </button>
        </form>
    )
  };
}