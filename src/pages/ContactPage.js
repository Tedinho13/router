import React, { Component } from 'react';
import '../styles/ContactPage.css'
// import {Prompt} from 'react-router-dom'


class ContactPage extends Component {
    state = {
        value: ""
    }

    handleValue = e => {
        this.setState({
            value: e.target.value
    })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            value: ""
        })
    }

    render() {
    return ( 
        <div className="contact">
            <form onSubmit={this.handleSubmit}>
                <h3>Napisz do nas</h3>
                <textarea value={this.state.value} onChange={this.handleValue} placeholder="Wpisz wiadomość"></textarea>
                <button>Wyślij</button>
            </form>
            {/* <Prompt
            when={true}
            message="Masz niewypełniony formularz"
            /> */}
        </div>
     );
    }
}
 
export default ContactPage;