import React, {Component} from 'react'

class AddNinja extends Component{
    state = {
        name: null,
        age: null,
        belt: null,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addNinja(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age" id="age"></label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <label htmlFor="belt" id="belt"></label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default AddNinja;