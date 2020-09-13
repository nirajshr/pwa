window.onload = () => {
  'use strict';

  console.log("App starting...");
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}