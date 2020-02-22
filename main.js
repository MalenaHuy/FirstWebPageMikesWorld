var imageSF = document.querySelectorAll ('.trip-image');
var backdrop = document. querySelector('.backdrop');
var modal = document. querySelector('.modal');

function openModal() {
    // back drop should chang its style and display
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none'; 
}


// use for loop
for (i = 0; i < imageSF.length; i++){
    imageSF[i].addEventListener('click', openModal);
}


// imageSF[0].addEventListener('click', openModal);
// imageSF[1].addEventListener('click', openModal);

// tell the function when to excuted 
// opendModal();
// open such as an event like click
//imageSF.onclick = openModal;
//backdrop.onclick = closeModal;

backdrop.addEventListener('click', closeModal);
