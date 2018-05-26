class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: window.movies,
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
      movies: this.state.movies.concat({title: value})
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
              <button id="watched-button">watched</button>
              <button id="to-watch-button">to watch</button>
              <button id="movies-button">movies</button>
            </div>
            <Search handleSearch={this.handleSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-5">
            <MovieList 
              movies={this.state.movies} 
              query={this.state.query} 
            />
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globmoviesy where explicitly defined
window.App = App;
