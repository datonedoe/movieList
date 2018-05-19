class Search extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    	value: ""
    }
 }


 handleOnChange(event) {
 	// console.log(event.target.value)
 	this.setState ({
 		value: event.target.value
 	})
 }

 render() {
 	return (
	  <div className="search-bar form-inline">
	    <input className="form-control" type="text" placeholder="search" onChange={(event) => {this.handleOnChange(event)}}/>
	    <button className="btn hidden-sm-down" onClick={this.props.handleSearch.bind(this, this.state.value)}> go!
	      <span className="glyphicon glyphicon-search"></span>
	    </button>
	  </div> 
	)
 }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
