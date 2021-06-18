var guests=[];

function submit() {
    guests.push(document.getElementById("name").value)

    document.getElementById("span").innerHTML=guests;
    
}

function show() {
    var i= guests.join("<br>");
    document.getElementById("Name1").innerHTML=i;
}





function sort() {
    
    
   guests.sort();
   var sorted= guests.join("<br>");
   console.log(sorted);
    document.getElementById("name2").innerHTML=sorted.toString();
}


function search() {
    var s=document.getElementById("searchinfo").value;
    var found=0;
    var j="0";

    for(j=0;j<guests.length;j++) {

        if(s==guests[j]) {
            found=found+1;

        }


    }
    document.getElementById("searchLbl").innerHTML="name found" + found + "time/s";
}

      





