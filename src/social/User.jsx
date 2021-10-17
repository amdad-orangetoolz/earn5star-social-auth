import { Component } from "react";
import './user.css';

export class User extends Component {

    constructor(props, context) {
        super(props, context);
    }

    renderResponseData(profile){
        
        return(
            <div>
            {
                Object.keys(profile).map((key, i) => {
                return(
                <div className ="field" key = {i}>
                    <div className ="label">{key}</div>
                    <div className ="value"> {typeof(profile[key]) === 'object' ? JSON.stringify(profile[key]): profile[key] }</div>
                </div>
                )
                })
            }
            </div>
        )
        
    }

    getUserProfile = (provider, profile)=>{
        var scope = provider.toLowerCase();
        if(scope == 'facebook'){
            return profile.picture.data.url;
        }else if(scope == 'google'){
            return profile.avatar;
        }else{
            return 'https://res.cloudinary.com/demo/basketball_shot.jpg';
        }
    }

    render() {
        const { provider, profile } = this.props;
        var profileUrl = getUserProfile(provider, profile);
        
        return (
            <div className="card">

                <div className="avt">
                    <img 
                        alt="141" 
                        src={profileUrl}
                        height="50"
                        width="50"
                        ext="1636983621"
                        hash="AeSlbB-lvRiW8SBjjlo"
                    />
                </div>

                <h3 className = "provider">{provider.toUpperCase()}</h3>

                <div className = "content">
                    <div className = "data">
                    {this.renderResponseData(profile)}
                    <div><button className = "btnLogout">Logout</button></div>
                    </div>
                </div>
                
            </div>

        );
    }
}