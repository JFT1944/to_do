const form = document.querySelector('form')
const list = document.querySelector('#list')
let count = []

//displaying local storage

// window.addEventListener('load', ()=>{
//     //console.log(localStorage.getItem('cloudList'));
let oldLs = JSON.parse(localStorage.getItem('cloud'))
    console.log(oldLs)
 for(let ls of oldLs){
    let oli = document.createElement('li')
   console.log(ls)
oli.innerHTML = ls
list.append(oli)
//     // console.log(oldls)
//     // list.append(oldls)
     }

// Adding New To-Do
form.addEventListener('submit', (e)=>{
e.preventDefault()

//console.log(document.querySelector('#list-input').value)
const listInput = document.querySelector('#list-input')
const newLi = document.createElement('li')
const fButton = document.createElement('button')
const newButton = document.createElement('button')
newLi.innerText = listInput.value;
fButton.innerText = "Finished"
newButton.innerText = 'remove'
newLi.append(fButton)
newLi.append(newButton);
count.push(newLi.innerHTML)
stringie = JSON.stringify(count)
console.log(count + " :count")


console.log(stringie)
localStorage.setItem('cloud', `${stringie}`)
////console.log(st + ' This is St')
// localStorage.setItem('savedItems', st)
////console.log(localStorage)
list.append(newLi);
form.reset()
})

// Removing or Striking To-Do:
list.addEventListener('click', (e)=>{
    if(e.target.innerText === 'Finished'){
        e.target.parentElement.setAttribute('class', 'strike')
    } else if(e.target.innerText === "remove"){
    e.target.parentElement.remove()
    
    } else{

    }
})




// function addToLocalStorage(){
// let cloudList = document.querySelector('#list')
// //console.log(cloudList + ' :This is clist')
// let scloudlist = JSON.stringify(cloudList.innerHTML)
// localStorage.setItem('cloudList', `${scloudlist}`)
// //console.log(localStorage)

// }


document.getElementById('cls').addEventListener('click', ()=>{
    localStorage.clear()
})


// //to add things to local storage
// / setInterval(addToLocalStorage, 30000)

// //console.log(localStorage)

// console.log(localStorage + 'lasr cdl')