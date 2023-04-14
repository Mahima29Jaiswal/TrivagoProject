// import footer from "./components/footer.js";
// import footer from "../components/footer.js";
// let mainFooter = document.getElementById("imported-footer");
// mainFooter.innerHTML = footer();


let Hoteldata = []

		fetch('http://localhost:3000/Hoteldata').then(function(response) {
			return response.json()
		}).then(function(response) {
			Hoteldata = response
			console.log(Hoteldata)
			displayProductsData(Hoteldata)
		}).catch(function(error) {
			console.log(error)
		})

		
		let totalprice=0;
        function displayProductsData(Hoteldata) {
			let mainContainer = document.getElementById('right-container1')
			mainContainer.innerHTML="";
			
			Hoteldata.forEach(function(product) {
				// totalprice.innerHTML = product.amount;
				// console.log("Price:",totalprice)

				// let productCard = document.createElement("div");
				// productCard.classList = 'mini-container1'

				let imag = document.createElement("div");
				imag.setAttribute("id","imag")

				let dataAll = document.createElement("div");
				dataAll.setAttribute("id","dataAll")

				let hotelImg = document.createElement("img");
				hotelImg.src = product.image;
				hotelImg.alt = 'Hotel image'
				hotelImg.classList = 'Hotel-img'

				let hotelName = document.createElement("h3");
				hotelName.innerText = product.tittle;
				
				let hotelAddr = document.createElement("p")
				hotelAddr.innerText = product.address;

				let hotelservc = document.createElement("p")
                hotelservc.innerText = product.service;
				
				imag.append(hotelImg)
				dataAll.append(hotelName, hotelAddr, hotelservc);

				//productCard.append(hotelImg, hotelName, hotelAddr, hotelservc);

				mainContainer.append(imag,dataAll);
			})
		}
		// console.log(totalprice)
		// document.getElementById("amt").textContent = totalprice;
		
		// document.getElementById("disc").textContent = totalprice - Number(totalprice *0.1);

		function getnextpage(){
			location.href="OTP.html"
		}