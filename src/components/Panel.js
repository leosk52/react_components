import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
    const finalClassNames = classNames("w-full rounded border bg-white p-3 shadow", className);

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
