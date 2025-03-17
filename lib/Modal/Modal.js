"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
require("../../lib/style/modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children,
    className = _ref.className,
    closeOnOverlayClick = _ref.closeOnOverlayClick;
  // If the modal is not open, do not display anything
  if (!isOpen) return null;

  // Prevent closing the modal if clicking inside the content
  var handleModalClick = function handleModalClick(e) {
    e.stopPropagation(); // Prevent the click from propagating to the overlay
  };

  // Handle the click on the overlay to close the modal if closeOnOverlayClick is true
  var handleOverlayClick = function handleOverlayClick() {
    if (closeOnOverlayClick) {
      onClose(); // Close the modal if closeOnOverlayClick is true
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay ".concat(className),
    onClick: handleOverlayClick,
    "aria-hidden": "true"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content",
    onClick: handleModalClick,
    role: "dialog",
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    id: "modal-element"
  }, children), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    "aria-label": "Close modal"
  }, "Close")));
}

// Prop validation
Modal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  // The 'isOpen' prop must be a boolean and is required
  onClose: _propTypes["default"].func.isRequired,
  // The 'onClose' prop must be a function and is required
  children: _propTypes["default"].node.isRequired,
  // The 'children' prop can be any React content
  className: _propTypes["default"].string,
  // The 'className' prop allows customization of styles if needed
  closeOnOverlayClick: _propTypes["default"].bool // Allows controlling whether the modal closes when clicking on the overlay
};
var _default = exports["default"] = Modal;