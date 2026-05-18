import './button.css';

type ButtonState = 'default' | 'loading' | 'disabled';

interface ButtonProbs {
  label: string;
  state?: ButtonState;
  onClick?: () => void;
}

const Button = ({ state = 'default' }: ButtonProbs) => {
  const isDisabled = state === 'disabled' || state === 'loading';

  return <button className="button" disabled={isDisabled}></button>;
};
export default Button;
