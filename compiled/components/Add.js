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
// <div>
// <form onSubmit={this.props.handleAdd.bind(this, this.state.value)}>
// 	<input type="text" name="Add Movie Here" value={this.state.value} onChange={this.handleChange.bind(this)}/>
// 	<input type="submit" value="add"/>
// </form>
// </div>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUFkZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFHbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU87QUFESyxHQUFiO0FBSGtCO0FBTWxCOzs7OytCQUVZQyxLLEVBQU87QUFDbkI7QUFDQSxRQUFLQyxRQUFMLENBQWU7QUFDZEYsV0FBT0MsTUFBTUUsTUFBTixDQUFhSDtBQUROLElBQWY7QUFHQTs7OzJCQUVRO0FBQUE7O0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0csbUNBQU8sV0FBVSxjQUFqQixFQUFnQyxNQUFLLE1BQXJDLEVBQTRDLGFBQVksV0FBeEQsRUFBbUUsVUFBVSxrQkFBQ0MsS0FBRCxFQUFXO0FBQUMsYUFBS0csWUFBTCxDQUFrQkgsS0FBbEI7QUFBeUIsTUFBbEgsR0FESDtBQUVHO0FBQUE7QUFBQSxPQUFRLFdBQVUsb0JBQWxCLEVBQXVDLFNBQVM7QUFBQSxjQUFNLE9BQUtILEtBQUwsQ0FBV08sU0FBWCxDQUFxQixPQUFLTixLQUFMLENBQVdDLEtBQWhDLENBQU47QUFBQSxPQUFoRDtBQUFBO0FBQ0UsbUNBQU0sV0FBVSw0QkFBaEI7QUFERjtBQUZILElBREQ7QUFRQTs7OztFQXpCZ0JNLE1BQU1DLFM7QUEyQnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJBZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR2YWx1ZTogJydcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG5cdFx0dGhpcy5zZXRTdGF0ZSAoe1xuXHRcdFx0dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyIGZvcm0taW5saW5lXCI+XG5cdFx0ICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiYWRkIG1vdmllXCJvbkNoYW5nZT17KGV2ZW50KSA9PiB7dGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfX0vPlxuXHRcdCAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlQWRkKHRoaXMuc3RhdGUudmFsdWUpfT4gYWRkXG5cdFx0ICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+XG5cdFx0ICAgIDwvYnV0dG9uPlxuXHRcdCAgXHQ8L2Rpdj4gXG5cdFx0KVxuXHR9XG59XG5cdC8vIDxkaXY+XG5cdC8vIDxmb3JtIG9uU3VibWl0PXt0aGlzLnByb3BzLmhhbmRsZUFkZC5iaW5kKHRoaXMsIHRoaXMuc3RhdGUudmFsdWUpfT5cblx0Ly8gXHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiQWRkIE1vdmllIEhlcmVcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9Lz5cblx0Ly8gXHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiYWRkXCIvPlxuXHQvLyA8L2Zvcm0+XG5cdC8vIDwvZGl2PiAiXX0=