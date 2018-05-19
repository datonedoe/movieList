"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieList = function (_React$Component) {
  _inherits(MovieList, _React$Component);

  function MovieList(props) {
    _classCallCheck(this, MovieList);

    return _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this, props));
  }

  _createClass(MovieList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { className: "movie-list" },
        this.props.query === '' ? this.props.movies.map(function (movie, i) {
          return React.createElement(MovieListEntry, {
            movie: movie,
            key: i,
            addWatched: _this2.props.addWatched,
            addUnWatched: _this2.props.addUnWatched,
            removeWatched: _this2.props.removeWatched,
            removeUnWatched: _this2.props.removeUnWatched
          });
        }) : this.props.movies.filter(function (movie) {
          return movie.title.includes(_this2.props.query);
        }).map(function (movie, i) {
          return React.createElement(MovieListEntry, {
            movie: movie,
            key: i,
            addWatched: _this2.props.addWatched,
            addUnWatched: _this2.props.addUnWatched,
            removeWatched: _this2.props.removeWatched,
            removeUnWatched: _this2.props.removeUnWatched
          });
        })
      );
    }
  }]);

  return MovieList;
}(React.Component);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
// window.MovieList = MovieList;

// {
//   if (this.props.query !== '') {
//     this.props.movies.filter((movie) => 
//     movie.title === this.props.query).map((movie, i) =>
//     <MovieListEntry movie={movie} key={i}/>
//   )}
// }
// {
//   if (this.props.query === '') {
//     this.props.movies.map((movie, i) =>
//       <MovieListEntry movie={movie} key={i}/>
//   )}
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJxdWVyeSIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwiaSIsImFkZFdhdGNoZWQiLCJhZGRVbldhdGNoZWQiLCJyZW1vdmVXYXRjaGVkIiwicmVtb3ZlVW5XYXRjaGVkIiwiZmlsdGVyIiwidGl0bGUiLCJpbmNsdWRlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBQ1E7QUFBQTs7QUFHUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUdHLGFBQUtBLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixFQUF0QixHQUVDLEtBQUtELEtBQUwsQ0FBV0UsTUFBWCxDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSO0FBQUEsaUJBQ25CLG9CQUFDLGNBQUQ7QUFDRSxtQkFBT0QsS0FEVDtBQUVFLGlCQUFLQyxDQUZQO0FBR0Usd0JBQVksT0FBS0wsS0FBTCxDQUFXTSxVQUh6QjtBQUlFLDBCQUFjLE9BQUtOLEtBQUwsQ0FBV08sWUFKM0I7QUFLRSwyQkFBZSxPQUFLUCxLQUFMLENBQVdRLGFBTDVCO0FBTUUsNkJBQWlCLE9BQUtSLEtBQUwsQ0FBV1M7QUFOOUIsWUFEbUI7QUFBQSxTQUF0QixDQUZELEdBZUMsS0FBS1QsS0FBTCxDQUFXRSxNQUFYLENBQWtCUSxNQUFsQixDQUF5QixVQUFDTixLQUFEO0FBQUEsaUJBQ3hCQSxNQUFNTyxLQUFOLENBQVlDLFFBQVosQ0FBcUIsT0FBS1osS0FBTCxDQUFXQyxLQUFoQyxDQUR3QjtBQUFBLFNBQXpCLEVBQ3lDRSxHQUR6QyxDQUM2QyxVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxpQkFDNUMsb0JBQUMsY0FBRDtBQUNFLG1CQUFPRCxLQURUO0FBRUUsaUJBQUtDLENBRlA7QUFHRSx3QkFBWSxPQUFLTCxLQUFMLENBQVdNLFVBSHpCO0FBSUUsMEJBQWMsT0FBS04sS0FBTCxDQUFXTyxZQUozQjtBQUtFLDJCQUFlLE9BQUtQLEtBQUwsQ0FBV1EsYUFMNUI7QUFNRSw2QkFBaUIsT0FBS1IsS0FBTCxDQUFXUztBQU45QixZQUQ0QztBQUFBLFNBRDdDO0FBbEJILE9BREY7QUFpQ0Q7Ozs7RUF4Q3FCSSxNQUFNQyxTOztBQTZDOUI7QUFDQTs7O0FBQ0FmLFVBQVVnQixTQUFWLEdBQXNCO0FBQ3BCYixVQUFRVyxNQUFNRyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkM7QUFEVixDQUF0Qjs7QUFJQTtBQUNBO0FBQ0E7O0FBRU07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWxpc3RcIj5cblxuICAgICAge1xuICAgICAgICAodGhpcy5wcm9wcy5xdWVyeSA9PT0gJycpID8gIFxuXG4gICAgICAgICh0aGlzLnByb3BzLm1vdmllcy5tYXAoKG1vdmllLCBpKSA9PlxuICAgICAgICAgICAgPE1vdmllTGlzdEVudHJ5IFxuICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9IFxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGFkZFdhdGNoZWQ9e3RoaXMucHJvcHMuYWRkV2F0Y2hlZH0gXG4gICAgICAgICAgICAgIGFkZFVuV2F0Y2hlZD17dGhpcy5wcm9wcy5hZGRVbldhdGNoZWR9XG4gICAgICAgICAgICAgIHJlbW92ZVdhdGNoZWQ9e3RoaXMucHJvcHMucmVtb3ZlV2F0Y2hlZH1cbiAgICAgICAgICAgICAgcmVtb3ZlVW5XYXRjaGVkPXt0aGlzLnByb3BzLnJlbW92ZVVuV2F0Y2hlZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICkpXG5cbiAgICAgICAgOlxuXG4gICAgICAgICh0aGlzLnByb3BzLm1vdmllcy5maWx0ZXIoKG1vdmllKSA9PiBcbiAgICAgICAgICBtb3ZpZS50aXRsZS5pbmNsdWRlcyh0aGlzLnByb3BzLnF1ZXJ5KSkubWFwKChtb3ZpZSwgaSkgPT5cbiAgICAgICAgICA8TW92aWVMaXN0RW50cnkgXG4gICAgICAgICAgICBtb3ZpZT17bW92aWV9IFxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgYWRkV2F0Y2hlZD17dGhpcy5wcm9wcy5hZGRXYXRjaGVkfSBcbiAgICAgICAgICAgIGFkZFVuV2F0Y2hlZD17dGhpcy5wcm9wcy5hZGRVbldhdGNoZWR9XG4gICAgICAgICAgICByZW1vdmVXYXRjaGVkPXt0aGlzLnByb3BzLnJlbW92ZVdhdGNoZWR9XG4gICAgICAgICAgICByZW1vdmVVbldhdGNoZWQ9e3RoaXMucHJvcHMucmVtb3ZlVW5XYXRjaGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5Nb3ZpZUxpc3QucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlLlxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWQuXG4vLyB3aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0O1xuXG4gICAgICAvLyB7XG4gICAgICAvLyAgIGlmICh0aGlzLnByb3BzLnF1ZXJ5ICE9PSAnJykge1xuICAgICAgLy8gICAgIHRoaXMucHJvcHMubW92aWVzLmZpbHRlcigobW92aWUpID0+IFxuICAgICAgLy8gICAgIG1vdmllLnRpdGxlID09PSB0aGlzLnByb3BzLnF1ZXJ5KS5tYXAoKG1vdmllLCBpKSA9PlxuICAgICAgLy8gICAgIDxNb3ZpZUxpc3RFbnRyeSBtb3ZpZT17bW92aWV9IGtleT17aX0vPlxuICAgICAgLy8gICApfVxuICAgICAgLy8gfVxuICAgICAgLy8ge1xuICAgICAgLy8gICBpZiAodGhpcy5wcm9wcy5xdWVyeSA9PT0gJycpIHtcbiAgICAgIC8vICAgICB0aGlzLnByb3BzLm1vdmllcy5tYXAoKG1vdmllLCBpKSA9PlxuICAgICAgLy8gICAgICAgPE1vdmllTGlzdEVudHJ5IG1vdmllPXttb3ZpZX0ga2V5PXtpfS8+XG4gICAgICAvLyAgICl9XG4gICAgICAvLyB9Il19