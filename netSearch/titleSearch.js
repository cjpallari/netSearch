fetch("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=loadvideo&q=60029591", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": "71c46cfca3msh871766fb46dd494p1db561jsn62d60f12446b"
	}
})
.then(response => {
	console.log(response);
    return response.json;
})
.then(data => {
    console.log(data);
})
.catch(err => {
	console.error(err);
});