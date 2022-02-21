const apiURL = "http://worldtimeapi.org/api/timezone/America/Halifax"

class API {
	getTime() {
		const query = `${apiURL}`;
		return fetch(query)
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				return data;
			})
			.catch(err => console.log(error));
	}
}

export default new API();