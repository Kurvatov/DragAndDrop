const draggable = document.querySelectorAll('.drag');
var empties = document.querySelectorAll('.empty');

draggable.forEach(fill => {
    fill.addEventListener('dragstart', () => {
        fill.classList.add('dragging');
    });
    fill.addEventListener('dragend', () => {
        fill.classList.remove('dragging');
    });
    fill.setAttribute('draggable', true);
});

empties.forEach(empty => {
    empty.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    empty.addEventListener('drop', () => {
        var currDrag = document.querySelector('.dragging');
        empty.appendChild(currDrag);

        var children = empty.childNodes; //gets the child nodes of the parent div where the draggable div was dropped
        var childArray = []; 

        children.forEach(child =>{
            if(child.nodeType == 1 && child.classList != 'title'){  //returns an Element node like <p> or <div> and ignores the title of the div
                childArray.push(child);
            }
        });
        childArray.sort((a, b) =>{
            if(a.innerHTML == b.innerHTML){ //if the compared elements are equa, the should remain in the same position
                return 0; 
            }
            if(a.innerHTML > b.innerHTML){ //If node 'a' is bigger than node 'b', it must put the node 'a' after the node 'b'
            }
            else{ 
                return -1;
            }
        });
        childArray.forEach(child => {
            empty.appendChild(child); //Append sorted children to parent div
        });
    });
})

document.querySelector('#newBreakoutRoom').addEventListener('click',() =>{
    var emptyDiv = document.createElement('div');
    emptyDiv.classList = 'empty';
    var titleDiv = document.createElement('div');
    titleDiv.classList = 'title';
    titleDiv.innerHTML = 'Breakout Room ' + (empties.length + 1);
    emptyDiv.appendChild(titleDiv);
    var emptyParent = document.querySelector('.emptyContainer');
    emptyParent.appendChild(emptyDiv);
    empties = document.querySelectorAll('.empty');

    emptyDiv.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    emptyDiv.addEventListener('drop', () => {
        var currDrag = document.querySelector('.dragging');
        emptyDiv.appendChild(currDrag);

        var children = emptyDiv.childNodes; //gets the child nodes of the parent div where the draggable div was dropped
        var childArray = []; 

        children.forEach(child =>{
            if(child.nodeType == 1 && child.classList != 'title'){  //returns an Element node like <p> or <div> and ignores the title of the div
                childArray.push(child);
            }
        });
        childArray.sort((a, b) =>{
            if(a.innerHTML == b.innerHTML){ //if the compared elements are equa, the should remain in the same position
                return 0; 
            }
            if(a.innerHTML > b.innerHTML){ //If node 'a' is bigger than node 'b', it must put the node 'a' after the node 'b'
            }
            else{ 
                return -1;
            }
        });
        childArray.forEach(child => {
            emptyDiv.appendChild(child); //Append sorted children to parent div
        });
    });

});