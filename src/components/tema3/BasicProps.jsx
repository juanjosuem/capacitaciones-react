import React from 'react';
import PropTypes from 'prop-types';

const MisComponentes = {
    Welcome(props){
        return <h1>Hello, World</h1>;
    },
    WelcomeUser(props) {
        return <h1>Hello, {props.name}</h1>;
    },
    WelcomeChilden(props) {
        return (
            <React.Fragment>
                <h1>probando</h1>
                <div>
                    <h2>{props.saludo}, {props.name}</h2>
                    {props.children}
                </div>
            </React.Fragment>
        );
    }    
};



MisComponentes.WelcomeChilden.defaultProps = {
    saludo: "Buenas Noches"
};


MisComponentes.WelcomeChilden.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    telfs: PropTypes.arrayOf(PropTypes.number).isRequired,
    conduce: PropTypes.oneOf(['Si','No']),
    fuma: PropTypes.bool.isRequired,
    saludo: PropTypes.string
    /*,
    
    children: PropTypes.element*/
};



export default MisComponentes;