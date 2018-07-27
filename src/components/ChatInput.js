import 'babel-polyfill'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStore } from 'redux'

import { store } from '../store'

import * as actionTypes from '../constants/actionTypes'

class ChatInput extends Component {
onSubmit (e) {
  e.preventDefault()
  const msg = this.refs.txtMessage.value
  this.props.sendMessage(msg)
  this.refs.txtMessage.value = ""
}
  render() {
    return (
        <div id="chatinput" className="blue">
          <form className="container" onSubmit={this.onSubmit.bind(this)}>
            <div className="row">
              <div className="input-field col s10">
                <i className="prefix material-icons">chat</i>
                <input ref="txtMessage" type="text" placeholder="Type your message" />
                <span className="chip left">
                  <img src="//robohash.org/user1?set=set2&bgset=bg2&size=70x70" />
                  <span>You: { this.props.userAddress }</span>
                </span>
              </div>
              <div className="input-field col s2">
                <button type="submit" className="waves-effect waves-light btn-floating btn-large blue">
                  <i className="material-icons">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
    )
  }
}


export default ChatInput
