import React from 'React';

//input
//非受控组件  
class Demo extends React.Component {

    onTextChange = (event) => {
        console.log(event.target.value);
    }

    render() {
        const MyInput = ({ onChange }) => (
            <input onChange={onChange} />
        );
        return (
            <MyInput onChange={this.onTextChange} />
        );
    }
}

//受控组件-正常应该这样
// class Demo extends React.Component {
//     state = {
//         text: '',
//     }

//     onTextChange = (event) => {
//         this.setState({ text: event.target.value });
//     }

//     render() {
//         const MyInput = ({ value = '', onChange }) => (
//             <input value={value} onChange={onChange} />
//         );
//         return (
//             <MyInput value={this.state.text} onChange={this.onTextChange} />
//         );
//     }
// }
export default Demo;