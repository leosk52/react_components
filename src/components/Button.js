import className from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline, 
  rounded,
  ...rest
}) => {

  const classes = className( rest.className, 'flex items-center px-3 py-1.5 border', {
    'border-blue-600 bg-blue-600 text-white': primary,
    'border-purple-400 bg-purple-600 text-white': secondary,
    'border-green-700 bg-green-700 text-white': success,
    'border-yellow-300 bg-yellow-300 text-purple-400': warning,
    'border-red-600 bg-red-600 text-white': danger,
    'rounded full': rounded,
    'bg-white outline-8': outline,
    'text-blue-600': outline && primary,
    'text-purple-400': outline && secondary,
    'text-green-700 outline-8': outline && success,
    'text-yellow-300': outline && warning,
    'text-red-600': outline && danger,
    
  })


  return <button {...rest } className={classes}>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
