class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: window.movies,
      value: ""
    }
  }

  handleSearch(value) {

    this.setState ({
      value: value
    }, () => {console.log(this.state.value)})
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch.bind(this)} term={"name"}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-5">
            <MovieList movies={movies}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
