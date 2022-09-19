let main = document.getElementById("main");

document.querySelector(".submit").addEventListener("click", function(result) {
let  title = document.querySelector("input").value;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
	}
};

fetch(`https://unogsng.p.rapidapi.com/search?query=${title}&offset=0`, options)
.then(response => response.json())
.then(data => {
			console.log(data)
			createCard(data.results);
		}) 
		.catch(err => console.error(err));
	});

function createCard(data){
	main.innerHTML = '';
	data.forEach(result => {
		const {title, img, synopsis, clist} = result;
		let div = document.createElement("div");
		div.innerHTML = `
        <div class="info">
		<h3 class="title">
			${title}
		</h3>
		<img class="img" src="${img}" alt="">
            <div class="synop">
                <p>${synopsis}</p>
            </div>
			<div class="clist">
				<p>${clist}</p>
			</div>
        </div>
		`
		main.appendChild(div);
	})
}



