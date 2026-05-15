let count = 0;
function increaseCount(){
    count++;
    displayCount()
    checkCountValue()
}

function displayCount(){
    document.getElementById("countDisplay").innerText=count
}

function checkCountValue(){
    if(count === 10){
        alert("your instagram post gained 10 follwers ! congratulations")
    }else if( count === 20 ){
        alert("your instagram post gained 20 followers! keep it up")
        count = 0
    }
}