/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import '../styles/output.css';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid';
import { getCookie } from 'typescript-cookie';
import SideBar from '../components/sidebar';

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <br></br>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    // fetch events here
    if (getCookie('group') === 'admin') {
      fetch('http://localhost:3000/api/events')
        .then((response) => response.json())
        .then((events) => {
          this.setState({
            events,
          });
        })
        .catch((error) => console.log(error));
    } else {
      fetch(`http://localhost:3000/api/events/group/${getCookie('group')}`)
        .then((response) => response.json())
        .then((events) => {
          this.setState({
            events,
          });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    return (
      <>
        <div className="flex w-full h-full bg-[#f3f3f3]">
          <div className="flex w-full h-full">
            <div className="w-40 h-full bg-[#f3f3f3]">
              <SideBar />
            </div>

            <div className="w-full bg-gray-200 p-4">
              <div className=" w-full">
                <FullCalendar
                  plugins={[timeGridPlugin]}
                  nowIndicator={true}
                  initialView="timeGridWeek"
                  events={this.state.events}
                  eventContent={renderEventContent}
                />
                ;
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
