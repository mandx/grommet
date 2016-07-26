'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Props = require('../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

var _CSSClassnames = require('../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.CHART_BASE;

// Placeholder that reserves space on the screen for Layers to be positioned over.

// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var Base = function (_Component) {
  (0, _inherits3.default)(Base, _Component);

  function Base() {
    (0, _classCallCheck3.default)(this, Base);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Base).apply(this, arguments));
  }

  (0, _createClass3.default)(Base, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var height = _props.height;
      var width = _props.width;

      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Base.propTypes));

      var classes = [CLASS_ROOT];
      if (height) {
        classes.push(CLASS_ROOT + '--height-' + height);
      }
      if (width) {
        classes.push(CLASS_ROOT + '--width-' + width);
      }
      if (this.props.className) {
        classes.push(this.props.className);
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, restProps, { className: classes.join(' ') }),
        this.props.children
      );
    }
  }]);
  return Base;
}(_react.Component);

Base.displayName = 'Base';
exports.default = Base;
;

Base.propTypes = {
  height: _react.PropTypes.oneOf(['small', 'medium', 'large', 'sparkline']),
  width: _react.PropTypes.oneOf(['small', 'medium', 'large', 'full'])
};

Base.defaultProps = {
  height: 'medium',
  width: 'medium'
};
module.exports = exports['default'];