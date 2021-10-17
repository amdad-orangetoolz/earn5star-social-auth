import { Component } from "react";
import './user.css';

export class User extends Component {

    constructor(props, context) {
        super(props, context);
    }

    renderResponseData(profile){
        
        return(
            <div class="card">
            {
                Object.keys(profile).map((key, i) => {
                return(
                <div class="field" key = {i}>
                    <div class="label">{key}</div>
                    <div class="value"> {typeof(profile[key]) === 'object' ? JSON.stringify(profile[key]): profile[key] }</div>
                </div>
                )
                })
            }
            </div>
        )
        
    }

    render() {
        const { provider, profile } = this.props;

        return (
            <div className="card">
                
                <div class="avt">
                    <img 
                        alt="141" 
                        src={profile.picture.data.url}
                        height="50"
                        width="50"
                        ext="1636983621"
                        hash="AeSlbB-lvRiW8SBjjlo"
                    />
                </div>

                <h3 class="provider">{provider.toUpperCase()}</h3>

                <div class="content">
                    <div class="data">
                    {this.renderResponseData(profile)}
                    </div>

                    <div><button class="btnLogout">Logout</button></div>
                </div>
                
            </div>

        );
    }
}