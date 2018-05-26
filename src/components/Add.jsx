class Add extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}
	}

	handleChange(event) {
		// console.log(event.target.value)
		this.setState ({
			value: event.target.value
		})
	}

	render() {
		return(
			<div className="search-bar form-inline">
		    <input className="form-control" type="text" placeholder="add movie"onChange={(event) => {this.handleChange(event)}}/>
		    <button className="btn hidden-sm-down" onClick={() => this.props.handleAdd(this.state.value)}> add
		      <span className="glyphicon glyphicon-search"></span>
		    </button>
		  	</div> 
		)
	}
}
