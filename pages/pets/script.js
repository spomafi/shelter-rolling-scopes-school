const links = document.querySelectorAll('.ats, .cont');

const onClick = event => {
  links.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
};

links.forEach(link => link.addEventListener('click', onClick));