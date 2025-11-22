  function openPopup(title, info, desc, img, link) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-info").innerText = info;
  document.getElementById("popup-desc").innerText = desc;
  document.getElementById("popup-img").src = img;

  document.getElementById("watchBtn").href = link;

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}