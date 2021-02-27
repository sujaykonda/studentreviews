import React from 'react';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	value: 'Please Write Some Feedback for the Teacher'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
			Feedback For Teacher:
			<br />
          	<textarea value={this.state.value} onChange={this.handleChange} rows="10" cols="200" style={{width:"70%"}} />
        </label>
		<br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default EssayForm;