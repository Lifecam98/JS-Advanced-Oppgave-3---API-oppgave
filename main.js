// API documentation: https://developers.google.com/maps/documentation/pollen

import key from './key.js';
const apiKey = key.apiKey;

let cities = [];
let storedPollenData = null;

function loadCities() {
    return fetch('./cities.json')
    .then(response => response.json())
    .then(data => {
        cities = data;
        populateDropdown();
    })
    .catch(error => {
        console.error('Error loading cities:', error);
    });
}

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

loadCities().catch(error => console.error('Error initializing cities:', error));

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



