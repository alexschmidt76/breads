const React = require('react');
const Default = require('./layouts/default');

function Error404() {
    return (
        <Default title='Error 404'>
            <h1>ERROR 404</h1>
            <h2>Page not found!</h2>
        </Default>
    );
}

module.exports = Error404;