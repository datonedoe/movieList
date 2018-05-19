"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.state = {
            value: ""
        };
        return _this;
    }

    _createClass(Search, [{
        key: "handleOnChange",
        value: function handleOnChange(event) {
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
                React.createElement("input", { className: "form-control", type: "text", placeholder: "search", onChange: function onChange(event) {
                        _this2.handleOnChange(event);
                    } }),
                React.createElement(
                    "button",
                    { className: "btn hidden-sm-down", onClick: this.props.handleSearch.bind(this, this.state.value) },
                    " go!",
                    React.createElement("span", { className: "glyphicon glyphicon-search" })
                )
            );
        }
    }]);

    return Search;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImhhbmRsZU9uQ2hhbmdlIiwiaGFuZGxlU2VhcmNoIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNOLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1RBLEtBRFM7O0FBR2YsY0FBS0MsS0FBTCxHQUFhO0FBQ1pDLG1CQUFPO0FBREssU0FBYjtBQUhlO0FBTWpCOzs7O3VDQUdjQyxLLEVBQU87QUFDckI7QUFDQSxpQkFBS0MsUUFBTCxDQUFlO0FBQ2RGLHVCQUFPQyxNQUFNRSxNQUFOLENBQWFIO0FBRE4sYUFBZjtBQUdBOzs7aUNBRVE7QUFBQTs7QUFDUixtQkFDQztBQUFBO0FBQUEsa0JBQUssV0FBVSx3QkFBZjtBQUNFLCtDQUFPLFdBQVUsY0FBakIsRUFBZ0MsTUFBSyxNQUFyQyxFQUE0QyxhQUFZLFFBQXhELEVBQWlFLFVBQVUsa0JBQUNDLEtBQUQsRUFBVztBQUFDLCtCQUFLRyxjQUFMLENBQW9CSCxLQUFwQjtBQUEyQixxQkFBbEgsR0FERjtBQUVFO0FBQUE7QUFBQSxzQkFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFTLEtBQUtILEtBQUwsQ0FBV08sWUFBWCxDQUF3QkMsSUFBeEIsQ0FBNkIsSUFBN0IsRUFBbUMsS0FBS1AsS0FBTCxDQUFXQyxLQUE5QyxDQUFoRDtBQUFBO0FBQ0Usa0RBQU0sV0FBVSw0QkFBaEI7QUFERjtBQUZGLGFBREQ7QUFRQTs7OztFQTFCbUJPLE1BQU1DLFM7O0FBNkIzQjtBQUNBOzs7QUFDQUMsT0FBT1osTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbmNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdHZhbHVlOiBcIlwiXG4gICAgfVxuIH1cblxuXG4gaGFuZGxlT25DaGFuZ2UoZXZlbnQpIHtcbiBcdC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSlcbiBcdHRoaXMuc2V0U3RhdGUgKHtcbiBcdFx0dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuIFx0fSlcbiB9XG5cbiByZW5kZXIoKSB7XG4gXHRyZXR1cm4gKFxuXHQgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuXHQgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB7dGhpcy5oYW5kbGVPbkNoYW5nZShldmVudCl9fS8+XG5cdCAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcywgdGhpcy5zdGF0ZS52YWx1ZSl9PiBnbyFcblx0ICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+XG5cdCAgICA8L2J1dHRvbj5cblx0ICA8L2Rpdj4gXG5cdClcbiB9XG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoO1xuIl19