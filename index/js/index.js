// method to read the file from the server 
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var file_name = "../index/Surah/surah_";
var counter = 1;
var surah;
//usage:
readTextFile("../index/Surah/surah_1.json",function(text){    
    surah = JSON.parse(text);

    document.getElementById('surah_id').innerText = surah.data[0].name;
    document.getElementById('ayat_id').innerText = surah.data[0].count;
    var ayats = surah.data[0].verse;
    var str = "";
    let i=0; 
    for (const key in ayats) {
            const element = ayats[key];
           // console.log(element);
            str+= "(" + i++ + ") " + element+ "\n";
    }
    document.getElementById('ayats').innerText = str;    
}
);

function next_surah() 
{
    if(counter==114)
        return;

    file_name+=  ++counter + ".json";

    readTextFile(file_name,function(text){    
        surah = JSON.parse(text);
        // console.log(surah);
        console.log(surah.data[0].name);
        console.log(surah.data[0].count);
        console.log(surah.data[0].verse);
    
        document.getElementById('surah_id').innerText = surah.data[0].name;
        document.getElementById('ayat_id').innerText = surah.data[0].count;
        var ayats = surah.data[0].verse;
        var str = "";
        let i=0; 
        for (const key in ayats) {
                const element = ayats[key];
                console.log(element);
                str+= "(" + i++ + ") " + element+ "\n";
        }
        document.getElementById('ayats').innerText = str;    
    
    }); 
    file_name = "../index/Surah/surah_";
}
function prev_surah() 
{
    if(counter>1)
    {
        file_name+=  -- counter + ".json";
        readTextFile(file_name,function(text){    
        surah = JSON.parse(text);
        // console.log(surah);
        console.log(surah.data[0].name);
        console.log(surah.data[0].count);
        console.log(surah.data[0].verse);
    
        document.getElementById('surah_id').innerText = surah.data[0].name;
        document.getElementById('ayat_id').innerText = surah.data[0].count;
        var ayats = surah.data[0].verse;
        var str = "";
        let i=0; 
        for (const key in ayats) {
                const element = ayats[key];
              //  console.log(element);
                str+= "(" + i++ + ") " + element+ "\n";
        }
        document.getElementById('ayats').innerText = str;    
    
    }); 
    file_name = "../index/Surah/surah_";
    }    
}

let size_font = 200;
// method to change the size 

function increase_font()
{
    if(size_font==300)
        return;
    document.getElementById('ayats').style.fontSize = size_font +"%"   
    size_font+=25;
}

// method to change the size 
function decrease_font()
{
    if(size_font==100)
        return;
    document.getElementById('ayats').style.fontSize = size_font +"%"   
    size_font-=25;
}

