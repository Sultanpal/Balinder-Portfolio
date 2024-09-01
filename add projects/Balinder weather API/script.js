const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '059fa9051amsh07993340c4a7063p1f82a6jsn7f4546770e20',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
function callme(e) {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + e, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			document.getElementById("name").innerHTML = e;
			document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
			document.getElementById("feels_like").innerHTML = response.feels_like;
			document.getElementById("humidity").innerHTML = response.humidity;
			document.getElementById("max_temp").innerHTML = response.max_temp;
			document.getElementById("min_temp").innerHTML = response.min_temp;
			document.getElementById("sunrise").innerHTML = (response.sunrise);
			document.getElementById("sunset").innerHTML = response.sunset;
			document.getElementById("temp").innerHTML = response.temp;
			document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
			document.getElementById("wind_speed").innerHTML = response.wind_speed;
		})
		.catch(err => console.error(err));
}
function send(){
	var temsearch = document.getElementById("search-bar-id").value;
	callme(temsearch);
}