export const openCloseFormContact = photographer => {
    // Sélection des éléments HTML liés au formulaire de contact
    const contactBtn = document.querySelector(".contact_button");
    const contactModal = document.querySelector(".modal_wrapper");
    const closeModal = document.querySelector(".btn_form_close");
    const formName = document.querySelector(".modal_form_name");

    // Écouteur d'événements pour ouvrir le formulaire de contact lors du clic sur le bouton
    contactBtn.addEventListener("click", () => {
        contactModal.style.display = "flex";
        formName.innerHTML = photographer.name; // Affichage du nom du photographe dans le formulaire
        closeModal.focus(); // Met le focus sur le bouton de fermeture du formulaire
    });

    // Écouteur d'événements pour fermer le formulaire de contact lors du clic sur le bouton de fermeture
    closeModal.addEventListener("click", () => contactModal.style.display = "none");
};


// Fonction pour valider les données saisies dans un formulaire
export const validateForm = () => {
    const form = document.querySelector('.modal_form form'); 
    const firstName = document.querySelector("#firstname"); 
    const lastName = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message"); 

    // Ajout d'un écouteur d'événements pour les changements dans le formulaire
    form.addEventListener('input', () => displayCustomMessage());

    // Ajout d'un écouteur d'événements pour la soumission du formulaire
    form.addEventListener('submit', e => {
        e.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Vérifie la validité du formulaire et affiche des messages personnalisés si nécessaire
        if (!form.checkValidity()) displayCustomMessage();
        else {
            // Si le formulaire est valide, récupère les données et réinitialise le formulaire
            const formDatas = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                message: message.value,
            };
            document.querySelectorAll('.formField').forEach(input => input.classList.remove('valid'));
            form.reset();
        };
    });

    // Fonction pour vérifier la validité d'un champ selon une expression régulière
    const checkInputValidity = (input, regex) => {
        const errorMessage = input.dataset.error;
        const messageProvider = input.nextElementSibling;
        const isValid = regex.test(input.value);

        // Vérifie si les données saisies correspondent à l'expression régulière fournie
        if (isValid) {
            // Si les données sont valides, efface les messages d'erreur et met à jour les classes CSS
            messageProvider.innerHTML = "";
            messageProvider.removeAttribute("role");
            input.removeAttribute("aria-invalid");
        } else {
            // Si les données ne sont pas valides, affiche un message d'erreur et met à jour les classes CSS
            messageProvider.innerHTML = errorMessage;
            messageProvider.setAttribute("role", "alert")
            input.setAttribute("aria-invalid", "true");
        }

        // Ajoute ou supprime les classes CSS pour indiquer la validité du champ
        input.classList.toggle('invalid', !isValid);
        input.classList.toggle('valid', isValid);
    };

    // Fonction pour vérifier la validité de chaque champ du formulaire
    const displayCustomMessage = () => {
        // Expressions régulières pour la validation des différents champs
        const regexName = /^([A-Za-z|\s]{3,15})?([-]{0,1})?([A-Za-z|\s]{3,15})$/;
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const regexMessage = /^[A-Za-z0-9|\s]{20,200}$/;

        // Vérifie la validité de chaque champ en appelant checkInputValidity pour chacun
        checkInputValidity(firstName, regexName);
        checkInputValidity(lastName, regexName);
        checkInputValidity(email, regexEmail);
        checkInputValidity(message, regexMessage);
    };
};
