import {PythonShell} from 'python-shell';

document.getElementById("summary").onclick = async () => {
    //document.body.append("refresh attempted" + document.createElement('br'));
    //savedtext.append("refresh attempted");
        document.body.append(document.createElement('br'));
        //chrome.storage.local.get(['key'], function(result) {
        //for(var ii = 0; ii < result.key.length; ii++){
            //document.body.append('New highlight:    "');
            //document.body.append(result.key[ii]);
            //document.body.append('"');
            //alert('ooooooooooo');
        //}

        PythonShell.runString(
            'from tkinter import *;Tk().mainloop()',
            null,
            function (err){
                if(err) throw err;
                console.log('finished');
            }
        );
        
        document.body.append(document.createElement('br'));
    
}