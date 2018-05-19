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
      isToggleOn: false
    };
    return _this;
  }

  _createClass(MovieListEntry, [{
    key: "handleWatchedToggle",
    value: function handleWatchedToggle() {
      console.log('hello');
      if (!this.state.isToggleOn) {
        this.props.addWatched(this.props.movie);
        this.props.removeUnWatched(this.props.movie);
      } else {
        this.props.addUnWatched(this.props.movie);
        this.props.removeWatched(this.props.movie);
      }

      this.setState({
        isToggleOn: !this.state.isToggleOn
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
              this.state.isToggleOn ? "watched" : 'unwatched'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwic3RhdGUiLCJpc1RvZ2dsZU9uIiwiY29uc29sZSIsImxvZyIsImFkZFdhdGNoZWQiLCJtb3ZpZSIsInJlbW92ZVVuV2F0Y2hlZCIsImFkZFVuV2F0Y2hlZCIsInJlbW92ZVdhdGNoZWQiLCJzZXRTdGF0ZSIsInRpdGxlIiwiaGFuZGxlV2F0Y2hlZFRvZ2dsZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsYzs7O0FBQ0osMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZO0FBREQsS0FBYjtBQUhpQjtBQU1sQjs7OzswQ0FFcUI7QUFDcEJDLGNBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsVUFBSSxDQUFDLEtBQUtILEtBQUwsQ0FBV0MsVUFBaEIsRUFBNEI7QUFDMUIsYUFBS0YsS0FBTCxDQUFXSyxVQUFYLENBQXNCLEtBQUtMLEtBQUwsQ0FBV00sS0FBakM7QUFDQSxhQUFLTixLQUFMLENBQVdPLGVBQVgsQ0FBMkIsS0FBS1AsS0FBTCxDQUFXTSxLQUF0QztBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtOLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QixLQUFLUixLQUFMLENBQVdNLEtBQW5DO0FBQ0EsYUFBS04sS0FBTCxDQUFXUyxhQUFYLENBQXlCLEtBQUtULEtBQUwsQ0FBV00sS0FBcEM7QUFDRDs7QUFFRCxXQUFLSSxRQUFMLENBQWM7QUFDWlIsb0JBQVksQ0FBQyxLQUFLRCxLQUFMLENBQVdDO0FBRFosT0FBZDtBQUdEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFDRSxxQ0FBSyxXQUFVLHlCQUFmLEdBREY7QUFHRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE9BQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHdCQUFmO0FBQ0csaUJBQUtGLEtBQUwsQ0FBV00sS0FBWCxDQUFpQkssS0FEcEI7QUFFRTtBQUFBO0FBQUEsZ0JBQVEsV0FBVSxTQUFsQixFQUE0QixTQUFTLEtBQUtDLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQUFyQztBQUNHLG1CQUFLWixLQUFMLENBQVdDLFVBQVgsR0FBd0IsU0FBeEIsR0FBb0M7QUFEdkM7QUFGRjtBQURGO0FBSEYsT0FERjtBQWNEOzs7O0VBdkMwQlksTUFBTUMsUzs7QUEyQ25DO0FBQ0E7OztBQUNBaEIsZUFBZWlCLFNBQWYsR0FBMkI7QUFDekJWLFNBQU9RLE1BQU1HLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCOztBQUlBO0FBQ0E7QUFDQUMsT0FBT3JCLGNBQVAsR0FBd0JBLGNBQXhCIiwiZmlsZSI6Ik1vdmllTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc1RvZ2dsZU9uOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVdhdGNoZWRUb2dnbGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvJylcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNUb2dnbGVPbikge1xuICAgICAgdGhpcy5wcm9wcy5hZGRXYXRjaGVkKHRoaXMucHJvcHMubW92aWUpXG4gICAgICB0aGlzLnByb3BzLnJlbW92ZVVuV2F0Y2hlZCh0aGlzLnByb3BzLm1vdmllKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmFkZFVuV2F0Y2hlZCh0aGlzLnByb3BzLm1vdmllKVxuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVXYXRjaGVkKHRoaXMucHJvcHMubW92aWUpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1RvZ2dsZU9uOiAhdGhpcy5zdGF0ZS5pc1RvZ2dsZU9uXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnlcIj4gIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdC1lbnRyeS10aXRsZVwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW92aWUudGl0bGV9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdGNoZWRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVdhdGNoZWRUb2dnbGUuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzVG9nZ2xlT24gPyBcIndhdGNoZWRcIiA6ICd1bndhdGNoZWQnfSBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5Nb3ZpZUxpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuTW92aWVMaXN0RW50cnkgPSBNb3ZpZUxpc3RFbnRyeTtcbiJdfQ==