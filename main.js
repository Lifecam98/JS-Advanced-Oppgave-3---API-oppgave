// API documentation: https://developers.google.com/maps/documentation/pollen

import key from './key.js';
const apiKey = key.apiKey;

const cities = [
    { name: "New York, USA", lat: 40.7128, lon: -74.0060 },
    { name: "Los Angeles, USA", lat: 34.0522, lon: -118.2437 },
    { name: "Chicago, USA", lat: 41.8781, lon: -87.6298 },
    { name: "Houston, USA", lat: 29.7604, lon: -95.3698 },
    { name: "Phoenix, USA", lat: 33.4484, lon: -112.0740 },
    { name: "Philadelphia, USA", lat: 39.9526, lon: -75.1652 },
    { name: "San Antonio, USA", lat: 29.4241, lon: -98.4936 },
    { name: "San Diego, USA", lat: 32.7157, lon: -117.1611 },
    { name: "Dallas, USA", lat: 32.7767, lon: -96.7970 },
    { name: "San Jose, USA", lat: 37.3382, lon: -121.8863 },
    { name: "London, UK", lat: 51.5074, lon: -0.1278 },
    { name: "Birmingham, UK", lat: 52.4862, lon: -1.8904 },
    { name: "Leeds, UK", lat: 53.8008, lon: -1.5491 },
    { name: "Glasgow, UK", lat: 55.8642, lon: -4.2518 },
    { name: "Sheffield, UK", lat: 53.3811, lon: -1.4701 },
    { name: "Tokyo, Japan", lat: 35.6895, lon: 139.6917 },
    { name: "Osaka, Japan", lat: 34.6937, lon: 135.5023 },
    { name: "Nagoya, Japan", lat: 35.1815, lon: 136.9066 },
    { name: "Sapporo, Japan", lat: 43.0618, lon: 141.3545 },
    { name: "Fukuoka, Japan", lat: 33.5904, lon: 130.4017 },
    { name: "Paris, France", lat: 48.8566, lon: 2.3522 },
    { name: "Marseille, France", lat: 43.2965, lon: 5.3698 },
    { name: "Lyon, France", lat: 45.7640, lon: 4.8357 },
    { name: "Toulouse, France", lat: 43.6047, lon: 1.4442 },
    { name: "Nice, France", lat: 43.7102, lon: 7.2620 },
    { name: "Sydney, Australia", lat: -33.8688, lon: 151.2093 },
    { name: "Melbourne, Australia", lat: -37.8136, lon: 144.9631 },
    { name: "Brisbane, Australia", lat: -27.4698, lon: 153.0251 },
    { name: "Perth, Australia", lat: -31.9505, lon: 115.8605 },
    { name: "Adelaide, Australia", lat: -34.9285, lon: 138.6007 },
    { name: "Toronto, Canada", lat: 43.6511, lon: -79.3837 },
    { name: "Montreal, Canada", lat: 45.5017, lon: -73.5673 },
    { name: "Vancouver, Canada", lat: 49.2827, lon: -123.1207 },
    { name: "Calgary, Canada", lat: 51.0447, lon: -114.0719 },
    { name: "Edmonton, Canada", lat: 53.5461, lon: -113.4938 },
    { name: "Berlin, Germany", lat: 52.5200, lon: 13.4050 },
    { name: "Hamburg, Germany", lat: 53.5511, lon: 9.9937 },
    { name: "Munich, Germany", lat: 48.1351, lon: 11.5820 },
    { name: "Cologne, Germany", lat: 50.9375, lon: 6.9603 },
    { name: "Frankfurt, Germany", lat: 50.1109, lon: 8.6821 },
    { name: "São Paulo, Brazil", lat: -23.5505, lon: -46.6333 },
    { name: "Rio de Janeiro, Brazil", lat: -22.9068, lon: -43.1729 },
    { name: "Brasília, Brazil", lat: -15.8267, lon: -47.9218 },
    { name: "Salvador, Brazil", lat: -12.9714, lon: -38.5014 },
    { name: "Fortaleza, Brazil", lat: -3.7172, lon: -38.5434 },
    { name: "Moscow, Russia", lat: 55.7558, lon: 37.6173 },
    { name: "Saint Petersburg, Russia", lat: 59.9343, lon: 30.3351 },
    { name: "Novosibirsk, Russia", lat: 55.0084, lon: 82.9357 },
    { name: "Yekaterinburg, Russia", lat: 56.8389, lon: 60.6057 },
    { name: "Nizhny Novgorod, Russia", lat: 56.2965, lon: 43.9361 },
    { name: "Beijing, China", lat: 39.9042, lon: 116.4074 },
    { name: "Shanghai, China", lat: 31.2304, lon: 121.4737 },
    { name: "Chongqing, China", lat: 29.5630, lon: 106.5516 },
    { name: "Tianjin, China", lat: 39.3434, lon: 117.3616 },
    { name: "Guangzhou, China", lat: 23.1291, lon: 113.2644 },
    { name: "Mumbai, India", lat: 19.0760, lon: 72.8777 },
    { name: "Delhi, India", lat: 28.6139, lon: 77.2090 },
    { name: "Bangalore, India", lat: 12.9716, lon: 77.5946 },
    { name: "Hyderabad, India", lat: 17.3850, lon: 78.4867 },
    { name: "Ahmedabad, India", lat: 23.0225, lon: 72.5714 },
    { name: "Cape Town, South Africa", lat: -33.9249, lon: 18.4241 },
    { name: "Johannesburg, South Africa", lat: -26.2041, lon: 28.0473 },
    { name: "Durban, South Africa", lat: -29.8587, lon: 31.0218 },
    { name: "Pretoria, South Africa", lat: -25.7479, lon: 28.2293 },
    { name: "Port Elizabeth, South Africa", lat: -33.7139, lon: 25.5207 },
    { name: "Dubai, UAE", lat: 25.276987, lon: 55.296249 },
    { name: "Abu Dhabi, UAE", lat: 24.4539, lon: 54.3773 },
    { name: "Sharjah, UAE", lat: 25.3463, lon: 55.4209 },
    { name: "Al Ain, UAE", lat: 24.1302, lon: 55.8023 },
    { name: "Ajman, UAE", lat: 25.4052, lon: 55.5136 },
    { name: "Mexico City, Mexico", lat: 19.4326, lon: -99.1332 },
    { name: "Guadalajara, Mexico", lat: 20.6597, lon: -103.3496 },
    { name: "Monterrey, Mexico", lat: 25.6866, lon: -100.3161 },
    { name: "Puebla, Mexico", lat: 19.0414, lon: -98.2063 },
    { name: "Tijuana, Mexico", lat: 32.5149, lon: -117.0382 },
    { name: "Istanbul, Turkey", lat: 41.0082, lon: 28.9784 },
    { name: "Ankara, Turkey", lat: 39.9334, lon: 32.8597 },
    { name: "Izmir, Turkey", lat: 38.4192, lon: 27.1287 },
    { name: "Bursa, Turkey", lat: 40.1828, lon: 29.0665 },
    { name: "Adana, Turkey", lat: 37.0000, lon: 35.3213 },
    { name: "Seoul, South Korea", lat: 37.5665, lon: 126.9780 },
    { name: "Busan, South Korea", lat: 35.1796, lon: 129.0756 },
    { name: "Incheon, South Korea", lat: 37.4563, lon: 126.7052 },
    { name: "Daegu, South Korea", lat: 35.8714, lon: 128.6014 },
    { name: "Daejeon, South Korea", lat: 36.3504, lon: 127.3845 },
    { name: "Buenos Aires, Argentina", lat: -34.6037, lon: -58.3816 },
    { name: "Córdoba, Argentina", lat: -31.4201, lon: -64.1888 },
    { name: "Rosario, Argentina", lat: -32.9442, lon: -60.6505 },
    { name: "Mendoza, Argentina", lat: -32.8895, lon: -68.8458 },
    { name: "La Plata, Argentina", lat: -34.9205, lon: -57.9536 },
    { name: "Cairo, Egypt", lat: 30.0444, lon: 31.2357 },
    { name: "Alexandria, Egypt", lat: 31.2156, lon: 29.9553 },
    { name: "Giza, Egypt", lat: 30.0131, lon: 31.2089 },
    { name: "Shubra El Kheima, Egypt", lat: 30.1230, lon: 31.2504 },
    { name: "Port Said, Egypt", lat: 31.2653, lon: 32.3019 },
    { name: "Bangkok, Thailand", lat: 13.7563, lon: 100.5018 },
    { name: "Nonthaburi, Thailand", lat: 13.8591, lon: 100.5217 },
    { name: "Nakhon Ratchasima, Thailand", lat: 14.9799, lon: 102.0977 },
    { name: "Chiang Mai, Thailand", lat: 18.7883, lon: 98.9853 },
    { name: "Hat Yai, Thailand", lat: 7.0084, lon: 100.4747 },
    { name: "Rome, Italy", lat: 41.9028, lon: 12.4964 },
    { name: "Milan, Italy", lat: 45.4642, lon: 9.1900 },
    { name: "Naples, Italy", lat: 40.8518, lon: 14.2681 },
    { name: "Turin, Italy", lat: 45.0703, lon: 7.6869 },
    { name: "Palermo, Italy", lat: 38.1157, lon: 13.3615 },
    { name: "Lagos, Nigeria", lat: 6.5244, lon: 3.3792 },
    { name: "Kano, Nigeria", lat: 12.0022, lon: 8.5919 },
    { name: "Ibadan, Nigeria", lat: 7.3775, lon: 3.9470 },
    { name: "Abuja, Nigeria", lat: 9.0765, lon: 7.3986 },
    { name: "Port Harcourt, Nigeria", lat: 4.8156, lon: 7.0498 },
    { name: "Jakarta, Indonesia", lat: -6.2088, lon: 106.8456 },
    { name: "Surabaya, Indonesia", lat: -7.2575, lon: 112.7521 },
    { name: "Bandung, Indonesia", lat: -6.9175, lon: 107.6191 },
    { name: "Medan, Indonesia", lat: 3.5952, lon: 98.6722 },
    { name: "Bekasi, Indonesia", lat: -6.2383, lon: 106.9756 },
    { name: "Lima, Peru", lat: -12.0464, lon: -77.0428 },
    { name: "Arequipa, Peru", lat: -16.4090, lon: -71.5375 },
    { name: "Trujillo, Peru", lat: -8.1090, lon: -79.0215 },
    { name: "Chiclayo, Peru", lat: -6.7766, lon: -79.8440 },
    { name: "Iquitos, Peru", lat: -3.7437, lon: -73.2516 },
    { name: "Madrid, Spain", lat: 40.4168, lon: -3.7038 },
    { name: "Barcelona, Spain", lat: 41.3851, lon: 2.1734 },
    { name: "Valencia, Spain", lat: 39.4699, lon: -0.3763 },
    { name: "Seville, Spain", lat: 37.3886, lon: -5.9823 },
    { name: "Zaragoza, Spain", lat: 41.6488, lon: -0.8891 },
    { name: "Kuala Lumpur, Malaysia", lat: 3.1390, lon: 101.6869 },
    { name: "George Town, Malaysia", lat: 5.4141, lon: 100.3288 },
    { name: "Ipoh, Malaysia", lat: 4.5975, lon: 101.0901 },
    { name: "Shah Alam, Malaysia", lat: 3.0738, lon: 101.5183 },
    { name: "Malacca City, Malaysia", lat: 2.1896, lon: 102.2501 },
    { name: "Singapore, Singapore", lat: 1.3521, lon: 103.8198 },
    { name: "Hong Kong, China", lat: 22.3193, lon: 114.1694 },
    { name: "Rio de Janeiro, Brazil", lat: -22.9068, lon: -43.1729 },
    { name: "Santiago, Chile", lat: -33.4489, lon: -70.6693 },
    { name: "Athens, Greece", lat: 37.9838, lon: 23.7275 },
    { name: "Warsaw, Poland", lat: 52.2297, lon: 21.0122 },
    { name: "Vienna, Austria", lat: 48.2082, lon: 16.3738 },
    { name: "Lisbon, Portugal", lat: 38.7223, lon: -9.1393 },
    { name: "Stockholm, Sweden", lat: 59.3293, lon: 18.0686 },
    { name: "Zurich, Switzerland", lat: 47.3769, lon: 8.5417 },
    { name: "Brussels, Belgium", lat: 50.8503, lon: 4.3517 },
    { name: "Amsterdam, Netherlands", lat: 52.3676, lon: 4.9041 },
    { name: "Oslo, Norway", lat: 59.9139, lon: 10.7522 },
    { name: "Bergen, Norway", lat: 60.3913, lon: 5.3221 },
    { name: "Trondheim, Norway", lat: 63.4305, lon: 10.3951 },
    { name: "Stavanger, Norway", lat: 58.9690, lon: 5.7331 },
    { name: "Kristiansand, Norway", lat: 58.1467, lon: 7.9956 },
    { name: "Tromsø, Norway", lat: 69.6496, lon: 18.9560 },
    { name: "Drammen, Norway", lat: 59.7439, lon: 10.2045 },
    { name: "Fredrikstad, Norway", lat: 59.2184, lon: 10.9298 },
    { name: "Ålesund, Norway", lat: 62.4722, lon: 6.1495 },
    { name: "Sandnes, Norway", lat: 58.8524, lon: 5.7352 },
    { name: "Helsinki, Finland", lat: 60.1695, lon: 24.9354 },
    { name: "Copenhagen, Denmark", lat: 55.6761, lon: 12.5683 },
    { name: "Dublin, Ireland", lat: 53.3498, lon: -6.2603 },
    { name: "Budapest, Hungary", lat: 47.4979, lon: 19.0402 },
    { name: "Prague, Czech Republic", lat: 50.0755, lon: 14.4378 },
    { name: "Havana, Cuba", lat: 23.1136, lon: -82.3666 },
    { name: "Manila, Philippines", lat: 14.5995, lon: 120.9842 },
    { name: "Karachi, Pakistan", lat: 24.8607, lon: 67.0011 },
    { name: "Tehran, Iran", lat: 35.6892, lon: 51.3890 },
    { name: "Baghdad, Iraq", lat: 33.3152, lon: 44.3661 },
    { name: "Riyadh, Saudi Arabia", lat: 24.7136, lon: 46.6753 },
    { name: "Kiev, Ukraine", lat: 50.4501, lon: 30.5234 },
    { name: "Bucharest, Romania", lat: 44.4268, lon: 26.1025 },
    { name: "Sofia, Bulgaria", lat: 42.6977, lon: 23.3219 },
    { name: "Belgrade, Serbia", lat: 44.7866, lon: 20.4489 },
    { name: "Zagreb, Croatia", lat: 45.8150, lon: 15.9819 },
    { name: "Ljubljana, Slovenia", lat: 46.0569, lon: 14.5058 },
    { name: "Sarajevo, Bosnia and Herzegovina", lat: 43.8563, lon: 18.4131 },
    { name: "Skopje, North Macedonia", lat: 41.9981, lon: 21.4254 },
    { name: "Tirana, Albania", lat: 41.3275, lon: 19.8187 },
    { name: "Podgorica, Montenegro", lat: 42.4304, lon: 19.2594 },
    { name: "Pristina, Kosovo", lat: 42.6629, lon: 21.1655 },
    { name: "Tallinn, Estonia", lat: 59.4370, lon: 24.7536 },
    { name: "Riga, Latvia", lat: 56.9496, lon: 24.1052 },
    { name: "Vilnius, Lithuania", lat: 54.6872, lon: 25.2797 },
    { name: "Minsk, Belarus", lat: 53.9006, lon: 27.5590 },
    { name: "Tbilisi, Georgia", lat: 41.7151, lon: 44.8271 },
    { name: "Yerevan, Armenia", lat: 40.1792, lon: 44.4991 },
    { name: "Baku, Azerbaijan", lat: 40.4093, lon: 49.8671 },
    { name: "Astana, Kazakhstan", lat: 51.1694, lon: 71.4491 },
    { name: "Ulaanbaatar, Mongolia", lat: 47.8864, lon: 106.9057 },
    { name: "Hanoi, Vietnam", lat: 21.0285, lon: 105.8542 },
    { name: "Taipei, Taiwan", lat: 25.0330, lon: 121.5654 },
    { name: "Canberra, Australia", lat: -35.2809, lon: 149.1300 },
    { name: "Wellington, New Zealand", lat: -41.2865, lon: 174.7762 },
    { name: "Suva, Fiji", lat: -18.1248, lon: 178.4501 },
    { name: "Port Moresby, Papua New Guinea", lat: -9.4438, lon: 147.1803 },
    { name: "Nairobi, Kenya", lat: -1.2921, lon: 36.8219 },
    { name: "Accra, Ghana", lat: 5.6037, lon: -0.1870 },
    { name: "Dakar, Senegal", lat: 14.7167, lon: -17.4677 },
    { name: "Casablanca, Morocco", lat: 33.5731, lon: -7.5898 },
    { name: "Algiers, Algeria", lat: 36.7538, lon: 3.0588 },
    { name: "Tunis, Tunisia", lat: 36.8065, lon: 10.1815 },
    { name: "Tripoli, Libya", lat: 32.8872, lon: 13.1913 },
    { name: "Khartoum, Sudan", lat: 15.5007, lon: 32.5599 },
    { name: "Addis Ababa, Ethiopia", lat: 9.0300, lon: 38.7400 },
    { name: "Kampala, Uganda", lat: 0.3476, lon: 32.5825 },
    { name: "Lusaka, Zambia", lat: -15.3875, lon: 28.3228 },
    { name: "Harare, Zimbabwe", lat: -17.8292, lon: 31.0522 },
    { name: "Luanda, Angola", lat: -8.8390, lon: 13.2894 },
    { name: "Kinshasa, DR Congo", lat: -4.4419, lon: 15.2663 },
    { name: "Maputo, Mozambique", lat: -25.9692, lon: 32.5732 },
    { name: "Antananarivo, Madagascar", lat: -18.8792, lon: 47.5079 },
    { name: "Port Louis, Mauritius", lat: -20.1609, lon: 57.5012 },
    { name: "Victoria, Seychelles", lat: -4.6191, lon: 55.4513 },
    { name: "Male, Maldives", lat: 4.1755, lon: 73.5093 },
    { name: "Colombo, Sri Lanka", lat: 6.9271, lon: 79.8612 },
    { name: "Dhaka, Bangladesh", lat: 23.8103, lon: 90.4125 },
    { name: "Kathmandu, Nepal", lat: 27.7172, lon: 85.3240 },
    { name: "Thimphu, Bhutan", lat: 27.4712, lon: 89.6339 },
    { name: "Islamabad, Pakistan", lat: 33.6844, lon: 73.0479 },
    { name: "Kabul, Afghanistan", lat: 34.5553, lon: 69.2075 },
    { name: "Tashkent, Uzbekistan", lat: 41.2995, lon: 69.2401 },
    { name: "Ashgabat, Turkmenistan", lat: 37.9601, lon: 58.3261 },
    { name: "Bishkek, Kyrgyzstan", lat: 42.8746, lon: 74.5698 },
    { name: "Dushanbe, Tajikistan", lat: 38.5598, lon: 68.7870 },
    { name: "Nur-Sultan, Kazakhstan", lat: 51.1694, lon: 71.4491 },
    { name: "Ulaanbaatar, Mongolia", lat: 47.8864, lon: 106.9057 }
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
        noDataElement.textContent = `No pollen data available for ${pollenType}.`;
        pollenInfoDiv.appendChild(noDataElement);
    }
}



