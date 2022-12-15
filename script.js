
function toggleDrkTeam(){
    document.querySelector('body').classList.toggle('dark-theme')
}



// let count = 0;

// document.getElementById('decreaseBtn').onclick = function(){
//     count -=1;
//     document.getElementById('countEl').innerHTML = count
// }

// document.getElementById('resetBtn').onclick = function(){
//     count =0;
//     document.getElementById('countEl').innerHTML = count
// }

// document.getElementById('increaseBtn').onclick = function(){
//     count ++;
//     document.getElementById('countEl').innerHTML = count
// }


let count = 0;

function increaseBtn() {
    count += 1;
    document.getElementById('countEl').innerHTML = count
    

    if( count % 10 === 0){
        alert(`The count is now ${count} congrats you did it bro am so proud of you that you could that so easiily`)
    }
   

}

function decreaseBtn() {
    count -= 1;
    document.getElementById('countEl').innerHTML = count
}

function resetBtn() {
    count = 0;
    document.getElementById('countEl').innerHTML = count
}


let headingEl = document.querySelector('#helo')

function clickMe() {
    // const headingEl = document.querySelector('#helo')
    if (headingEl.textContent === 'Hello There' ){
        headingEl.textContent = (' Ready To Play? 😀')
    }else {
        headingEl.textContent = (' Hello There')
    }
    
}


document.querySelector('#clickMeBtn').onclick = headingEl;