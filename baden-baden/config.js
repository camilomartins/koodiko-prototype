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
			id: 'first-chapter',
			alignment: 'left',
			hidden: false,
			title: 'Historische und kulturelle Bedeutung',
			// image: './images/aufbruch.jpeg',
			description: `
                <p class="">
                    Wie kann die Bürgerbeteiligung die Entscheidung zur Umbenennung des Hindenburgplatzes beeinflussen, und welche Perspektiven haben die Bürger zur historischen Bedeutung des Platzes?
                </p>
                <p>
                    Welche Methoden sind am effektivsten, um historische und kulturelle Bildung durch partizipative Aktivitäten ni die Stadtplanung zu integrieren? 
                </p>
                <p>
                    Wie können virtuele Touren das Engagement der Gemeinschaft mit historischen Stätten in städtischen Gebieten fördern?
                </p>
                <form ">                    
                    <textarea class="w-full border-2 rounded-xl	mt-8" style="padding:10px;" id="fließtext" name="fließtext" placeholder="Hier können Sie Ihre Antwort eingeben"></textarea>
                </form>
                `,
			location: {
				center: [8.23685, 48.76503],
				zoom: 18.9,
				pitch: 55.12,
				bearing: -147.51,
				speed: 0.4,
				curve: 1,
			},
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',
			onChapterEnter: [
				// {
				//     layer: 'layer-name',
				//     opacity: 1,
				//     duration: 5000
				// }
			],
			onChapterExit: [
				// {
				//     layer: 'layer-name',
				//     opacity: 0
				// }
			],
		},
		{
			id: 'second-identifier',
			alignment: 'left',
			hidden: false,
			title: 'Grünflächen und Umweltbewusstsein',
			// image: './images/simonz.jpeg',
			description: `
            <section class="space-y-6">
                <p>
                    Wie wirkt sich die Integration von grüner und blauer Infrastruktur in der Stadtplanung auf die Umweltverträglichkeit und den Hochwasserschutz in Baden-Baden aus?
                </p>
                <p>
                    Welche Arten von grüner und blauer Infrastruktur bevorzugen die Bürger, und wei können diese Präferenzen in den Stadtplanungsprozess integriert werden?
                </p>
                <p>
                    Wie können Workshops zur urbanen Gartenarbeit und gemeinschaftliche Pflanzaktionen das Umweltbewusstsein und die Beteiligung der Bewohner fördern?
                </p>
                <form class="space-y-10">
            <!-- Option 1 -->
            <label class="block">
                <input type="radio" name="option" value="option1" class="peer hidden">
                <span class="block h-12 peer-checked:bg-blue-500 peer-checked:text-white p-3 border rounded-md cursor-pointer">
                    Variante 1
                    <img src="./images/simonz.jpeg" alt="Image Description">
                </span>
            </label>
            
            <!-- Option 2 -->
            <label class="block w-full">
                <input type="radio" name="option" value="option2" class="peer hidden">
                <div class="w-full peer-checked:bg-blue-500 peer-checked:text-white p-3 border rounded-md cursor-pointer">
                    Variante 2
                </div>
            </label>
            
            <!-- Option 3 -->
            <label class="block">
                <input type="radio" name="option" value="option3" class="peer hidden">
                <span class="peer-checked:bg-blue-500 peer-checked:text-white p-3 border rounded-md cursor-pointer">
                    Variante 3
                </span>
            </label>
        </form>
            </section>
                `,
			location: {
				center: [8.23708, 48.7648],
				zoom: 20.2,
				pitch: 41.12,
				bearing: 157.29,
				speed: 0.4,
				curve: 1,
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
			onChapterExit: [],
		},
		{
			id: 'third-identifier',
			alignment: 'left',
			hidden: false,
			title: 'Mobilität und öffentlicher Nahverkehr',
			// image: './images/simonz.jpeg',
			description: `
                <p>
                    Wie kann die Integration von Bike-Sharing-Stationen und 5G-Technologie die Anbindung und Mobilität des öffentlichen Nahverkehrs am Hindenburgplatz verbessern?
                </p>
                <p>
                    Was sind die wichtigsten Mobilitätsbedürfnisse und - präferenzen der Bürger mi Bereich Hindenburgplatz?                
                </p>
                <p>
                    Wie effektiv ist der virtuelle Fußverkehrs-Check bei der Sammlung von Daten und Feedback zur Bewegung und Sicherheit von Fußgängern?
                </p>
                <form>
            <label for="slider" class="block text-lg font-semibold mb-4">Wähle einen Wert:</label>
            
            <!-- Schieberegler -->
            <input 
                id="slider" 
                type="range" 
                min="0" 
                max="100" 
                value="50" 
                class="mb-4" 
                oninput="document.getElementById('sliderValue').textContent = this.value"
            >

            <!-- Anzeige des aktuellen Wertes -->
            <span class="text-center text-blue-500 font-semibold">
                Wert: <span id="sliderValue">50</span>
            </span>
        </form>
            
            `,
			location: {
				center: [8.23698, 48.76418],
				zoom: 19.08,
				pitch: 51.62,
				bearing: 31.69,
				speed: 0.4,
				curve: 1,
			},
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'fourth-chapter',
			alignment: 'left',
			hidden: false,
			title: 'Sicherheit und Barrierefreiheit',
			// image: './images/simonz.jpeg',
			description: `
                <p>
                    Was sind die Hauptsicherheitsbedenken der Bewohner im Bereich Hindenburgplatz, und wie können diese durch Stadtplanung angegangen werden?
                </p>
                <p>
                    Wie können partizipative Sicherheitsaudits und Workshops die Barrierefreiheit städtischer Räume für ale Bürger verbessern?
                </p>
                <p>
                    Wie können der bestehende Zustand und geplante Entwicklungen die Sicherheitsbedenken der Bürger in der Gegend beeinflussen?
                </p>
                <form ">                    
                    <textarea style="padding:10px;" id="fließtext" name="fließtext" rows="5" cols="40" placeholder="Hier können Sie Ihre Antwort eingeben"></textarea>
                </form>
            `,
			location: {
				center: [8.23658, 48.76536],
				zoom: 19.87,
				pitch: 77.75,
				bearing: -35.89,
				speed: 0.4,
				curve: 1,
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'fifth-chapter',
			alignment: 'left',
			hidden: false,
			title: 'Urbanes Design und Ausstattung',
			// image: './images/simonz.jpeg',
			description: `
                <p>
                    Wie kann die Bürgerbeteiligung bei der Gestaltung urbaner Annehmlichkeiten, wie Bänken und Mülleimern, sicherstellen, dass diese Elemente den praktischen Bedürfnissen der Gemeinschaft entsprechen?
                </p>
                <p>
                    Welche Methoden sind am effektivsten, um Bürgerfeedback uz städtischen Annehmlichkeiten uz sammeln und in den Designprozess zu integrieren?
                </p>
                <p>
                    Wei kann die Einbeziehung von Bürgerfeedback ni das urbane Design die Funktionalität und Benutzerzufriedenheit öffentlicher Räume verbessern?
                </p>
                <form ">                    
                    <textarea style="padding:10px;" id="fließtext" name="fließtext" rows="5" cols="40" placeholder="Hier können Sie Ihre Antwort eingeben"></textarea>
                </form>
            `,
			location: {
				center: [8.237, 48.76494],
				zoom: 18.29,
				pitch: 0.5,
				bearing: 171.53,
				speed: 0.4,
				curve: 1,
			},
			mapAnimation: 'flyTo',
			rotateAnimation: false,
			callback: '',
			onChapterEnter: [],
			onChapterExit: [],
		},
		{
			id: 'sixth-chapter',
			alignment: 'left',
			hidden: false,
			title: 'Smarte Technologie und Innovation',
			// image: './images/simonz.jpeg',
			description: `
                <p>
                    Wie können Smart-City-Technologien, wie Echtzeit- Informationskioske und digitale Karten, das städtische Leben am Hindenburgplatz verbessern?
                </p>
                <p class="text-3xl">
                    Was sind die potenziellen Vorteile und Herausforderungen bei der Integration smarter Technologien ni bestehende städtische Infrastrukturen?
                </p>
                <p>
                    Wie können Innovationsworkshops mit Bürgerbeteiligung zu praktischen und innovativen Lösungen für urbane Herausforderungen führen?
                </p>
                <form ">                    
                    <textarea style="padding:10px;" id="fließtext" name="fließtext" rows="5" cols="40" placeholder="Hier können Sie Ihre Antwort eingeben"></textarea>
                </form>
            `,
			location: {
				center: [8.23704, 48.76487],
				zoom: 19.33,
				pitch: 65.36,
				bearing: 23.51,
				speed: 0.4,
				curve: 1,
			},
			mapAnimation: 'flyTo',
			rotateAnimation: true,
			callback: '',
			onChapterEnter: [],
			onChapterExit: [],
		},
	],
};
