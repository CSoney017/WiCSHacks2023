// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var list = new Array();
var count;
var index;

function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  window.close();
}

let wellness = document.getElementById('Wellness-Score');
wellness.onclick = function(element){
    wellness.style.background = '#FFFF00'
}

function updateTime() {

  // get all parts of the current time
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // splice them together into a character string named "currentTime"
  var currentTime = hours + ':' + minutes + ':' + seconds;

  // get the clock div
  var myClock = document.getElementById('clock');

  // write the currentTime string to the clock div
  myClock.innerHTML = currentTime;
  
}

function toggleClock() {
  // get the clock
  var myClock = document.getElementById('clock');

  // get the current value of the clock's display property
  var displaySetting = myClock.style.display;

  // also get the clock button, so we can change what it says
  var clockButton = document.getElementById('clockButton');

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'block') {
    // clock is visible. hide it
    myClock.style.display = 'none';
    // change button text
    clockButton.innerHTML = 'Show clock';
    display: block;
  }
  else {
    // clock is hidden. show it
    myClock.style.display = 'block';
    // change button text
    clockButton.innerHTML = 'Hide clock';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('time'); 
  checkButton.addEventListener('click', function() {
    alert("Are you ready to clock in?");
  }, false); 
}, false); 

var counter = 0; 
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');        
    const radioButtons = document.querySelectorAll('input[name="size"]');
    btn.addEventListener("click", () => {
        let selectedSize;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedSize = radioButton.value;
                counter = 1; 
                break;
            }
        }
        // show the output:
        output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
      });

/*
//meant to create a count down timer 
var countDownDate = new Date("Feb 4, 2023 17:42").getTime(); 
var x = setInterval(function() {
  var now = new Date().getTime(); 
  var distance = countDownDate - now; 
  var days = Math.floor(distance / (1000*60*60*24)); 
  var hours = Math.floor((distance % (1000*60*60 * 24)) / (1000 * 60 * 60)); 
  var minutes = Math.floor((distance % (1000*60*60))/ (1000*60)); 
  
  document.getElementById("demo").innerHTML = days + "d" + hours + "h" + minutes + "m"; 
  if (distance < 0 ) {
    clearInterval(x); 
    document.getElementById("demo").innerHTML = "EXPIRED"; 

  }
}, 1000); 
*/

var slider = document.getElementById("well_score");
var score = 0;
//var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  score = this.value;
  let date = new Date();
  //list[count]=result;
  list[0] = date.getFullYear()+'-'+date.getDate()+',wellness,'+str(0)+','+str(0)+','+str(score)+','+'';
  //list[count + 1] = tab.getUrl;
  
  chrome.storage.local.set({key: list}, function() {
  
      //document.body.append(", precount   " + count);//printf, 0 or previous num
      chrome.storage.local.get(["key"], function(total) {
         list = total.key;
         //alert('aaaaaaaaa');
         //document.body.append(", check:" + list[count] + ",");
      });
  });
  
  chrome.storage.local.set({index: count + 3}, function() {
    //document.body.append('Index is set to ' + count);
    document.body.append("stored");
  });
}

//code not from the Chromium Authors
document.getElementById("save-btn").onclick = async () => {
  /*const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  let result;
  try {
    [{result}] = await chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: () => getSelection().toString(),
    });
  } 
  catch (e) {
    return; 
   }

   chrome.storage.local.get(['index'], function(num) {
     count = num.index;
  });
  
  if(Number.isInteger(count) == false){
        count = 0;
  }
  else{
     chrome.storage.local.get({key: []}, function(total) {
        list = total.key;
        count = list.length;
        //document.body.append("test");
      });
  }
       //document.body.append(", list length:" + count);//printf, 0 or previous num   
       //document.body.append(", result:   " + result); //printf, result
  */
  let result = "test result"
  //list[count]=result;
  list[0] = result;
  //list[count + 1] = tab.getUrl;
  
  chrome.storage.local.set({key: list}, function() {
  
      //document.body.append(", precount   " + count);//printf, 0 or previous num
      chrome.storage.local.get(["key"], function(total) {
         list = total.key;
         //alert('aaaaaaaaa');
         //document.body.append(", check:" + list[count] + ",");
      });
  });
  
  chrome.storage.local.set({index: count + 3}, function() {
    document.body.append("stored");
  });
    document.body.append(document.createElement('br'));

};
