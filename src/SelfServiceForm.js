import React from 'react'
import ReactDOM from 'react-dom'

class SelfServiceForm extends React.Component {
  render() {
    return (
      <div>
        This is some <span>text generated in <b>Templates Form</b> application</span>
        <br />
        It will contain <b>SelfService Template</b> in the future

        <div>received Note Type: <b>{this.props.noteType}</b></div>
      </div>
    )
  }
}

export default SelfServiceForm
