class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="movie-list">
      {this.props.movies.map((movie, i) =>
        <MovieListEntry movie={movie} key={i}/>
       )}
      </div>
    );
  }
}



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.MovieList = MovieList;
