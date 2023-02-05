
'use strict';


/*document.getElementById("summary").onclick = async () => {
    document.body.append("Attempting to show summary");
    //savedtext.append("refresh attempted");
    document.body.append(document.createElement('br'));
    chrome.storage.local.get(['key'], function(result) {
    alert(result.key);
    for(var ii = 0; ii < result.key.length; ii++){
        //document.body.append('New highlight:    "');
        document.body.append(result.key[ii]);
        document.body.append('"');
        alert(result.key[ii]);
    }
    
        
        document.body.append(document.createElement('br'));
        });
};*/


const days  = Array.from(document.querySelectorAll(".day"));
    const notes = Array.from(document.querySelectorAll("textarea"));
    
    document.addEventListener("keydown", e => {
      if (e.metaKey === true && e.key === "s") {
        e.preventDefault();
      }
    });
    
    function hightlightCurrentDay() {
      if (document.visibilityState != 'visible') { return; }
    
      var today = new Date();
    
      days.forEach((day, index) => {
        unhighlightDay(day);
        if (index === today.getDay() - 1) {
          highlightDay(day, today.getDate() + "." + (today.getMonth() + 1) + ".");
        }
      });
    }
    
    function highlightDay(day, dateString) {
      day.setAttribute("aria-current", "date");
    
      let span = document.createElement("span");
      span.innerHTML = dateString;
    
      day.querySelector("textarea").setAttribute("autofocus", true);
      day.querySelector("textarea").focus();
      day.querySelector(".heading").append(span);
    }
    
    function unhighlightDay(day) {
      day.removeAttribute("aria-current");
      day.querySelector("textarea").removeAttribute("autofocus");
      let existingSpan = day.querySelector(".heading > span");
      if (existingSpan != null) { existingSpan.remove() }
    }
    
    hightlightCurrentDay();
    document.addEventListener('visibilitychange', hightlightCurrentDay);
    
    // handle note-taking
    notes.forEach(note => {
      const id = note.id;
    
      // get initial html
      note.value = localStorage.getItem(id);
    
      // save changes
      note.addEventListener("input", e => {
        localStorage.setItem(id, note.value);
      });
    });



    


    /*require('chart.js');
    new Chart("productivityLineChart", {
    type: "line",
    data: {},
    options: {}
  });*/

  // Load the Visualization API and the corechart package.
  

/*PythonShell.runString(
            'from tkinter import *;Tk().printData()',
            null,
            function (err){
                if(err) throw err;
                console.log('finished');
            }
        );*/

/* var sys = require('util'),
            spawn = require('child_process').spawn,
            readCSV = spawn('python', ['main.py']);

        var message = "error"

        readCSV.stdout.on('from tkinter import *;Tk().printData()', function(data){
            message = data.toString();
        });

        for(var ii = 0; ii < result.key.length; ii++){
            document.body.append(message);
        }*/

// import {PythonShell} from 'python-shell';

// document.getElementById("summary").onclick = async () => {
//     //document.body.append("refresh attempted" + document.createElement('br'));
//     //savedtext.append("refresh attempted");
//         document.body.append(document.createElement('br'));
//         //chrome.storage.local.get(['key'], function(result) {
//         //for(var ii = 0; ii < result.key.length; ii++){
//             //document.body.append('New highlight:    "');
//             //document.body.append(result.key[ii]);
//             //document.body.append('"');
//             //alert('ooooooooooo');
//         //}

//         PythonShell.runString(
//             'from tkinter import *;Tk().mainloop()',
//             null,
//             function (err){
//                 if(err) throw err;
//                 console.log('finished');
//             }
//         );
        
//         document.body.append(document.createElement('br'));
    
// }




/*slider.oninput = function() {
    score = this.value;
    let date = new Date();
    //list[count]=result;
    list[0] = date.getFullYear()+'-'+date.getDate()+',wellness,'+0+','+0+','+score+','+'';
    //list[count + 1] = tab.getUrl;
    
    chrome.storage.local.set({key: list}, function() {
    
        //document.body.append(", precount   " + count);//printf, 0 or previous num
        chrome.storage.local.get(["key"], function(total) {
           list = total.key;
           //alert('aaaaaaaaa');
           //document.body.append(", check:" + list[count] + ",");
        });
    });
  
    list[0] = 
    
    chrome.storage.local.set({index: count + 3}, function() {
      //document.body.append('Index is set to ' + count);
      document.body.append("stored");
    });
  }*/
