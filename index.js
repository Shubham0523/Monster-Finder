import {monsters} from './monster.js'

// Looping in Monster Obj
for (let monsterDiv of monsters) {
    showMonster(monsterDiv)
    // console.log(monsterDiv)
}


document.querySelector('.search-field').addEventListener('keyup', 
function(e){
    const keyword = e.target.value.toLowerCase(); 
    const findMonster = document.querySelectorAll('.monster');
    let notFound = true 
    for(let monster of findMonster){
        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();
        if(name.includes(keyword) || email.includes(keyword)){
            notFound=false;
            monster.style.display ='block';
        }
        
        else {
            monster.style.display ='none';
        }
        
    }
    
    if (notFound) {
        document.querySelector('.not-found').style.display = 'block'
    }
    else {
        document.querySelector('.not-found').style.display = 'none'
    }
    // console.log(document.querySelector('.not-found'))

})


function showMonster (monsterDiv) {
    const monster = document.createElement('div')       //To Create A Div 
    monster.className='monster'       //div class = monster 
    
    const img  = document.createElement('img')      //To create img div
    img.src = `https://robohash.org/${monsterDiv.id}`   //getting dynamic img 
    img.alt = "monster name"    
    
    const name = document.createElement('p')        //To create paragraph 
    name.className = 'name'         // paragraph class = name
    name.innerText = `${monsterDiv.name}`   //name = value from monsters var
    
    const email = document.createElement('p')
    email.className = 'email'
    email.innerText = `${monsterDiv.email}`
    
    monster.append(img,name,email)
    document.querySelector('.monsters').append(monster)
}
showMonster()


function notFoundBox (){
    const notFound = document.createElement('div')  //to create a div
    notFound.className = 'not-found'        //class for div = not-found
    const h1 = document.createElement('h1') 
    h1.innerText = 'Not Found'
    notFound.append(h1)
    document.querySelector('.monsters').append(notFound)
}
notFoundBox()
