"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      movies: window.movies,
      query: ""
    };
    return _this;
  }

  _createClass(App, [{
    key: "handleSearch",
    value: function handleSearch(value) {
      var _this2 = this;

      this.setState({
        query: value
      }, function () {
        console.log(_this2.state.query);
      });
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(value) {
      // console.log(value)
      this.setState({
        movies: this.state.movies.concat({ title: value })
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "navbar" },
          React.createElement(
            "div",
            { className: "col-md-6 offset-md-3" },
            React.createElement(Add, { handleAdd: this.handleAdd.bind(this) })
          )
        ),
        React.createElement(
          "nav",
          { className: "search-nav" },
          React.createElement(
            "div",
            { className: "col-md-6 offset-md-3" },
            React.createElement(
              "div",
              { className: "buttons" },
              React.createElement(
                "button",
                { id: "watched-button" },
                "watched"
              ),
              React.createElement(
                "button",
                { id: "to-watch-button" },
                "to watch"
              ),
              React.createElement(
                "button",
                { id: "movies-button" },
                "movies"
              )
            ),
            React.createElement(Search, { handleSearch: this.handleSearch.bind(this) })
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-5" },
            React.createElement(MovieList, {
              movies: this.state.movies,
              query: this.state.query
            })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globmoviesy where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsIm1vdmllcyIsIndpbmRvdyIsInF1ZXJ5IiwidmFsdWUiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJ0aXRsZSIsImhhbmRsZUFkZCIsImJpbmQiLCJoYW5kbGVTZWFyY2giLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRQyxPQUFPRCxNQURKO0FBRVhFLGFBQU87QUFGSSxLQUFiO0FBRmlCO0FBTWxCOzs7O2lDQUVZQyxLLEVBQU87QUFBQTs7QUFDbEIsV0FBS0MsUUFBTCxDQUFlO0FBQ2JGLGVBQU9DO0FBRE0sT0FBZixFQUVHLFlBQU07QUFBQ0UsZ0JBQVFDLEdBQVIsQ0FBWSxPQUFLUCxLQUFMLENBQVdHLEtBQXZCO0FBQThCLE9BRnhDO0FBR0Q7Ozs4QkFFU0MsSyxFQUFPO0FBQ2Y7QUFDQSxXQUFLQyxRQUFMLENBQWU7QUFDYkosZ0JBQVEsS0FBS0QsS0FBTCxDQUFXQyxNQUFYLENBQWtCTyxNQUFsQixDQUF5QixFQUFDQyxPQUFPTCxLQUFSLEVBQXpCO0FBREssT0FBZjtBQUdEOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsc0JBQWY7QUFDRSxnQ0FBQyxHQUFELElBQUssV0FBVyxLQUFLTSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBaEI7QUFERjtBQURGLFNBREY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxrQkFBUSxJQUFHLGdCQUFYO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFRLElBQUcsaUJBQVg7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUEsa0JBQVEsSUFBRyxlQUFYO0FBQUE7QUFBQTtBQUhGLGFBREY7QUFNRSxnQ0FBQyxNQUFELElBQVEsY0FBYyxLQUFLQyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUF0QjtBQU5GO0FBREYsU0FORjtBQWdCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDRSxnQ0FBQyxTQUFEO0FBQ0Usc0JBQVEsS0FBS1gsS0FBTCxDQUFXQyxNQURyQjtBQUVFLHFCQUFPLEtBQUtELEtBQUwsQ0FBV0c7QUFGcEI7QUFERjtBQURGO0FBaEJGLE9BREY7QUEyQkQ7Ozs7RUFuRGVVLE1BQU1DLFM7O0FBc0R4QjtBQUNBOzs7QUFDQVosT0FBT0osR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IHdpbmRvdy5tb3ZpZXMsXG4gICAgICBxdWVyeTogXCJcIixcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWFyY2godmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlICh7XG4gICAgICBxdWVyeTogdmFsdWVcbiAgICB9LCAoKSA9PiB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5xdWVyeSl9KVxuICB9XG5cbiAgaGFuZGxlQWRkKHZhbHVlKSB7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUpXG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgbW92aWVzOiB0aGlzLnN0YXRlLm1vdmllcy5jb25jYXQoe3RpdGxlOiB2YWx1ZX0pXG4gICAgfSlcbiAgfVxuXG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgICAgPEFkZCBoYW5kbGVBZGQ9e3RoaXMuaGFuZGxlQWRkLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2VhcmNoLW5hdlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwid2F0Y2hlZC1idXR0b25cIj53YXRjaGVkPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0by13YXRjaC1idXR0b25cIj50byB3YXRjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibW92aWVzLWJ1dHRvblwiPm1vdmllczwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICA8TW92aWVMaXN0IFxuICAgICAgICAgICAgICBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfSBcbiAgICAgICAgICAgICAgcXVlcnk9e3RoaXMuc3RhdGUucXVlcnl9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9ibW92aWVzeSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=