function showPlanet(planet) {
  const planets = document.getElementsByClassName("planet-info");

  for (let i = 0; i < planets.length; i++) {
    planets[i].style.display = "none";
  }

  document.getElementById(planet).style.display = "block";
}
