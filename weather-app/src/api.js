 export const geoApiOption = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f386f2d71c694ed9937200344231309',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const GEO_API_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const Weather_API_URL='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
export const Weather_API_KEY='a72c5146f0e2909cce3a0770e86cec92';
// try {

// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

