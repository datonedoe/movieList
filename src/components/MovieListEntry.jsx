class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src="" alt="" />
        </div>
        <div className="media-body">  
          <div className="movie-list-entry-title">{this.props.movie.title}</div>
          <div className="movie-list-entry-detail"></div>
        </div>
      </div>
    );
  }
}


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MovieListEntry = MovieListEntry;
