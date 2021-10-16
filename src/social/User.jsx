import { Component } from "react";

export class User extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {provider, profile} = this.props;
        return(
            <div>
                <h1>{provider}</h1>
                <div>{JSON.stringify(profile)}</div>
            </div>
        );
    }
    
}