'use strict';

class HelloWorld extends React.Component { 
        constructor(props) { super(props); 
        this.state = { personName:'World' }; 
        11. 12. } } 
    render() { return React.createElement('h1', null, 'Hello, ' + this.state.personName); 
}
