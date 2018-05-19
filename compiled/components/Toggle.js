"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));
  }

  _createClass(Toggle, [{
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

  return Toggle;
}(React.Component);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated


MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieListEntry = MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RvZ2dsZS5qc3giXSwibmFtZXMiOlsiVG9nZ2xlIiwicHJvcHMiLCJtb3ZpZSIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJNb3ZpZUxpc3RFbnRyeSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyR0FDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFDRSx1Q0FBSyxXQUFVLGNBQWYsRUFBOEIsS0FBSSxFQUFsQyxFQUFxQyxLQUFJLEVBQXpDO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsd0JBQWY7QUFDRyxpQkFBS0EsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxLQURwQjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxXQUFVLFNBQWxCO0FBQUE7QUFBQTtBQUZGO0FBREY7QUFKRixPQURGO0FBYUQ7Ozs7RUFuQmtCQyxNQUFNQyxTOztBQXVCM0I7QUFDQTs7O0FBQ0FDLGVBQWVDLFNBQWYsR0FBMkI7QUFDekJMLFNBQU9FLE1BQU1JLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCOztBQUlBO0FBQ0E7QUFDQUMsT0FBT0wsY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9nZ2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtbGlzdC1lbnRyeSBtZWRpYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIiBzcmM9XCJcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+ICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWxpc3QtZW50cnktdGl0bGVcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1vdmllLnRpdGxlfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXRjaGVkXCI+d2F0Y2hlZDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5Nb3ZpZUxpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuTW92aWVMaXN0RW50cnkgPSBNb3ZpZUxpc3RFbnRyeTtcbiJdfQ==