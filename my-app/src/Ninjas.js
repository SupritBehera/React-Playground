import React from 'react';

const Ninjas = (props) => {
    console.log(props);
    const listOfNinjas = props.ninjas;
    const listOfNinjasJsx = listOfNinjas.map(ninja => { 
        return(
            <div className = "Ninja" key={ninja.id}>
                <div>Name : {ninja.name}</div>
                <div>Age : {ninja.age}</div>
                <div>Belt : {ninja.belt}</div>
                <button onClick={() => props.deleteNinja(ninja.id)}>Delete Ninja</button>
                <br/>
            </div>  
        );    
    });
    return(
        <div className="ninja-list">
            {listOfNinjasJsx}
        </div>
    );
}
export default Ninjas;