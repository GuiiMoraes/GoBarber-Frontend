import React from 'react';
import GoogleLogin from 'react-google-login';

import { GoogleSignInButton } from './styles';

interface GoogleSignInProps {
  buttonText?: string;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({
  buttonText = 'Sign in with Google',
}) => {
  const handleSuccess = (response: any) => {
    console.log(response);
  };

  const handleFailure = (response: any) => {
    console.log(response);
  };

  return (
    <GoogleSignInButton>
      <GoogleLogin
        clientId="700684078578-94q5thatn126japm181pfcffrileaasp.apps.googleusercontent.com"
        buttonText={buttonText}
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy="single_host_origin"
        isSignedIn
      />
    </GoogleSignInButton>
  );
};

export default GoogleSignIn;
