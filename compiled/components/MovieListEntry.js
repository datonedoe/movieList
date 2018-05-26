"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieListEntry = function (_React$Component) {
  _inherits(MovieListEntry, _React$Component);

  function MovieListEntry(props) {
    _classCallCheck(this, MovieListEntry);

    var _this = _possibleConstructorReturn(this, (MovieListEntry.__proto__ || Object.getPrototypeOf(MovieListEntry)).call(this, props));

    _this.state = {
      isWatched: false
    };
    return _this;
  }

  _createClass(MovieListEntry, [{
    key: "handleWatchedToggle",
    value: function handleWatchedToggle() {
      console.log('hello');
      // if (!this.state.isWatched) {
      //   this.props.addWatched(this.props.movie)
      //   this.props.removeUnWatched(this.props.movie)
      // } else {
      //   this.props.addUnWatched(this.props.movie)
      //   this.props.removeWatched(this.props.movie)
      // }

      this.setState({
        isWatched: !this.state.isWatched
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "movie-list-entry media" },
        React.createElement("div", { className: "media-left media-middle" }),
        React.createElement(
          "div",
          { className: "entry" },
          React.createElement(
            "div",
            { className: "movie-list-entry-title" },
            this.props.movie.title,
            React.createElement(
              "button",
              { className: "watched", onClick: this.handleWatchedToggle.bind(this) },
              this.state.isWatched ? "watched" : 'unwatched'
            )
          )
        )
      );
    }
  }]);

  return MovieListEntry;
}(React.Component);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieListEntry = MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJpc1dhdGNoZWQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJtb3ZpZSIsInRpdGxlIiwiaGFuZGxlV2F0Y2hlZFRvZ2dsZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXO0FBREEsS0FBYjtBQUhpQjtBQU1sQjs7OzswQ0FFcUI7QUFDcEJDLGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBS0MsUUFBTCxDQUFjO0FBQ1pILG1CQUFXLENBQUMsS0FBS0QsS0FBTCxDQUFXQztBQURYLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0UscUNBQUssV0FBVSx5QkFBZixHQURGO0FBR0U7QUFBQTtBQUFBLFlBQUssV0FBVSxPQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSx3QkFBZjtBQUNHLGlCQUFLRixLQUFMLENBQVdNLEtBQVgsQ0FBaUJDLEtBRHBCO0FBRUU7QUFBQTtBQUFBLGdCQUFRLFdBQVUsU0FBbEIsRUFBNEIsU0FBUyxLQUFLQyxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBckM7QUFDRyxtQkFBS1IsS0FBTCxDQUFXQyxTQUFYLEdBQXVCLFNBQXZCLEdBQW1DO0FBRHRDO0FBRkY7QUFERjtBQUhGLE9BREY7QUFjRDs7OztFQXZDMEJRLE1BQU1DLFM7O0FBMkNuQztBQUNBOzs7QUFDQVosZUFBZWEsU0FBZixHQUEyQjtBQUN6Qk4sU0FBT0ksTUFBTUcsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREwsQ0FBM0I7O0FBSUE7QUFDQTtBQUNBQyxPQUFPakIsY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpZUxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzV2F0Y2hlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVXYXRjaGVkVG9nZ2xlKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXG4gICAgLy8gaWYgKCF0aGlzLnN0YXRlLmlzV2F0Y2hlZCkge1xuICAgIC8vICAgdGhpcy5wcm9wcy5hZGRXYXRjaGVkKHRoaXMucHJvcHMubW92aWUpXG4gICAgLy8gICB0aGlzLnByb3BzLnJlbW92ZVVuV2F0Y2hlZCh0aGlzLnByb3BzLm1vdmllKVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLnByb3BzLmFkZFVuV2F0Y2hlZCh0aGlzLnByb3BzLm1vdmllKVxuICAgIC8vICAgdGhpcy5wcm9wcy5yZW1vdmVXYXRjaGVkKHRoaXMucHJvcHMubW92aWUpXG4gICAgLy8gfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1dhdGNoZWQ6ICF0aGlzLnN0YXRlLmlzV2F0Y2hlZFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdC1lbnRyeSBtZWRpYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVudHJ5XCI+ICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWxpc3QtZW50cnktdGl0bGVcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1vdmllLnRpdGxlfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXRjaGVkXCIgb25DbGljaz17dGhpcy5oYW5kbGVXYXRjaGVkVG9nZ2xlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc1dhdGNoZWQgPyBcIndhdGNoZWRcIiA6ICd1bndhdGNoZWQnfSBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5Nb3ZpZUxpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuTW92aWVMaXN0RW50cnkgPSBNb3ZpZUxpc3RFbnRyeTtcbiJdfQ==