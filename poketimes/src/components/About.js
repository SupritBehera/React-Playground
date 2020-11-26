import React from 'react';
import Rainbow from '../higher-order-component/Rainbow.js'

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni incidunt sed, praesentium fugiat repellendus odit! Obcaecati eaque laboriosam ab, ipsum eveniet quam rem incidunt, labore commodi quis maxime consequatur!</p>
        </div>
    )
}

export default Rainbow(About);


