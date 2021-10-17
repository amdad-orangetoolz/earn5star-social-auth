import { Component } from "react";
import './user.css';

export class User extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render(){
       // const { provider, profile } = this.props;
        const profile = {
            "name": "Pluralsight",
            "number": 1,
            "address": "India",
            "website": "https://www.pluralsight.com/"
        }
        return(
            <div>
            {
                Object.keys(profile).map((key, i) => {
                return(
                <p key={i}>
                    <span>{key}</span>
                    <span> {profile[key]}</span>
                </p>
                )
                })
            }
            </div>
        )
        
    }

    // render() {
    //     const { provider, profile } = this.props;

    //     return (
    //         <div class="card">
    //             <div class="avt">
    //                 <img 
    //                     alt="141" 
    //                     src={profile.picture.data.url}
    //                     height="50"
    //                     width="50"
    //                     ext="1636983621"
    //                     hash="AeSlbB-lvRiW8SBjjlo"/>
    //             </div>
    //             <h3 class="provider">{provider.toUpperCase()}</h3>
                
    //             <div class="content">
    //                 <div class="data">
    //                 {/* <div>
    //                 {
    //                     this.renderRepsonseData(profile)
    //                 }
    //                 </div> */}

    //                     <div class="field">
    //                         <div class="label">accessToken: </div>
    //                         <div class="value">"EAAdpchms5TwBAEX6E6ZC7yBLy1QlAHF4s2KEvKECfLsTI60vo03kLqSsLdXsPlhjVWqN2IfKdP2NGJnoZBcC5KNY5jgWSjdBG7yX4bmBqUeBC9Ggcx5qbCyTc2ZByfwRkIKr2VNr8ID3nfyKcqyudgeYfCxK9ZB9rWztfTpev34hv6uG9ayKEtXON5maFAWUu5TZAk9JuT0UGsGZAEqbiRKmAVZCmfXCtoZD"</div>
    //                         </div>
    //                     <div class="field">
    //                         <div class="label">userID: </div>
    //                         <div class="value">"4383791891707983"</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">expiresIn: </div>
    //                         <div class="value">4780</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">signedRequest: </div>
    //                         <div class="value">"T1XWtNbAAiXQvv-URUug7sB53sNY3S4wAnPkondT0xw.eyJ1c2VyX2lkIjoiNDM4Mzc5MTg5MTcwNzk4MyIsImNvZGUiOiJBUUMzLVJEMmdGX2JVTHQ5VldwZHMwOXhwTHpWY0ppY1ZKelUyXzJmb25iajBvZ01TN3MwbjhGd19HamYwU3lCY2hSNTA1cTNWckdvaXpKbXdKeFpsQUNVR1VtNTJuWnYtWDBOUWwwd0QzX29JdEFhWWEwemxXaThEeXEtU2ZjVUR4ekd6WUdUbHY2SGwta1Qtbzg2LWFHczNOb0NPbTFmQjI3Zm5rZXc0Ty1STGt2NFd3ZHIyN3Ezd1cxd2VqaTlvVno5Y1RWMmRKa01WeVZuUnZfRXFEbHI0UUFjbk1CTm03MjdNb0xDVnpBZmVYZnNzU0ozTmFrSDhZZ0FEQ3dpQVZtTU1EWUNwQmp0bkJrWkJUcHVodFQzZDJVTDI1bU5HNVhQRjNiYTJ5WE8wblNuT2N3SkVOMGk1TmlZTkN2U3A1NTdRcmozRVE3MV9QYlVCV2wzcGJsTUdtX0FOc0FwdEVyZ2JRQThza3JndWciLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTYzNDM5MTYyMH0"</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">graphDomain: </div>
    //                         <div class="value">"facebook"</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">grantedScopes: </div>
    //                         <div class="value">"email,public_profile"</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">data_access_expiration_time: </div>
    //                         <div class="value">1642167620</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">id: </div>
    //                         <div class="value">"4383791891707983"</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">first_name: </div>
    //                         <div class="value">"Amdad"</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">last_name: </div>
    //                         <div class="value">"Hossain"</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">name: </div>
    //                         <div class="value">"Amdad Hossain"</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">name_format: </div>
    //                         <div class="value">"{"first"} {"last"}"</div>
    //                     </div>
    //                     <div class="field">
    //                         <div class="label">short_name: </div>
    //                         <div class="value">"Amdad"</div>
    //                     </div>
    //                     </div><button class="btnLogout">Logout</button></div>
    //                 </div>
                    
    //     );
    // }
}