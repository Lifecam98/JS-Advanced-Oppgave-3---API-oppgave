// API documentation: https://developers.google.com/maps/documentation/pollen

import key from './key.js';
const apiKey = key.apiKey;

const cities = [
    { name: "Vienna, Austria", lat: 48.2082, lon: 16.3738 },
    { name: "Sydney, Australia", lat: -33.8688, lon: 151.2093 },
    { name: "Melbourne, Australia", lat: -37.8136, lon: 144.9631 },
    { name: "Brisbane, Australia", lat: -27.4698, lon: 153.0251 },
    { name: "Buenos Aires, Argentina", lat: -34.6037, lon: -58.3816 },
    { name: "Córdoba, Argentina", lat: -31.4201, lon: -64.1888 },
    { name: "Rosario, Argentina", lat: -32.9442, lon: -60.6505 },
    { name: "Brussels, Belgium", lat: 50.8503, lon: 4.3517 },
    { name: "Antwerp, Belgium", lat: 51.2194, lon: 4.4025 },
    { name: "Ghent, Belgium", lat: 51.0543, lon: 3.7174 },
    { name: "Sofia, Bulgaria", lat: 42.6977, lon: 23.3219 },
    { name: "Plovdiv, Bulgaria", lat: 42.1354, lon: 24.7453 },
    { name: "Varna, Bulgaria", lat: 43.2141, lon: 27.9147 },
    { name: "São Paulo, Brazil", lat: -23.5505, lon: -46.6333 },
    { name: "Rio de Janeiro, Brazil", lat: -22.9068, lon: -43.1729 },
    { name: "Brasília, Brazil", lat: -15.8267, lon: -47.9218 },
    { name: "Toronto, Canada", lat: 43.6511, lon: -79.3837 },
    { name: "Vancouver, Canada", lat: 49.2827, lon: -123.1207 },
    { name: "Montreal, Canada", lat: 45.5017, lon: -73.5673 },
    { name: "Zurich, Switzerland", lat: 47.3769, lon: 8.5417 },
    { name: "Geneva, Switzerland", lat: 46.2044, lon: 6.1432 },
    { name: "Basel, Switzerland", lat: 47.5596, lon: 7.5886 },
    { name: "Santiago, Chile", lat: -33.4489, lon: -70.6693 },
    { name: "Valparaíso, Chile", lat: -33.0472, lon: -71.6127 },
    { name: "Concepción, Chile", lat: -36.8201, lon: -73.0444 },
    { name: "Beijing, China", lat: 39.9042, lon: 116.4074 },
    { name: "Shanghai, China", lat: 31.2304, lon: 121.4737 },
    { name: "Guangzhou, China", lat: 23.1291, lon: 113.2644 },
    { name: "Prague, Czech Republic", lat: 50.0755, lon: 14.4378 },
    { name: "Brno, Czech Republic", lat: 49.1951, lon: 16.6068 },
    { name: "Ostrava, Czech Republic", lat: 49.8209, lon: 18.2625 },
    { name: "Berlin, Germany", lat: 52.5200, lon: 13.4050 },
    { name: "Munich, Germany", lat: 48.1351, lon: 11.5820 },
    { name: "Frankfurt, Germany", lat: 50.1109, lon: 8.6821 },
    { name: "Copenhagen, Denmark", lat: 55.6761, lon: 12.5683 },
    { name: "Aarhus, Denmark", lat: 56.1629, lon: 10.2039 },
    { name: "Odense, Denmark", lat: 55.4038, lon: 10.4024 },
    { name: "Tallinn, Estonia", lat: 59.4370, lon: 24.7536 },
    { name: "Tartu, Estonia", lat: 58.3776, lon: 26.7290 },
    { name: "Narva, Estonia", lat: 59.3772, lon: 28.1903 },
    { name: "Cairo, Egypt", lat: 30.0444, lon: 31.2357 },
    { name: "Alexandria, Egypt", lat: 31.2156, lon: 29.9553 },
    { name: "Giza, Egypt", lat: 30.0131, lon: 31.2089 },
    { name: "Madrid, Spain", lat: 40.4168, lon: -3.7038 },
    { name: "Barcelona, Spain", lat: 41.3851, lon: 2.1734 },
    { name: "Valencia, Spain", lat: 39.4699, lon: -0.3763 },
    { name: "Helsinki, Finland", lat: 60.1695, lon: 24.9354 },
    { name: "Espoo, Finland", lat: 60.2055, lon: 24.6559 },
    { name: "Tampere, Finland", lat: 61.4978, lon: 23.7610 },
    { name: "Paris, France", lat: 48.8566, lon: 2.3522 },
    { name: "Marseille, France", lat: 43.2965, lon: 5.3698 },
    { name: "Lyon, France", lat: 45.7640, lon: 4.8357 },
    { name: "London, United Kingdom", lat: 51.5074, lon: -0.1278 },
    { name: "Birmingham, United Kingdom", lat: 52.4862, lon: -1.8904 },
    { name: "Manchester, United Kingdom", lat: 53.4808, lon: -2.2426 },
    { name: "Tbilisi, Georgia", lat: 41.7151, lon: 44.8271 },
    { name: "Batumi, Georgia", lat: 41.6168, lon: 41.6367 },
    { name: "Kutaisi, Georgia", lat: 42.2679, lon: 42.6946 },
    { name: "Athens, Greece", lat: 37.9838, lon: 23.7275 },
    { name: "Thessaloniki, Greece", lat: 40.6401, lon: 22.9444 },
    { name: "Patras, Greece", lat: 38.2466, lon: 21.7346 },
    { name: "Hong Kong, China", lat: 22.3193, lon: 114.1694 },
    { name: "Zagreb, Croatia", lat: 45.8150, lon: 15.9819 },
    { name: "Split, Croatia", lat: 43.5081, lon: 16.4402 },
    { name: "Rijeka, Croatia", lat: 45.3271, lon: 14.4422 },
    { name: "Budapest, Hungary", lat: 47.4979, lon: 19.0402 },
    { name: "Debrecen, Hungary", lat: 47.5316, lon: 21.6273 },
    { name: "Szeged, Hungary", lat: 46.2530, lon: 20.1414 },
    { name: "Dublin, Ireland", lat: 53.3498, lon: -6.2603 },
    { name: "Cork, Ireland", lat: 51.8985, lon: -8.4756 },
    { name: "Limerick, Ireland", lat: 52.6638, lon: -8.6267 },
    { name: "Rome, Italy", lat: 41.9028, lon: 12.4964 },
    { name: "Milan, Italy", lat: 45.4642, lon: 9.1900 },
    { name: "Naples, Italy", lat: 40.8518, lon: 14.2681 },
    { name: "Tokyo, Japan", lat: 35.6895, lon: 139.6917 },
    { name: "Osaka, Japan", lat: 34.6937, lon: 135.5023 },
    { name: "Nagoya, Japan", lat: 35.1815, lon: 136.9066 },
    { name: "Seoul, South Korea", lat: 37.5665, lon: 126.9780 },
    { name: "Busan, South Korea", lat: 35.1796, lon: 129.0756 },
    { name: "Incheon, South Korea", lat: 37.4563, lon: 126.7052 },
    { name: "Riga, Latvia", lat: 56.9496, lon: 24.1052 },
    { name: "Daugavpils, Latvia", lat: 55.8755, lon: 26.5359 },
    { name: "Liepaja, Latvia", lat: 56.5047, lon: 21.0108 },
    { name: "Vilnius, Lithuania", lat: 54.6872, lon: 25.2797 },
    { name: "Kaunas, Lithuania", lat: 54.8985, lon: 23.9036 },
    { name: "Klaipeda, Lithuania", lat: 55.7033, lon: 21.1443 },
    { name: "Amsterdam, Netherlands", lat: 52.3676, lon: 4.9041 },
    { name: "Rotterdam, Netherlands", lat: 51.9225, lon: 4.4792 },
    { name: "The Hague, Netherlands", lat: 52.0705, lon: 4.3007 },
    { name: "Oslo, Norway", lat: 59.9139, lon: 10.7522 },
    { name: "Bergen, Norway", lat: 60.3913, lon: 5.3221 },
    { name: "Trondheim, Norway", lat: 63.4305, lon: 10.3951 },
    { name: "Warsaw, Poland", lat: 52.2297, lon: 21.0122 },
    { name: "Krakow, Poland", lat: 50.0647, lon: 19.9450 },
    { name: "Lodz, Poland", lat: 51.7592, lon: 19.4560 },
    { name: "Lisbon, Portugal", lat: 38.7223, lon: -9.1393 },
    { name: "Porto, Portugal", lat: 41.1579, lon: -8.6291 },
    { name: "Braga, Portugal", lat: 41.5454, lon: -8.4265 },
    { name: "Bucharest, Romania", lat: 44.4268, lon: 26.1025 },
    { name: "Cluj-Napoca, Romania", lat: 46.7712, lon: 23.6236 },
    { name: "Timisoara, Romania", lat: 45.7489, lon: 21.2087 },
    { name: "Belgrade, Serbia", lat: 44.7866, lon: 20.4489 },
    { name: "Novi Sad, Serbia", lat: 45.2671, lon: 19.8335 },
    { name: "Niš, Serbia", lat: 43.3209, lon: 21.8958 },
    { name: "Moscow, Russia", lat: 55.7558, lon: 37.6173 },
    { name: "Saint Petersburg, Russia", lat: 59.9343, lon: 30.3351 },
    { name: "Novosibirsk, Russia", lat: 55.0084, lon: 82.9357 },
    { name: "Stockholm, Sweden", lat: 59.3293, lon: 18.0686 },
    { name: "Gothenburg, Sweden", lat: 57.7089, lon: 11.9746 },
    { name: "Malmö, Sweden", lat: 55.6050, lon: 13.0038 },
    { name: "Ljubljana, Slovenia", lat: 46.0569, lon: 14.5058 },
    { name: "Maribor, Slovenia", lat: 46.5547, lon: 15.6459 },
    { name: "Celje, Slovenia", lat: 46.2381, lon: 15.2677 },
    { name: "Istanbul, Turkey", lat: 41.0082, lon: 28.9784 },
    { name: "Ankara, Turkey", lat: 39.9334, lon: 32.8597 },
    { name: "Izmir, Turkey", lat: 38.4192, lon: 27.1287 },
    { name: "Kyiv, Ukraine", lat: 50.4501, lon: 30.5234 },
    { name: "Kharkiv, Ukraine", lat: 49.9935, lon: 36.2304 },
    { name: "Odessa, Ukraine", lat: 46.4825, lon: 30.7233 },
    { name: "New York, USA", lat: 40.7128, lon: -74.0060 },
    { name: "Los Angeles, USA", lat: 34.0522, lon: -118.2437 },
    { name: "Chicago, USA", lat: 41.8781, lon: -87.6298 },
    { name: "Cape Town, South Africa", lat: -33.9249, lon: 18.4241 },
    { name: "Johannesburg, South Africa", lat: -26.2041, lon: 28.0473 },
    { name: "Durban, South Africa", lat: -29.8587, lon: 31.0218 }
];
let storedPollenData = null;

