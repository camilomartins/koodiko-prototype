var config = {
    style: 'mapbox://styles/miloono/club3xujn00bf01r5du7i8cvl',
    accessToken: 'pk.eyJ1IjoibWlsb29ubyIsImEiOiJjbHQ2MzN5aTkwNXh4MmtxdW1oajZ2cHU5In0.fx3hDoyTO25rLdezTC8UEQ',
    showMarkers: true,
    markerColor: 'black',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/aufbruch.jpeg',
            description: '<section data-sheetdb-url="https://sheetdb.io/api/v1/zv2d7gspuje69" data-sheetdb-query-string="id"><h1>{{title}}</h1><p>{{description}}</p></section>',
            location: {
                center: [7.12800, 51.24761],
                zoom: 19.31,
                pitch: 32.01,
                bearing: -43.31,
                speed: 0.4,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'baeume-pitfm-18je5l',
                    opacity: 0,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'baeume-pitfm-18je5l',
                    opacity: 1,
                    duration: 500
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Café Simonz',
            image: './images/simonz.jpeg',
            description: 'Ich bin Sonia Zeitz﻿ und freue mich, Sie und Euch mit meinem tollen Team im Café Simonz zu bedienen! Wir verstehen uns als Restaurant mit einfachen, aber guten Speisen, als Treffpunkt für die vielseitigen Menschen der Region, als Kulturstätte für Musik abseits des Herkömmlichen und als einer der schönsten Biergärten der Stadt.',
            location: {
                center: [7.12906, 51.24855],
                zoom: 19.22,
                pitch: 32.01,
                bearing: -43.31,
                speed: 0.4,
                curve: 1
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Simonsstraße',
            image: './images/simonz.jpeg',
            description: 'Ich bin Sonia Zeitz﻿ und freue mich, Sie und Euch mit meinem tollen Team im Café Simonz zu bedienen! Wir verstehen uns als Restaurant mit einfachen, aber guten Speisen, als Treffpunkt für die vielseitigen Menschen der Region, als Kulturstätte für Musik abseits des Herkömmlichen und als einer der schönsten Biergärten der Stadt.',
            location: {
                center: [7.13060, 51.24887],
                zoom: 20.31,
                pitch: 32.01,
                bearing: -43.31,
                speed: 0.4,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Kindergarten',
            image: './images/simonz.jpeg',
            description: 'Ich bin Sonia Zeitz﻿ und freue mich, Sie und Euch mit meinem tollen Team im Café Simonz zu bedienen! Wir verstehen uns als Restaurant mit einfachen, aber guten Speisen, als Treffpunkt für die vielseitigen Menschen der Region, als Kulturstätte für Musik abseits des Herkömmlichen und als einer der schönsten Biergärten der Stadt.',
            location: {
                center: [7.13185, 51.24778],
                zoom: 19.23,
                pitch: 32.01,
                bearing: -43.31,
                speed: 0.4,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
