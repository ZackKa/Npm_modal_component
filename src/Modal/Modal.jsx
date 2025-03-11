import PropTypes from 'prop-types';
import '../style/modal.css'

function Modal({ isOpen, onClose, children, className, closeOnOverlayClick }) {
    // If the modal is not open, do not display anything
    if (!isOpen) return null;

    // Prevent closing the modal if clicking inside the content
    const handleModalClick = (e) => {
        e.stopPropagation(); // Prevent the click from propagating to the overlay
    };

    // Handle the click on the overlay to close the modal if closeOnOverlayClick is true
    const handleOverlayClick = () => {
        if (closeOnOverlayClick) {
            onClose(); // Close the modal if closeOnOverlayClick is true
        }
    };

    return (
        <div className={`modal-overlay ${className}`} onClick={handleOverlayClick} aria-hidden="true">
            <div className="modal-content" onClick={handleModalClick} role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
                <div id="modal-element">
                    {children}
                </div>
                <button onClick={onClose} aria-label="Close modal">Close</button>
            </div>
        </div>
    );
}

// Prop validation
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // The 'isOpen' prop must be a boolean and is required
    onClose: PropTypes.func.isRequired, // The 'onClose' prop must be a function and is required
    children: PropTypes.node.isRequired, // The 'children' prop can be any React content
    className: PropTypes.string, // The 'className' prop allows customization of styles if needed
    closeOnOverlayClick: PropTypes.bool, // Allows controlling whether the modal closes when clicking on the overlay
};

export default Modal;