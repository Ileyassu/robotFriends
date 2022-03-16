import CardList from './cardList';
import SearchBox from './SearchBox';
import { Component } from 'react';
import { robots } from './robots';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

class App extends Component{
    
        constructor() {
            super()
            this.state = {
                robots : [],
                searchfield : ''
            }
            console.log("Constructor");
        }
        componentDidMount(){
            this.setState({robots:robots})
        }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
 
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        }) 
    return (
        <div className='tc'>
            
            <h1>Robot Friends</h1>
            <Scroll>
            <SearchBox searchChange={this.onSearchChange} />

            <ErrorBoundry>
            <CardList robots = {filteredRobots} /> 
            </ErrorBoundry>
            </Scroll>
         </div>
    )} 
}

export default App;