import {Component} from 'react'

import './index.css'

class EventItem extends Component {
  render() {
    const {eventDetails, setActiveEventId, isActive} = this.props
    const {id, imageUrl, name, location} = eventDetails

    const imageButtonClassName = isActive
      ? 'image-button active'
      : 'image-button'

    const onClickEvent = () => {
      setActiveEventId(id)
    }

    return (
      <li className="event-item">
        <button
          type="button"
          className={imageButtonClassName}
          onClick={onClickEvent}
        >
          <img src={imageUrl} className="event-image" alt="event" />
        </button>
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </li>
    )
  }
}

export default EventItem
