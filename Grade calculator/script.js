const marks = document.getElementsByClassName("subject");

const btn = document.getElementById("calculate");

const result = document.getElementById("result");

btn.addEventListener('click',function(){
    
    let total = 0;
    for(let i=0;i<marks.length;i++){
         total +=  (parseInt(marks.item(i).value));   
    }
    let percentage = (total)/(marks.length );
    console.log(percentage);
    result.style.color = "violet";
    if(percentage > 90){
        result.textContent = "Your percentage is "+ percentage+
        " Your grade is 'O'";
    }else if(percentage < 90 && percentage > 80){
        result.textContent = "Your percentage is "+ percentage+
        " Your grade is 'A+'";
    }else if(percentage < 80 && percentage > 70){
        result.textContent = "Your percentage is "+ percentage+ 
        " Your grade is 'A'";
    }else if(percentage < 70 && percentage > 60){
        result.textContent = "Your percentage is "+ percentage+
        " Your grade is 'B'";
    }else if(percentage < 60 && percentage > 45){
        result.textContent = "Your percentage is "+ percentage+
        " Your grade is 'C'";
    }else if(percentage < 45 && percentage > 35){
        result.textContent = "Your percentage is "+ percentage+
        " Your grade is 'D'";
    }else{
        result.textContent = "Your percentage is "+ percentage+
        " Your grade is 'E'";
    }
})