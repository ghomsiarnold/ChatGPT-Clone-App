// App.js
import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from'./assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from'./assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from  './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from './openai';
import { createRoot } from 'react-dom/client';

import { useState } from 'react';

function App() {
  const [input, setInput]= useState("");
  const [messages,setMessages] = useState([
    {
      text:"Salut, comment puis-je vous aider aujourd'hui ?",
      isBot: true,
    }
  ]);

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text: res, isBot: true }
    ]);
    setInput(""); 
  }

  return (
    <div className="App">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={gptLogo} alt="Logo" className="logo"/>
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn"/> Nouveau Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query"/> Qu'est-ce que la programmation ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query"/> Comment utiliser une API ?
            </button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg"/> Accueil
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg"/> Enregistré
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade to pro" className="listItemsImg"/> Mise à Niveau
          </div>     
        </div>
      </div>
      <div className='main'>
        <div className="chats">
          {messages.map((msg, index) => (
            <div key={index} className={msg.isBot?"chat bot":"chat"}>
             <img className='chatImg' src={msg.isBot?gptImgLogo:userIcon} alt="ChatGTP"/><p className="txt">{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Envoyer un message' value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="send"/>
            </button>
          </div>
          <p>Chat GPT peut produire des informations inexactes sur les personnes, les lieux ou les faits.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
