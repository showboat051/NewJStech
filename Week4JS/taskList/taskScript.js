// ******* Cached Resources *********
const newList = document.getElementById('TaskName');
// const listDisplay = document.getElementById('ListDisplay');


// ******* Event Listeners *********
newList.addEventListener("click", function () {
    console.log('it works');
    const listName = document.getElementById("ListName").value;
  
    const showList = document.getElementById('ListDisplay');
    showList.innerText = "The name of this list is " + listName;
    // makeNewList.innerText = showList;
})




// ******* FUNCTIONS *********
function buttonClick(e) {
    e.preventDefault();
    document.getElementById('testBtn');
    console.log('it works');
    addToList();
}