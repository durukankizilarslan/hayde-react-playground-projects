import PropTypes from 'prop-types';

function GreetingMessage(props) {
    
    const welcomeMessage = <p className="welcome-message">Welcome {props.username}</p>;
    const loginPrompt = <p className="login-prompt">You must be logged in</p>;

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

GreetingMessage.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

GreetingMessage.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default GreetingMessage;