import PropTypes from "prop-types";

const Dialog = ({
  isOpen,
  title,
  subtitle,
  content,
  actions,
  image,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 max-w-full">
        <div className="flex justify-center mb-6">
          <img src={image} alt="Logo" className="h-20 w-auto object-cover" />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-600 text-sm">{subtitle}</p>
        </div>

        <div className="mt-4">{content}</div>

        <div className="mt-6 flex justify-center gap-4">{actions}</div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  actions: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default Dialog;
