/*global chrome*/

import React, { useState, useEffect } from 'react';
import './App.css';
import StopWatch from './components/Stopwatch';
import Timer from './components/Timer';

const sites = [
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/',
  },
];

function App() {
  const [items, setItems] = useState(sites);
  const [time, setTime] = useState('none');

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        if (url.includes('youtube.com')) {
          setTime('on youtube');
        }
      });
  }, []);

  return (
    <div className='content'>
      <h1>Choose website</h1>
      {items.map((item) => {
        return (
          <div className='entry' key={item.name}>
            <p style={{ marginRight: '0.5rem' }}>{item.name}:</p>
            <p>{time}</p>
            {/* <StopWatch /> */}
          </div>
        );
      })}
      <button className='btn'>Add</button>
    </div>
  );
}

export default App;
