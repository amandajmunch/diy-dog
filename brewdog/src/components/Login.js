import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import Axios from 'axios';

class Login extends React.Component{

  // constructor (props, context) {
  //   super(props, context);
  // }

  responseFacebook (response) {
    console.log(response);
     Axios.post("https://pacific-springs-26484.herokuapp.com/api/users", response)
      .then(response => this.props.history.push("/"))
      .catch(response => alert("Couldn't save user"));
  }

  // function checkLoginState() {
  //   FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  //   });
  // }

  render () {
    return (
//       <div id="fb-root"></div>
// <script>(function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=879887558825863";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));</script>
      <div>
        <FacebookLogin socialId="879887558825863"
                       language="en_US"
                       scope="public_profile,email"
                       fields="id,name,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       version="v2.5"
                       class="facebook-login"
                       buttonText="Login With Facebook"/>
          <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>

      </div>
    );
  }

}



export default Login;
