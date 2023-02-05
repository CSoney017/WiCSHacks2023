// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import data from "data.json"

'use strict';

var list = new Array();
var count;
var index;

/*function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  window.close();
}*/


document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('time'); 
  checkButton.addEventListener('click', function() {
    alert("Are you ready to clock in?");
  }, false); 
}, false); 

//meant to create a count down timer 

/*var countDownDate = new Date("Feb 4, 2023 17:42").getTime(); 
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

var slider = document.getElementById("well_score");
var score = 0;
//var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

*/
//code not from the Chromium Authors
document.getElementById("save-btn").onclick = async () => {
  
  let result = data;
  //list[count]=result;
  list[0] = result;
  //list[count + 1] = tab.getUrl;
  alert(result);
  
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


/*<label id="Wellness-Score">Wellness</label>
    <div class="slidecontainer">
      <input type="range" min="1" max="10" value="5" class="slider" id="well_score">
    </div>
    <br><br></br>*/