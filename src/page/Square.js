import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'asdfd',
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.setState({ value: 'X' })}
            >
                {this.state.value}
            </button>
        );
    }
}
export default Square;