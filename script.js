const rocket =
document.getElementById("rocket");

document.addEventListener("mousemove", (e) => {
    rocket.style.left = e.clientX
    + "px";
    rocket.style.top = e.clientY +
    "px";
    rocket.style.transform =
 "transalate(-50%, -50%) rotate(45deg)";
});