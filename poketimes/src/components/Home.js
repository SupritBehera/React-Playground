import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component{
    state = {
        posts: [],
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            response => {
                console.log(response);
                this.setState({
                    posts: response.data.slice(0,20),
                });
            }
        )
    }

    render(){
        const {posts} = this.state;
        console.log(posts.length);
        const postsList = posts.length? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                      <div className="card-content">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                      </div>
                    </div>
                  )
            })
         ) : (
             <div className="center">No Posts to Show</div>
         );

         return (
            <div>
              <div className="container">
                <h4 className="center">Home</h4>
                {postsList}
              </div>
            </div>
          )
    }
}


export default Home;


