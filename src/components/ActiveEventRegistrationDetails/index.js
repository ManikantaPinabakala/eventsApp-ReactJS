import {Component} from 'react'

import './index.css'

const eventStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  alreadyRegistered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderDefaultView = () => (
    <p className="click-instruction">
      Click on an event, to view its registration details
    </p>
  )

  renderYetToRegisterView = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="yet-to-register-button">
        Register Here
      </button>
    </div>
  )

  renderAlreadyRegisteredView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegistrationsClosedView = () => (
    <div className="registrations-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  renderActiveEventDetails = () => {
    const {activeRegistrationStatus} = this.props

    switch (activeRegistrationStatus) {
      case eventStatus.yetToRegister:
        return this.renderYetToRegisterView()
      case eventStatus.alreadyRegistered:
        return this.renderAlreadyRegisteredView()
      case eventStatus.registrationsClosed:
        return this.renderRegistrationsClosedView()
      default:
        return this.renderDefaultView()
    }
  }

  render() {
    return (
      <div className="reg-details-container">
        {this.renderActiveEventDetails()}
      </div>
    )
  }
}

export default ActiveEventRegistrationDetails
