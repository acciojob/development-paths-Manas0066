//your JS code here. If required.
const path = ["Cloud", "Desktop", "Video Sport", "Mobile", "Web"];
const ui = document.getElementById("devs");

path.forEach(path=>{
	const li = document.createElement("li");
	li.textContent = path + " development";
	ui.appendChild(li);
});