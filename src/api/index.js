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
			//.catch(() => "Nada");
		
		/*return response;*/
		//data.forEach(event => (event.id = event.organizer + event.title));
		//return {datetime: 555};
	}
}

export default new API();