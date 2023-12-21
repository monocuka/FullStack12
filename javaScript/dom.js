const btnCompra = document.getElementById("btnNoPress");
btnCompra.textContent = 'agregar';

btnCompra.addEventListener('click', () => {
    console.error('compra compra!!');
});

btnCompra.addEventListener('contextmenu', () => {
    console.warn('click derecho');
});

btnCompra.addEventListener('mouseover', () => {
    console.info('Pusiste el Mouse encima del boton');
})

const  photoItaliana = document.getElementById('italiana-photo');

photoItaliana.addEventListener('mouseenter', () => {
    document.getElementById('italiana-photo').style.display = 'none';
});

photoItaliana.addEventListener('mouseleave', () => {
    document.getElementById('italiana-photo').style.display = 'block';
});
//manipulacion del DOM. 
