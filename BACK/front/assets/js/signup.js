let form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log('Envoi du form detecté !')


//vérification de l'email pour succès


    //let email = document.querySelector('#email')

    
    let errorContainer = document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')

    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')
   
    let email = document.querySelector('#email')

    if(email.value == '') { //si le champ email est vide
 
        errorContainer.classList.add('visible') //ajouter le css du message d'erreur
        email.classList.remove('success') //enlever le css de la vérification réussie
    
        let err = document.createElement('li')
        err.innerText = "Le champ email ne peut pas être vide"//alors afficher ce message
    
        errorList.appendChild(err)
    
    } else { //sinon montrer que c'est respecté et afficher en vert
        email.classList.add('success') //ajouter le css de la vérification réussie
        errorContainer.classList.remove('visible') //enlever le css du message d'erreur
    
    }

    //voir si le prenom contient des caractères
    let prenom = document.querySelector('#prenom')

    if(prenom.value == '') {//si le prenom n'a pas de caractères

        errorContainer.classList.add('visible')
        prenom.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ prenom ne peut pas être vide" //alors afficher ce message

        errorList.appendChild(err)

    } else { //sinon montrer que c'est respecté et afficher en vert

        prenom.classList.add('success')

    }

    
    let nom = document.querySelector('#nom')

    if(nom.value == '') { 

        errorContainer.classList.add('visible')
        nom.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ nom ne peut pas être vide"

        errorList.appendChild(err)

    } else {

        nom.classList.add('success')

    }

    let identifiant = document.querySelector("#identifiant");

  if (identifiant.value == "") {
    //si le prenom n'a pas de caractères

    errorContainer.classList.add("visible");
    identifiant.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ identifiant ne peut pas être vide"; //alors afficher ce message

    errorList.appendChild(err);
  } else {
    //sinon montrer que c'est respecté et afficher en vert

    identifiant.classList.add("success");
  }
    
    //vérifier si le mot de passe respcete les majuscules, chiffre obligatoires etc
    let password = document.querySelector('#password')

    let passCheck = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    if(password.value.length < 10 || passCheck.test(password.value) == false) {

        errorContainer.classList.add('visible')
        password.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial"

        errorList.appendChild(err)
    } else {
        password.classList.add('success')
    }
    
    //vérifier si le mot de passe est le même
    let passwordInitial = document.querySelector('#password')
    let passwordRepeat = document.querySelector('#password2')

    //si #password =/= #password2 et que leur valeur sont vides
    if(passwordInitial.value != passwordRepeat.value || passwordInitial.value === '' || passwordRepeat.value === '') {

        errorContainer.classList.add('visible')
        passwordRepeat.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Les mots de passes sont différents" //alors afficher ce message d'erreur

        errorList.appendChild(err)

    } else {
        passwordRepeat.classList.add('success')
    }


    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if(
        prenom.classList.contains('success') &&
        nom.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        passwordRepeat.classList.contains('success') &&
        motivation.classList.contains('success') &&
        genreSelect.classList.contains('success') &&
        moisAnnee.classList.contains('success') 
    ) {
        successContainer.classList.add('visible')
    }

    let motivation  =   document.querySelector('#motivation')
    if(motivation.value.length < 150) { //si la lettre de motivation a moins de 150 caractères

        errorContainer.classList.add('visible')
        motivation.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ motivation doit contenir au moins 150 caractères"

        errorList.appendChild(err)

    } else {

        motivation.classList.add('success') 
    }

    let genreSelect = document.querySelector('#genre-select')
    if(genreSelect.value == ''){
    errorContainer.classList.add('visible')
        genreSelect.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Vous devez choisir votre genre"

        errorList.appendChild(err)

    } else {

        genreSelect.classList.add('success') 
    }

    let moisAnnee = document.querySelector('#mois-annee')
    if(moisAnnee.value == ''){
    errorContainer.classList.add('visible')
        genreSelect.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Vous devez choisir votre mois et année de naissance"

        errorList.appendChild(err)

    } else {

        moisAnnee.classList.add('success') 
    }


})


    