class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: window.movies,
      watched: [],
      unwatched: window.movies.slice(),
      currentlyWatched: window.movies.slice(),
      query: "",
    }
  }

  handleSearch(value) {
    this.setState ({
      query: value
    }, () => {console.log(this.state.query)})
  }

  handleAdd(value) {
    // console.log(value)
    this.setState ({
      all: this.state.all.concat({title: value})
    })
  }

  removeWatched(movie) {

    var filtered = this.state.watched.filter((watched) => 
      watched.title !== movie.title
    )

    this.setState ({
      watched: filtered
    })
    // var index = this.state.watched.indexOf(movie);
    // this.state.watched.splice(index, 1);

    // this.setState ({
    //   watched: this.state.watched
    // })
  }

  addToWatched(movie) {
    this.setState ({
      watched: this.state.watched.concat(movie)
    })
  }

  handleWatched() {
    this.setState ({
      currentlyWatched: this.state.watched
    })
  }

  removeUnWatched(movie) {
    var filtered = this.state.unwatched.filter((unwatched) => 
      unwatched.title !== movie.title
    )

    this.setState ({
      unwatched: filtered
    })

    // var index = this.state.unwatched.indexOf(movie);
    // this.state.unwatched.splice(index, 1);

    // this.setState ({
    //   unwatched: this.state.unwatched
    // })
  }

  addUnWatched(movie) {
    this.setState ({
      unwatched: this.state.unwatched.concat(movie)
    })
  }

  handleUnWatched() {
    this.setState ({
      currentlyWatched: this.state.unwatched
    })
  }

  addUnWatched(movie) {
    this.setState ({
      unwatched: this.state.unwatched.concat(movie)
    })
  }

  handleAll() {
    this.setState ({
      currentlyWatched: this.state.all
    })
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Add handleAdd={this.handleAdd.bind(this)}/>
          </div>
        </nav>
        <nav className="search-nav">
          <div className="col-md-6 offset-md-3">
            <div className="buttons">
              <button id="watched-button" onClick={this.handleWatched.bind(this)}>watched</button>
              <button id="to-watch-button" onClick={this.handleUnWatched.bind(this)}>to watch</button>
              <button id="all-button" onClick={this.handleAll.bind(this)}>all</button>
            </div>
            <Search handleSearch={this.handleSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-5">
            <MovieList 
              movies={this.state.currentlyWatched} 
              query={this.state.query} 
              addWatched={this.addToWatched.bind(this)} 
              addUnWatched={this.addUnWatched.bind(this)}
              removeWatched={this.removeWatched.bind(this)}
              removeUnWatched={this.removeUnWatched.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
