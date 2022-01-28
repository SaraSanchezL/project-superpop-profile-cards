// Fichero src/services/api.js
const callToApi = (data) => {
  // Llamamos al API
  return fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then(response => response.json())
    .then(dataApi => {
      return dataApi; 
    });
};

export default callToApi;

/* fetch("https:/api.dev.com",
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => response.json()).then(data => { });*/


/*
function sendUserInfo() {
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((dataServe) => {
      if (dataServe.success === true) {
        shareCreationLink.href = dataServe.cardURL;
        for (const card of shareCardRrss) {
          card.classList.remove("collapsed");
        }
        shareCreationLink.innerHTML = dataServe.cardURL;
        messageNewCard.innerText = "La tarjeta ha sido creada:";
        twitterHref.href = `https://twitter.com/intent/tweet?text=%C2%A1Comparte%20esta%20tarjeta%20super%20molona%21&url=${dataServe.cardURL}`;
        linkedinHref.href = `https://www.linkedin.com/sharing/share-offsite/?url=${dataServe.cardURL}`;
        facebookHref.href = `http://www.facebook.com/share.php?u=${dataServe.cardURL}`;
      } else {
        for (const card of shareCardRrss) {
          card.classList.add("collapsed");
        }

        messageNewCard.innerText = "¡Error!";
        shareCreationLink.innerHTML =
          "Por favor, asegúrese de que ha cumplimentado todos los campos.";
      }
    });
}
*/