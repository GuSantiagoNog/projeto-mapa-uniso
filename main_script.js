    // Schuab - Leaflet(Inicio)
    // Inicia uma const map que cria um objeto usando L da biblioteca leaflet. setView está determinando as coordernadas e o zoom inicial(18)
    const map = L.map('map', {
        center: [0,0],
        zoom: 5,
        minZoom: 4,
        maxZoom: 7,
    })

    const imageUrl = 'assets/images/mapa.svg';
    const imageBounds = [[-50, -100], [50,100]];

    L.imageOverlay(imageUrl, imageBounds).addTo(map);

    // southWest e northWest serão usadas para bloquar o movimento do usuário para além dessas coordenadas, para que ele não possa explorar qualquer canto do mundo.
    const southWest = L.latLng(-50, -100); 
    const northEast = L.latLng(50, 100);

    const bounds = L.latLngBounds(southWest, northEast);

    map.setMaxBounds(bounds);

    // markers
    const mastericon = L.icon({
        iconUrl: 'assets/images/mastericon.png',
        iconSize: [30, 30], 
    });

    const markerblocoa = L.marker([1,17], {
        title: 'Bloco A',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco A </h1> <p><a href="assets/links/blocoa.html">Saiba Mais</a></p>')

    const markerblocob = L.marker([2,16], {
        title: 'Bloco B',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco B </h1> <p><a href="assets/links/blocob.html">Saiba Mais</a></p>')

    const markerblococ = L.marker([3,15], {
        title: 'Bloco C',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco C </h1> <p><a href="assets/links/blococ.html">Saiba Mais</a></p>')

    const markerblocod = L.marker([4,14], {
        title: 'Bloco D',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco D </h1> <p><a href="assets/links/blocod.html">Saiba Mais</a></p>')

    const markerblocoe = L.marker([5,13], {
        title: 'Bloco E',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco E </h1> <p><a href="assets/links/blocoe.html">Saiba Mais</a></p>')

    const markerblocof = L.marker([6,12], {
        title: 'Bloco F',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bloco F </h1> <p><a href="assets/links/blocof.html">Saiba Mais</a></p>')

    const markerapoio1 = L.marker([7,11], {
        title: 'Apoio 1',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Apoio 1 </h1> <p><a href="assets/links/apoio1.html">Saiba Mais</a></p>')

    const markerapoio2 = L.marker([8,10], {
        title: 'Apoio 2',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Apoio 2 </h1> <p><a href="assets/links/apoio2.html">Saiba Mais</a></p>')

    const markerapoio3 = L.marker([9,9], {
        title: 'Apoio 3',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Apoio 3 </h1> <p><a href="assets/links/apoio3.html">Saiba Mais</a></p>')

    const markerapoio4 = L.marker([10,8], {
        title: 'Apoio 4',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Apoio 4 </h1> <p><a href="assets/links/apoio4.html">Saiba Mais</a></p>')

    const markerbiblioteca = L.marker([11,7], {
        title: 'Biblioteca',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Bibllioteca </h1> <p><a href="assets/links/biblioteca.html">Saiba Mais</a></p>')

    const markersaa = L.marker([12,6], {
        title: 'SAA',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> SAA </h1> <p><a href="assets/links/saa.html">Saiba Mais</a></p>')

    const markercasasdeapoio = L.marker([13,5], {
        title: 'Casas de Apoio',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Casas de Apoio </h1> <p><a href="assets/links/casasdeapoio.html">Saiba Mais</a></p>')

    const markerestacionamento = L.marker([14,4], {
        title: 'Estacionamento',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Estacionamentos </h1> <p><a href="assets/links/estacionamento.html">Saiba Mais</a></p>')

    const markerlapec = L.marker([15,3], {
        title: 'LAPEC',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> LAPEC </h1> <p><a href="assets/links/lapec.html">Saiba Mais</a></p>')

    const markerquadras = L.marker([16,2], {
        title: 'Quadras',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Quadras </h1> <p><a href="assets/links/quadras.html">Saiba Mais</a></p>')

    const markerveterinaria = L.marker([17,1], {
        title: 'Veterinária',
        icon: mastericon
    }).addTo(map).bindPopup('<h1 style="font-size: 1rem;"> Veterinária </h1> <p><a href="assets/links/veterinaria.html">Saiba Mais</a></p>')
    // Schuab - Leaflet(Fim)
