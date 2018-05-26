class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

    searchQueryFilter() {
    if (this.props.query === '') {
      return this.props.movies.map((movie, i) => {
        return <MovieListEntry
          movie={movie}
          key={i}
        />
      });
    } else {
      var filtered = this.props.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.props.query.toLowerCase());
      })

      if (filtered.length === 0) {
        // console.log('this is filtered', filtered)
        return <div>No Movies Found</div>
      } else {
        return filtered.map((movie,i) => {
          return <MovieListEntry 
            movie={movie} 
            key={i}
          />
        })
      }
    }
  }

  render() {
    return (
      <div className="movie-list">

      {
        this.searchQueryFilter();
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