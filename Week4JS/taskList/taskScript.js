// ******* Cached Resources *********
const newList = document.getElementById('TaskBtn');
// const listDisplay = document.getElementById('ListDisplay');


// ******* Event Listeners *********
newList.addEventListener("click", function () {
    console.log('it works');
    const listName = document.getElementById("ListName").value;
  console.log(listName);
    const showList = document.getElementById('ListDisplay');
    showList.innerText = "The name of this list is " + listName;
    // makeNewList.innerText = showList;foigp49ttit7y3y54y/yy88ty58g*9g95g5*9gh/9hg8y/ghyg4-98458ygy8*y8
})




// ******* FUNCTIONS *********
function buttonClick(e) {
    e.preventDefault();
    document.getElementById('testBtn');
    console.log('it works');
    addToList();
}