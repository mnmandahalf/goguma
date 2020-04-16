import React from 'react';
import './App.css';
import { PCHome } from './PCHome'
import { SPHome } from './SPHome'

const isPC = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || (ua.indexOf('android') > 0 && ua.indexOf('mobile') > 0)) {
      return false
  } else if (ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0) {
      // iOS12 まで
      return true
  } else if (ua.indexOf('ipad') > -1 || (ua.indexOf('macintosh') > -1 && 'ontouchend' in document)) {
      // iOS13 以降
      return true
  } else {
      return true
  }
}

const App = () => isPC() ? <PCHome /> : <SPHome />

export default App;
