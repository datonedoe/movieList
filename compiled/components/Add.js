"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_React$Component) {
	_inherits(Add, _React$Component);

	function Add(props) {
		_classCallCheck(this, Add);

		var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

		_this.state = {
			value: ''
		};
		return _this;
	}

	_createClass(Add, [{
		key: "handleChange",
		value: function handleChange(event) {
			// console.log(event.target.value)
			this.setState({
				value: event.target.value
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				{ className: "search-bar form-inline" },
				React.createElement("input", { className: "form-control", type: "text", placeholder: "add movie", onChange: function onChange(event) {
						_this2.handleChange(event);
					} }),
				React.createElement(
					"button",
					{ className: "btn hidden-sm-down", onClick: function onClick() {
							return _this2.props.handleAdd(_this2.state.value);
						} },
					" add",
					React.createElement("span", { className: "glyphicon glyphicon-search" })
				)
			);
		}
	}]);

	return Add;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUFkZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFHbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU87QUFESyxHQUFiO0FBSGtCO0FBTWxCOzs7OytCQUVZQyxLLEVBQU87QUFDbkI7QUFDQSxRQUFLQyxRQUFMLENBQWU7QUFDZEYsV0FBT0MsTUFBTUUsTUFBTixDQUFhSDtBQUROLElBQWY7QUFHQTs7OzJCQUVRO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0csbUNBQU8sV0FBVSxjQUFqQixFQUFnQyxNQUFLLE1BQXJDLEVBQTRDLGFBQVksV0FBeEQsRUFBbUUsVUFBVSxrQkFBQ0MsS0FBRCxFQUFXO0FBQUMsYUFBS0csWUFBTCxDQUFrQkgsS0FBbEI7QUFBeUIsTUFBbEgsR0FESDtBQUVHO0FBQUE7QUFBQSxPQUFRLFdBQVUsb0JBQWxCLEVBQXVDLFNBQVM7QUFBQSxjQUFNLE9BQUtILEtBQUwsQ0FBV08sU0FBWCxDQUFxQixPQUFLTixLQUFMLENBQVdDLEtBQWhDLENBQU47QUFBQSxPQUFoRDtBQUFBO0FBQ0UsbUNBQU0sV0FBVSw0QkFBaEI7QUFERjtBQUZILElBREQ7QUFRQTs7OztFQXpCZ0JNLE1BQU1DLFMiLCJmaWxlIjoiQWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dmFsdWU6ICcnXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG5cdFx0Ly8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnZhbHVlKVxuXHRcdHRoaXMuc2V0U3RhdGUgKHtcblx0XHRcdHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuXHRcdCAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImFkZCBtb3ZpZVwib25DaGFuZ2U9eyhldmVudCkgPT4ge3RoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KX19Lz5cblx0XHQgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUFkZCh0aGlzLnN0YXRlLnZhbHVlKX0+IGFkZFxuXHRcdCAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlxuXHRcdCAgICA8L2J1dHRvbj5cblx0XHQgIFx0PC9kaXY+IFxuXHRcdClcblx0fVxufVxuIl19