document.getElementById("summary").onclick = async () => {
    document.body.append("Attempting to show summary" + document.createElement('br'));
    //savedtext.append("refresh attempted");
        document.body.append(document.createElement('br'));
        chrome.storage.local.get(['key'], function(result) {
        for(var ii = 0; ii < result.key.length; ii++){
            //document.body.append('New highlight:    "');
            document.body.append(result.key[ii]);
            document.body.append('"');
            alert('ooooooooooo');
        }
    
        
        document.body.append(document.createElement('br'));
        });
};


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