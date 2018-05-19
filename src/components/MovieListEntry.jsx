class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isWatched: this.props.seen || false
    }
  }

  handleWatchedToggle() {
    console.log('hello')
    if (!this.state.isWatched) {
      this.props.addWatched({...this.props.movie, seen: true})
      this.props.removeUnWatched(this.props.movie)
    } else {
      this.props.addUnWatched({...this.props.movie, seen: false})
      this.props.removeWatched(this.props.movie)
    }

    this.setState({
      isWatched: !this.state.isWatched
    })
  }

  render() {
    return (
      <div className="movie-list-entry media">
        <div className="media-left media-middle">
        </div>
        <div className="entry">  
          <div className="movie-list-entry-title">
            {this.props.movie.title}
            <button className="watched" onClick={this.handleWatchedToggle.bind(this)}>
              {this.state.isWatched ? "watched" : 'unwatched'} 
            </button>
          </div>
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
