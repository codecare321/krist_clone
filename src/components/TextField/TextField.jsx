import PropTypes from "prop-types";
const TextField = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="font-semibold text-sm mb-2">{label}</label>}
      {type === "checkbox" ? (
        <input
          name={name}
          type={type}
          checked={value}
          onChange={onChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
};

export default TextField;

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
