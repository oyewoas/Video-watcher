import React, { Component } from 'react';


// Stateful component, are class based components
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''}
    }
    render() {
        return (
            <div className="search-bar">
                <h1>Quick Watch</h1>
                <input value = {this.state.term} 
                onChange={event => this.onInputChange(event.target.value)}/>
              
            </div>
            )
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);

    }

    // Watch for changes in the input
    // onInputChange(event) {
    //     console.log(event.target.value)

    // }
}

export default SearchBar;