const dropdown = document.getElementById("cityDropdown");
const pollenTypeDropdown = document.getElementById('pollenTypeDropdown');
const pollenInfoDiv = document.getElementById("pollenInfo");

function populateDropdown() {
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = JSON.stringify({lat: city.lat, lon: city.lon});
        option.textContent = city.name;
        dropdown.appendChild(option);
    });
}
populateDropdown();

dropdown.addEventListener("change", function() {
    const selectedCity = JSON.parse(this.value);
    console.log("Selected City Coordinates:", selectedCity);

    const lat = selectedCity.lat;
    const lon = selectedCity.lon;

    const apiUrl = `https://pollen.googleapis.com/v1/forecast:lookup?key=${apiKey}&location.longitude=${lon}&location.latitude=${lat}&days=3&plantsDescription=false`;

    fetchPollenData(apiUrl);
});

function fetchPollenData(apiUrl) {
    fetch(apiUrl)
    .then(response => response.json())
    .then((data) => {
        storedPollenData = data;
        console.log("Pollen Data:", storedPollenData);

        if (storedPollenData && storedPollenData.dailyInfo && storedPollenData.dailyInfo.length > 0) {
            const pollenTypes = new Set();
            storedPollenData.dailyInfo.forEach(day => {
                day.pollenTypeInfo.forEach(info => pollenTypes.add(info.displayName));
            });
            populatePollenTypeDropdown(Array.from(pollenTypes));
        } else {
            console.error("Pollen types data is missing or undefined.");
        }
    })
    .catch(error => console.error("Error fetching pollen data:", error));
}

