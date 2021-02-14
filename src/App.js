import { ChatEngine } from 'react-chat-engine';


import './App.css'
import React from 'react'
import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm';
const projectID = '52d2e0ee-3e18-407b-bf4a-0622b74610e6';
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
            
       
    );
}

export default App
