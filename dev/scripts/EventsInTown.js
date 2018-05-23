import React from 'react';
import axios from 'axios';

class EventsInTown extends React.Component{
    componentDidMount() {
        const theArtist = "Drake"
        axios({
            url: `https://rest.bandsintown.com/artists/${theArtist}/events/`,
            params: {
                app_id: `6e7ce2bb9f77b677bc181759630ddcf4`
            }
        })
        .then((res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default EventsInTown;