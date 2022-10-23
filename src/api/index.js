const apiURL = "https://worldtimeapi.org/api/timezone/"

class API {
	getTime(timezone) {
		const query = `${apiURL}${timezone}`;
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