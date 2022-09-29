const React = require('react');
const Default = require('./layouts/Default');

function Show({bread}) {
    return (
        <Default title={bread.name}>
            <h3>{bread.name}</h3>
            <p>
                and it
                { 
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
        </Default>
    )
}

module.exports = Show;