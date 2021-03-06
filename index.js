let btn = document.querySelector("#search")
let gallery = document.querySelector("#gallery")
let area = document.querySelector("#input")



btn.addEventListener("click", () => {
	gallery.innerHTML = ""
	async function getData() {
		const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=15&client_id=hI4Y_XIq1Y7WRGD71_wmtxJEEWY5_2TYfsDKHVICFx0'
		const res = await fetch(url);
		const data = await res.json();
		for (let i = 0; i < data.results.length; i++) {
			let img = document.createElement("div");
			img.className = "img";
			img.style.backgroundImage = "url(" + data.results[i].urls.raw + "&w=1280&h=700" + ")";
			gallery.appendChild(img);
		}

	}

	getData()
});


area.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		gallery.innerHTML = ""
		async function getData() {
			const url = 'https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=15&client_id=hI4Y_XIq1Y7WRGD71_wmtxJEEWY5_2TYfsDKHVICFx0'
			const res = await fetch(url);
			const data = await res.json();
			for (let i = 0; i < data.results.length; i++) {
				let img = document.createElement("div");
				img.className = "img";
				img.style.backgroundImage = "url(" + data.results[i].urls.raw + "&w=1280&h=700" + ")";
				gallery.appendChild(img);
			}

		}

		getData()
	}
});


window.onload = async function getData() {
	const url = 'https://api.unsplash.com/search/photos?query=js&per_page=15&client_id=hI4Y_XIq1Y7WRGD71_wmtxJEEWY5_2TYfsDKHVICFx0'
	const res = await fetch(url);
	const data = await res.json();
	for (let i = 0; i < data.results.length; i++) {
		let img = document.createElement("div");
		img.className = "img";
		img.style.backgroundImage = "url(" + data.results[i].urls.raw + "&w=1280&h=700" + ")";
		gallery.appendChild(img);
	}

}


function search(e) {
	e.preventDefault();
	let q = e.target.value;
	if (q === "") {
		$(".fa-times").css("display", "none");
	} else {
		$(".fa-times").css("display", "block");
	}
}

console.log("Самооценка в 65 баллов\nВёрстка +10\nПри загрузке приложения на странице отображаются полученные от API изображения +10\nпоиск по словам +10\nПоиск +30 \n Доп функционал - уменьшил размеры загружаемых изображений при запросе +5")