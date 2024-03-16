import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let yourName = variables.name == null ? "Lucy" : `${variables.name}`;
  let yourLastName =
    variables.lastName == null ? "Boilett" : `${variables.lastName}`;
  let yourProfession =
    variables.profession == null ? "Web Developer" : `${variables.profession}`;
  let yourCity = variables.city == null ? "Miami" : `${variables.city}`;
  let yourCountry = variables.country == null ? "USA" : `${variables.country}`;
  let yourTwitter =
    variables.twitter == null
      ? "https://twitter.com/"
      : `https://twitter.com/${variables.twitter}`;
  let yourGithub =
    variables.github == null
      ? "https://github.com/"
      : `https://github.com/${variables.github}`;
  let yourLinkedin =
    variables.linkedin == null
      ? "https://linkedin.com/"
      : `https://linkedin.com/${variables.linkedin}`;
  let yourInstagram =
    variables.linkedin == null
      ? "https://instagram.com/"
      : `https://instagram.com/${variables.instagram}`;
  // reset the website body with the new html output
  document.querySelector(
    "#widget_content"
  ).innerHTML = `<div class="widget mx-auto">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${yourName} ${yourLastName}</h1>
          <h2>${yourProfession}</h2>
          <h3>${yourCity}, ${yourCountry}</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a href=${yourTwitter}><i class="fab fa-twitter fs-5"></i></a></li>
            <li><a href=${yourGithub}><i class="fab fa-github fs-5"></i></a></li>
            <li><a href=${yourLinkedin}><i class="fab fa-linkedin fs-5"></i></a></li>
            <li><a href=${yourInstagram}><i class="fab fa-instagram fs-5"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "src/images/10-4--thumb.png",
    // this is the url for the profile avatar
    avatarURL: "src/images/3c67757cef723535a7484a6c7bfbfc43.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    profession: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
