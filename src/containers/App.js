import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchfield: '',
			robots: [],
		}
	}

	componentDidMount() {
		// console.log('here');
		fetch(`https://jsonplaceholder.typicode.com/users`)
		.then(response=> response.json())
		.then(users=> this.setState({ robots: users }))
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })

		let searchedRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(
				this.state.searchfield.toLowerCase());
		})
		this.setState({robots: searchedRobots});
	}

	render () {
		if (this.state.robots.length === 0) {
			return <h1>Loading!</h1>
		}
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={this.state.robots}/>
				</Scroll>
			</div>
		);
	}
}

export default App;