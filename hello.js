

const container = document.querySelector(".container");
let loading = false;

function createElement(id) {
  const para = document.createElement("p");
  para.innerText = `your item is ${id}`;
  return para;
}

function addItem(count, lastIndex = 0) {
    loading = false;
  for (let i = 0; i < count; i++) {
    container.append(createElement(lastIndex + i));
  }
  
}

function handleScroll() {
    console.log("loadin-before",loading)
  if (loading) return;

  if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight) {
    loading = true;
    if(loading){
        loader()
    }else{
        const loadingElement = document.querySelector("#hello")
        if(loadingElement){
            loadingElement.remove()
        }
    };
    setTimeout(() => {
      addItem(10, container.children.length);
    }, 2000);
    console.log("loadin-after",loading)
  }
}

function loader() {
  const loadingText = document.createElement("p");
  loadingText.id="hello"
  loadingText.innerText = "Loading...";
  document.body.append(loadingText);
}
addItem(10, container.children.length)
window.addEventListener("scroll", handleScroll);
