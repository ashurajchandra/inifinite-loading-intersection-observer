const target = document.querySelector('#target')
const container = document.querySelector(".container");

console.log("container-children", container.children)

function createItem(id){
    const para = document.createElement('p');
    para.innerText = `Item number ${id}`;
    return para
}


function addItem (count, lastIndex = 0){
    console.log("adding next items",lastIndex)
   for(let i =0; i<count; i++){
    container.append(createItem(lastIndex+i))
   }
}



// creating instance of intersection observer

const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        console.log("container-children", container.children)
        addItem(10, container.children.length)
    }
})


//observing on given target......whenever this target will intersect viewport the callback function will get triggered 
observer.observe(target)












