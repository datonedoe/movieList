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
      all: window.movies,
      watched: [],
      unwatched: window.movies.slice(),
      currentlyWatched: window.movies.slice(),
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
        all: this.state.all.concat({ title: value })
      });
    }
  }, {
    key: "removeWatched",
    value: function removeWatched(movie) {

      var filtered = this.state.watched.filter(function (watched) {
        return watched.title !== movie.title;
      });

      this.setState({
        watched: filtered
      });
      // var index = this.state.watched.indexOf(movie);
      // this.state.watched.splice(index, 1);

      // this.setState ({
      //   watched: this.state.watched
      // })
    }
  }, {
    key: "addToWatched",
    value: function addToWatched(movie) {
      this.setState({
        watched: this.state.watched.concat(movie)
      });
    }
  }, {
    key: "handleWatched",
    value: function handleWatched() {
      this.setState({
        currentlyWatched: this.state.watched
      });
    }
  }, {
    key: "removeUnWatched",
    value: function removeUnWatched(movie) {
      var filtered = this.state.unwatched.filter(function (unwatched) {
        return unwatched.title !== movie.title;
      });

      this.setState({
        unwatched: filtered
      });

      // var index = this.state.unwatched.indexOf(movie);
      // this.state.unwatched.splice(index, 1);

      // this.setState ({
      //   unwatched: this.state.unwatched
      // })
    }
  }, {
    key: "addUnWatched",
    value: function addUnWatched(movie) {
      this.setState({
        unwatched: this.state.unwatched.concat(movie)
      });
    }
  }, {
    key: "handleUnWatched",
    value: function handleUnWatched() {
      this.setState({
        currentlyWatched: this.state.unwatched
      });
    }
  }, {
    key: "addUnWatched",
    value: function addUnWatched(movie) {
      this.setState({
        unwatched: this.state.unwatched.concat(movie)
      });
    }
  }, {
    key: "handleAll",
    value: function handleAll() {
      this.setState({
        currentlyWatched: this.state.all
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
                { id: "watched-button", onClick: this.handleWatched.bind(this) },
                "watched"
              ),
              React.createElement(
                "button",
                { id: "to-watch-button", onClick: this.handleUnWatched.bind(this) },
                "to watch"
              ),
              React.createElement(
                "button",
                { id: "all-button", onClick: this.handleAll.bind(this) },
                "all"
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
              movies: this.state.currentlyWatched,
              query: this.state.query,
              addWatched: this.addToWatched.bind(this),
              addUnWatched: this.addUnWatched.bind(this),
              removeWatched: this.removeWatched.bind(this),
              removeUnWatched: this.removeUnWatched.bind(this)
            })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImFsbCIsIndpbmRvdyIsIm1vdmllcyIsIndhdGNoZWQiLCJ1bndhdGNoZWQiLCJzbGljZSIsImN1cnJlbnRseVdhdGNoZWQiLCJxdWVyeSIsInZhbHVlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwidGl0bGUiLCJtb3ZpZSIsImZpbHRlcmVkIiwiZmlsdGVyIiwiaGFuZGxlQWRkIiwiYmluZCIsImhhbmRsZVdhdGNoZWQiLCJoYW5kbGVVbldhdGNoZWQiLCJoYW5kbGVBbGwiLCJoYW5kbGVTZWFyY2giLCJhZGRUb1dhdGNoZWQiLCJhZGRVbldhdGNoZWQiLCJyZW1vdmVXYXRjaGVkIiwicmVtb3ZlVW5XYXRjaGVkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBS0MsT0FBT0MsTUFERDtBQUVYQyxlQUFTLEVBRkU7QUFHWEMsaUJBQVdILE9BQU9DLE1BQVAsQ0FBY0csS0FBZCxFQUhBO0FBSVhDLHdCQUFrQkwsT0FBT0MsTUFBUCxDQUFjRyxLQUFkLEVBSlA7QUFLWEUsYUFBTztBQUxJLEtBQWI7QUFGaUI7QUFTbEI7Ozs7aUNBRVlDLEssRUFBTztBQUFBOztBQUNsQixXQUFLQyxRQUFMLENBQWU7QUFDYkYsZUFBT0M7QUFETSxPQUFmLEVBRUcsWUFBTTtBQUFDRSxnQkFBUUMsR0FBUixDQUFZLE9BQUtaLEtBQUwsQ0FBV1EsS0FBdkI7QUFBOEIsT0FGeEM7QUFHRDs7OzhCQUVTQyxLLEVBQU87QUFDZjtBQUNBLFdBQUtDLFFBQUwsQ0FBZTtBQUNiVCxhQUFLLEtBQUtELEtBQUwsQ0FBV0MsR0FBWCxDQUFlWSxNQUFmLENBQXNCLEVBQUNDLE9BQU9MLEtBQVIsRUFBdEI7QUFEUSxPQUFmO0FBR0Q7OztrQ0FFYU0sSyxFQUFPOztBQUVuQixVQUFJQyxXQUFXLEtBQUtoQixLQUFMLENBQVdJLE9BQVgsQ0FBbUJhLE1BQW5CLENBQTBCLFVBQUNiLE9BQUQ7QUFBQSxlQUN2Q0EsUUFBUVUsS0FBUixLQUFrQkMsTUFBTUQsS0FEZTtBQUFBLE9BQTFCLENBQWY7O0FBSUEsV0FBS0osUUFBTCxDQUFlO0FBQ2JOLGlCQUFTWTtBQURJLE9BQWY7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNEOzs7aUNBRVlELEssRUFBTztBQUNsQixXQUFLTCxRQUFMLENBQWU7QUFDYk4saUJBQVMsS0FBS0osS0FBTCxDQUFXSSxPQUFYLENBQW1CUyxNQUFuQixDQUEwQkUsS0FBMUI7QUFESSxPQUFmO0FBR0Q7OztvQ0FFZTtBQUNkLFdBQUtMLFFBQUwsQ0FBZTtBQUNiSCwwQkFBa0IsS0FBS1AsS0FBTCxDQUFXSTtBQURoQixPQUFmO0FBR0Q7OztvQ0FFZVcsSyxFQUFPO0FBQ3JCLFVBQUlDLFdBQVcsS0FBS2hCLEtBQUwsQ0FBV0ssU0FBWCxDQUFxQlksTUFBckIsQ0FBNEIsVUFBQ1osU0FBRDtBQUFBLGVBQ3pDQSxVQUFVUyxLQUFWLEtBQW9CQyxNQUFNRCxLQURlO0FBQUEsT0FBNUIsQ0FBZjs7QUFJQSxXQUFLSixRQUFMLENBQWU7QUFDYkwsbUJBQVdXO0FBREUsT0FBZjs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNEOzs7aUNBRVlELEssRUFBTztBQUNsQixXQUFLTCxRQUFMLENBQWU7QUFDYkwsbUJBQVcsS0FBS0wsS0FBTCxDQUFXSyxTQUFYLENBQXFCUSxNQUFyQixDQUE0QkUsS0FBNUI7QUFERSxPQUFmO0FBR0Q7OztzQ0FFaUI7QUFDaEIsV0FBS0wsUUFBTCxDQUFlO0FBQ2JILDBCQUFrQixLQUFLUCxLQUFMLENBQVdLO0FBRGhCLE9BQWY7QUFHRDs7O2lDQUVZVSxLLEVBQU87QUFDbEIsV0FBS0wsUUFBTCxDQUFlO0FBQ2JMLG1CQUFXLEtBQUtMLEtBQUwsQ0FBV0ssU0FBWCxDQUFxQlEsTUFBckIsQ0FBNEJFLEtBQTVCO0FBREUsT0FBZjtBQUdEOzs7Z0NBRVc7QUFDVixXQUFLTCxRQUFMLENBQWU7QUFDYkgsMEJBQWtCLEtBQUtQLEtBQUwsQ0FBV0M7QUFEaEIsT0FBZjtBQUdEOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsc0JBQWY7QUFDRSxnQ0FBQyxHQUFELElBQUssV0FBVyxLQUFLaUIsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQWhCO0FBREY7QUFERixTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQVEsSUFBRyxnQkFBWCxFQUE0QixTQUFTLEtBQUtDLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLENBQXJDO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFRLElBQUcsaUJBQVgsRUFBNkIsU0FBUyxLQUFLRSxlQUFMLENBQXFCRixJQUFyQixDQUEwQixJQUExQixDQUF0QztBQUFBO0FBQUEsZUFGRjtBQUdFO0FBQUE7QUFBQSxrQkFBUSxJQUFHLFlBQVgsRUFBd0IsU0FBUyxLQUFLRyxTQUFMLENBQWVILElBQWYsQ0FBb0IsSUFBcEIsQ0FBakM7QUFBQTtBQUFBO0FBSEYsYUFERjtBQU1FLGdDQUFDLE1BQUQsSUFBUSxjQUFjLEtBQUtJLFlBQUwsQ0FBa0JKLElBQWxCLENBQXVCLElBQXZCLENBQXRCO0FBTkY7QUFERixTQU5GO0FBZ0JFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFNBQUQ7QUFDRSxzQkFBUSxLQUFLbkIsS0FBTCxDQUFXTyxnQkFEckI7QUFFRSxxQkFBTyxLQUFLUCxLQUFMLENBQVdRLEtBRnBCO0FBR0UsMEJBQVksS0FBS2dCLFlBQUwsQ0FBa0JMLElBQWxCLENBQXVCLElBQXZCLENBSGQ7QUFJRSw0QkFBYyxLQUFLTSxZQUFMLENBQWtCTixJQUFsQixDQUF1QixJQUF2QixDQUpoQjtBQUtFLDZCQUFlLEtBQUtPLGFBQUwsQ0FBbUJQLElBQW5CLENBQXdCLElBQXhCLENBTGpCO0FBTUUsK0JBQWlCLEtBQUtRLGVBQUwsQ0FBcUJSLElBQXJCLENBQTBCLElBQTFCO0FBTm5CO0FBREY7QUFERjtBQWhCRixPQURGO0FBK0JEOzs7O0VBOUhlUyxNQUFNQyxTOztBQWlJeEI7QUFDQTs7O0FBQ0EzQixPQUFPSixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFsbDogd2luZG93Lm1vdmllcyxcbiAgICAgIHdhdGNoZWQ6IFtdLFxuICAgICAgdW53YXRjaGVkOiB3aW5kb3cubW92aWVzLnNsaWNlKCksXG4gICAgICBjdXJyZW50bHlXYXRjaGVkOiB3aW5kb3cubW92aWVzLnNsaWNlKCksXG4gICAgICBxdWVyeTogXCJcIixcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWFyY2godmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlICh7XG4gICAgICBxdWVyeTogdmFsdWVcbiAgICB9LCAoKSA9PiB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5xdWVyeSl9KVxuICB9XG5cbiAgaGFuZGxlQWRkKHZhbHVlKSB7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUpXG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgYWxsOiB0aGlzLnN0YXRlLmFsbC5jb25jYXQoe3RpdGxlOiB2YWx1ZX0pXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZVdhdGNoZWQobW92aWUpIHtcblxuICAgIHZhciBmaWx0ZXJlZCA9IHRoaXMuc3RhdGUud2F0Y2hlZC5maWx0ZXIoKHdhdGNoZWQpID0+IFxuICAgICAgd2F0Y2hlZC50aXRsZSAhPT0gbW92aWUudGl0bGVcbiAgICApXG5cbiAgICB0aGlzLnNldFN0YXRlICh7XG4gICAgICB3YXRjaGVkOiBmaWx0ZXJlZFxuICAgIH0pXG4gICAgLy8gdmFyIGluZGV4ID0gdGhpcy5zdGF0ZS53YXRjaGVkLmluZGV4T2YobW92aWUpO1xuICAgIC8vIHRoaXMuc3RhdGUud2F0Y2hlZC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSAoe1xuICAgIC8vICAgd2F0Y2hlZDogdGhpcy5zdGF0ZS53YXRjaGVkXG4gICAgLy8gfSlcbiAgfVxuXG4gIGFkZFRvV2F0Y2hlZChtb3ZpZSkge1xuICAgIHRoaXMuc2V0U3RhdGUgKHtcbiAgICAgIHdhdGNoZWQ6IHRoaXMuc3RhdGUud2F0Y2hlZC5jb25jYXQobW92aWUpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVdhdGNoZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgY3VycmVudGx5V2F0Y2hlZDogdGhpcy5zdGF0ZS53YXRjaGVkXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZVVuV2F0Y2hlZChtb3ZpZSkge1xuICAgIHZhciBmaWx0ZXJlZCA9IHRoaXMuc3RhdGUudW53YXRjaGVkLmZpbHRlcigodW53YXRjaGVkKSA9PiBcbiAgICAgIHVud2F0Y2hlZC50aXRsZSAhPT0gbW92aWUudGl0bGVcbiAgICApXG5cbiAgICB0aGlzLnNldFN0YXRlICh7XG4gICAgICB1bndhdGNoZWQ6IGZpbHRlcmVkXG4gICAgfSlcblxuICAgIC8vIHZhciBpbmRleCA9IHRoaXMuc3RhdGUudW53YXRjaGVkLmluZGV4T2YobW92aWUpO1xuICAgIC8vIHRoaXMuc3RhdGUudW53YXRjaGVkLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyB0aGlzLnNldFN0YXRlICh7XG4gICAgLy8gICB1bndhdGNoZWQ6IHRoaXMuc3RhdGUudW53YXRjaGVkXG4gICAgLy8gfSlcbiAgfVxuXG4gIGFkZFVuV2F0Y2hlZChtb3ZpZSkge1xuICAgIHRoaXMuc2V0U3RhdGUgKHtcbiAgICAgIHVud2F0Y2hlZDogdGhpcy5zdGF0ZS51bndhdGNoZWQuY29uY2F0KG1vdmllKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVVbldhdGNoZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgY3VycmVudGx5V2F0Y2hlZDogdGhpcy5zdGF0ZS51bndhdGNoZWRcbiAgICB9KVxuICB9XG5cbiAgYWRkVW5XYXRjaGVkKG1vdmllKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgdW53YXRjaGVkOiB0aGlzLnN0YXRlLnVud2F0Y2hlZC5jb25jYXQobW92aWUpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUFsbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlICh7XG4gICAgICBjdXJyZW50bHlXYXRjaGVkOiB0aGlzLnN0YXRlLmFsbFxuICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgIDxBZGQgaGFuZGxlQWRkPXt0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNlYXJjaC1uYXZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIndhdGNoZWQtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVXYXRjaGVkLmJpbmQodGhpcyl9PndhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRvLXdhdGNoLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVW5XYXRjaGVkLmJpbmQodGhpcyl9PnRvIHdhdGNoPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhbGwtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBbGwuYmluZCh0aGlzKX0+YWxsPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTZWFyY2ggaGFuZGxlU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgIDxNb3ZpZUxpc3QgXG4gICAgICAgICAgICAgIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50bHlXYXRjaGVkfSBcbiAgICAgICAgICAgICAgcXVlcnk9e3RoaXMuc3RhdGUucXVlcnl9IFxuICAgICAgICAgICAgICBhZGRXYXRjaGVkPXt0aGlzLmFkZFRvV2F0Y2hlZC5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgYWRkVW5XYXRjaGVkPXt0aGlzLmFkZFVuV2F0Y2hlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICByZW1vdmVXYXRjaGVkPXt0aGlzLnJlbW92ZVdhdGNoZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgcmVtb3ZlVW5XYXRjaGVkPXt0aGlzLnJlbW92ZVVuV2F0Y2hlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5BcHAgPSBBcHA7XG4iXX0=