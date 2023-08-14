 export const geoApiOption = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '54299d9868msh2a6fe2351947a85p1e3ab6jsn7925dc942ac8',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const GEO_API_url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }