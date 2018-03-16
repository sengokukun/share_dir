let open = document.querySelector('.open');
let close = document.querySelector('.close');
let modal = document.querySelector('dialog');

open.addEventListener('click', () => modal.showModal());
close.addEventListener('click', () => modal.close());
document.addEventListener('click', ({
  target
}) => target === modal && modal.close());
