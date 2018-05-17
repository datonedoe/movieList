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

    // handleOnClick(event) {
    // 	this.setState ({
    // 		value: event.target.value
    // 	})
    // }

    _createClass(Search, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "search-bar form-inline" },
                React.createElement("input", { className: "form-control", type: "text" }),
                React.createElement(
                    "button",
                    { className: "btn hidden-sm-down", onClick: function onClick() {
                            return _this2.props.handleSearch(event.target.value);
                        } },
                    " submit",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJ0YXJnZXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDTixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNUQSxLQURTOztBQUdmLGNBQUtDLEtBQUwsR0FBYTtBQUNaQyxtQkFBTztBQURLLFNBQWI7QUFIZTtBQU1qQjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2lDQUVTO0FBQUE7O0FBQ1IsbUJBQ0M7QUFBQTtBQUFBLGtCQUFLLFdBQVUsd0JBQWY7QUFDRSwrQ0FBTyxXQUFVLGNBQWpCLEVBQWdDLE1BQUssTUFBckMsR0FERjtBQUVFO0FBQUE7QUFBQSxzQkFBUSxXQUFVLG9CQUFsQixFQUF1QyxTQUFTO0FBQUEsbUNBQU0sT0FBS0YsS0FBTCxDQUFXRyxZQUFYLENBQXdCQyxNQUFNQyxNQUFOLENBQWFILEtBQXJDLENBQU47QUFBQSx5QkFBaEQ7QUFBQTtBQUNFLGtEQUFNLFdBQVUsNEJBQWhCO0FBREY7QUFGRixhQUREO0FBUUE7Ozs7RUF4Qm1CSSxNQUFNQyxTOztBQTJCM0I7QUFDQTs7O0FBQ0FDLE9BQU9ULE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5jb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHR2YWx1ZTogXCJcIlxuICAgIH1cbiB9XG5cbiAvLyBoYW5kbGVPbkNsaWNrKGV2ZW50KSB7XG4gLy8gXHR0aGlzLnNldFN0YXRlICh7XG4gLy8gXHRcdHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAvLyBcdH0pXG4gLy8gfVxuXG4gcmVuZGVyKCkge1xuIFx0cmV0dXJuIChcblx0ICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cblx0ICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiLz5cblx0ICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKX0+IHN1Ym1pdFxuXHQgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cblx0ICAgIDwvYnV0dG9uPlxuXHQgIDwvZGl2PiBcblx0KVxuIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7XG4iXX0=