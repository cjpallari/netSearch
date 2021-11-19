/* import fetch from "node-fetch";
global.globalThis.fetch = fetch; */
fetch("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=loadvideo&q=60029591", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": "71c46cfca3msh871766fb46dd494p1db561jsn62d60f12446b"
	}
})
.then(response => {
	console.log(response);
	return response.json()
})
.then(data => {
	let countries = [];
	let fun = document.getElementById("submit").onclick = function(){
		document.querySelector("form").addEventListener('submit', function(e) {
			e.preventDefault();
			let search = document.querySelector("input").value;
			/* console.log(search);
			for (var i = 0; i < data.RESULT.nfinfo.title.length; i++)
			{
				for (var key in data.RESULT.nfinfo.title[i])
				{
					if (data.RESULT.nfinfo.title[i][key].indexOf(search) != -1)
					{
						countries.push(data.country[i]);
						console.log(countries);
					}
				}
			} */
			if (data.RESULT.nfinfo.title === search)
			{
				console.log(data.RESULT.nfinfo.title);
			}
			
		})
	};
	/* console.log(data.RESULT.country);
	console.log(data); */
})
.catch(err => {
	console.error(err);
});



