document.addEventListener("DOMContentLoaded", function(){
    const list = document.querySelector('.movie-listing ul');
    const form = document.forms;

    // deleting movies
    list.addEventListener('click', (e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });
    // adding movies
    const addForm = form['input-place'];
    addForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        // creating elements
        const li = document.createElement('li');
        const value = addForm.querySelector('input[type = "text"]').value;
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // adding text content
        movieName.textContent = value;
        deleteBtn.textContent = 'delete';

        // adding classes
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        // appending to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

        // clear input
        addForm.querySelector('input[type = "text"]').value = '';
    })
});