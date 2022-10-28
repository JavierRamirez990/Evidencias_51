function verImagen() {
    let num  = parseInt(document.getElementById("num").value);
    let imagen = document.getElementById('img');

    switch (num) {
        case 1:
            imagen.src = "https://i.etsystatic.com/12411233/r/il/d3856b/2700325815/il_570xN.2700325815_jehh.jpg";
            break;
            
        case 2:
            imagen.src = "https://i.etsystatic.com/12862781/r/il/c2a735/2712863669/il_570xN.2712863669_bauu.jpg";
            break;
        case 3:
            imagen.src = "https://i.etsystatic.com/12411233/r/il/ac20be/2711995365/il_340x270.2711995365_kmra.jpg";
            break;
        case 4:
            imagen.src = "https://m.media-amazon.com/images/I/414KXBUxYrL.jpg";
            break;
        case 5:
            imagen.src = "https://i.etsystatic.com/12862781/r/il/269f8e/2720691460/il_340x270.2720691460_9sq6.jpg";
            break;
        default:
    }
}