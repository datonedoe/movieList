"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Watched = function (_React$Component) {
  _inherits(Watched, _React$Component);

  function Watched(props) {
    _classCallCheck(this, Watched);

    var _this = _possibleConstructorReturn(this, (Watched.__proto__ || Object.getPrototypeOf(Watched)).call(this, props));

    _this.state = { isToggleOn: true };
    return _this;
  }

  _createClass(Watched, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "movie-list-entry media" },
        React.createElement(
          "div",
          { className: "media-left media-middle" },
          React.createElement("img", { className: "media-object", src: "", alt: "" })
        ),
        React.createElement(
          "div",
          { className: "media-body" },
          React.createElement(
            "div",
            { className: "movie-list-entry-title" },
            this.props.movie.title,
            React.createElement(
              "button",
              { className: "watched" },
              "watched"
            )
          )
        )
      );
    }
  }]);

  return Watched;
}(React.Component);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieListEntry = MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dhdGNoZWQuanN4Il0sIm5hbWVzIjpbIldhdGNoZWQiLCJwcm9wcyIsInN0YXRlIiwiaXNUb2dnbGVPbiIsIm1vdmllIiwidGl0bGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIk1vdmllTGlzdEVudHJ5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBQ0MsWUFBWSxJQUFiLEVBQWI7QUFGaUI7QUFHbEI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHlCQUFmO0FBQ0UsdUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUksRUFBbEMsRUFBcUMsS0FBSSxFQUF6QztBQURGLFNBREY7QUFJRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHdCQUFmO0FBQ0csaUJBQUtGLEtBQUwsQ0FBV0csS0FBWCxDQUFpQkMsS0FEcEI7QUFFRTtBQUFBO0FBQUEsZ0JBQVEsV0FBVSxTQUFsQjtBQUFBO0FBQUE7QUFGRjtBQURGO0FBSkYsT0FERjtBQWFEOzs7O0VBcEJtQkMsTUFBTUMsUzs7QUF3QjVCO0FBQ0E7OztBQUNBQyxlQUFlQyxTQUFmLEdBQTJCO0FBQ3pCTCxTQUFPRSxNQUFNSSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUEzQjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9MLGNBQVAsR0FBd0JBLGNBQXhCIiwiZmlsZSI6IldhdGNoZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXYXRjaGVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtpc1RvZ2dsZU9uOiB0cnVlfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdCBtZWRpYS1taWRkbGVcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz1cIlwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj4gIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdC1lbnRyeS10aXRsZVwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW92aWUudGl0bGV9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdGNoZWRcIj53YXRjaGVkPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcbk1vdmllTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5Nb3ZpZUxpc3RFbnRyeSA9IE1vdmllTGlzdEVudHJ5O1xuIl19