function populatePollenTypeDropdown(pollenTypes) {
    pollenTypeDropdown.innerHTML = '';

    const placeholderOption = document.createElement('option');
    placeholderOption.value = '';
    placeholderOption.textContent = 'Select a pollen type';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    pollenTypeDropdown.appendChild(placeholderOption);

    pollenTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        pollenTypeDropdown.appendChild(option);
    });
}

pollenTypeDropdown.addEventListener("change", function() {
    const selectedPollenType = this.value;
    console.log("Selected Pollen Type:", selectedPollenType);
    if (storedPollenData && storedPollenData.dailyInfo) {
        renderPollenLevels(storedPollenData.dailyInfo, selectedPollenType);
    } else {
        console.error("No stored pollen data available.");
    }
});

function renderPollenLevels(dailyInfo, pollenType) {
    pollenInfoDiv.innerHTML = '';

    let dataAvailable = false;

    dailyInfo.forEach(day => {
        const pollenTypeInfo = day.pollenTypeInfo.find(info => info.displayName === pollenType);
        if (pollenTypeInfo && pollenTypeInfo.indexInfo) {
            dataAvailable = true;
            const dateStr = `${day.date.day}-${String(day.date.month).padStart(2, '0')}-${String(day.date.year).padStart(2, '0')}`;
            const pollenLevel = pollenTypeInfo.indexInfo.value;
            const dayElement = document.createElement('div');
            dayElement.textContent = `Date: ${dateStr}, Pollen Level: ${pollenLevel}`;
            pollenInfoDiv.appendChild(dayElement);
        }
    });

    if (!dataAvailable) {
        const noDataElement = document.createElement('div');
        noDataElement.textContent = `No pollen data available at the selected location for ${pollenType}.`;
        pollenInfoDiv.appendChild(noDataElement);
    }
}



