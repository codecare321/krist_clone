import PropTypes from "prop-types";

const Button = ({
  onClick,
  children,
  backgroundColor = "black",
  textColor = "white",
  className = "",
  type = "button",
  padding = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-${backgroundColor} ${
        textColor === "black" ? "text-black" : `text-${textColor}`
      } ${padding} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  padding: PropTypes.string,
};

export default Button;
