class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    
    return (
      <div className="movie-list">

      {
        (this.props.query === '') ?  

        (this.props.movies.map((movie, i) =>
            <MovieListEntry 
              movie={movie} 
              key={i}
              addWatched={this.props.addWatched} 
              addUnWatched={this.props.addUnWatched}
              removeWatched={this.props.removeWatched}
              removeUnWatched={this.props.removeUnWatched}
            />
        ))

        :

        (this.props.movies.filter((movie) => 
          movie.title.includes(this.props.query)).map((movie, i) =>
          <MovieListEntry 
            movie={movie} 
            key={i}
            addWatched={this.props.addWatched} 
            addUnWatched={this.props.addUnWatched}
            removeWatched={this.props.removeWatched}
            removeUnWatched={this.props.removeUnWatched}
          />
        ))
      }
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