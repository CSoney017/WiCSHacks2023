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

document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('time'); 
  checkButton.addEventListener('click', function() {
    alert("Are you ready to clock in?"); 
  }, false); 
}, false); 

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
