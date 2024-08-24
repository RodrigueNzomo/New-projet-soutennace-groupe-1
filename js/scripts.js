document.addEventListener("DOMContentLoaded", function () {
  let currentUser = null;

  const loginSection = document.getElementById("login-section");
  const appSection = document.getElementById("app-section");

  // Simuler une base de données d'utilisateurs
  const users = {
    directeur: { password: "password123", role: "directeur" },
    enseignant: { password: "password456", role: "enseignant" },
    etudiant: { password: "password789", role: "etudiant" },
  };

  function login(username, password) {
    if (users[username] && users[username].password === password) {
      currentUser = { username, role: users[username].role };
      alert("Connexion réussie en tant que " + currentUser.role);
      showAppSection();
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect");
    }
  }

  function logout() {
    currentUser = null;
    showLoginSection();
  }

  function showAppSection() {
    loginSection.classList.add("d-none");
    appSection.classList.remove("d-none");
    updateNavLinks();
    loadSection("Accueil");
  }

  function showLoginSection() {
    loginSection.classList.remove("d-none");
    appSection.classList.add("d-none");
  }

  function updateNavLinks() {
    const statsLink = document.getElementById("statsLink");
    if (currentUser && currentUser.role === "directeur") {
      statsLink.style.display = "block";
    } else {
      statsLink.style.display = "none";
    }
  }

  // Fonction pour charger le contenu des sections
  function loadSection(section) {
    const contentDiv = document.getElementById("content");
    switch (section) {
      case "Accueil":
        contentDiv.innerHTML = `
                    <div class="text-center">
                        <h2>Bienvenue sur la Plateforme de Gestion Académique ENSITECH</h2>
                        <p>Cette plateforme a été spécialement conçue pour faciliter la gestion des étudiants, des enseignants, et des cours au sein de l'ENSITECH. Vous pouvez gérer toutes les informations académiques de manière centralisée et sécurisée.</p>
                        
                        <div class="row mt-4">
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Gestion des Étudiants</h5>
                                        <p class="card-text">Créez, modifiez, et consultez les profils des étudiants. Suivez leur progression académique tout au long de leur parcours.</p>
                                        <a href="#" class="btn btn-primary" data-section="Étudiants">Voir les Étudiants</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Gestion des Cours</h5>
                                        <p class="card-text">Ajoutez et modifiez les cours, assignez-les aux enseignants, et gérez les horaires de manière efficace.</p>
                                        <a href="#" class="btn btn-primary" data-section="Cours">Voir les Cours</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Gestion des Enseignants</h5>
                                        <p class="card-text">Gérez les profils des enseignants, suivez les cours qu'ils dispensent, et gérez leurs informations personnelles.</p>
                                        <a href="#" class="btn btn-primary" data-section="Enseignants">Voir les Enseignants</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5">
                            <h4>Objectifs de la Plateforme</h4>
                            <ul class="list-group">
                                <li class="list-group-item">Simplifier la gestion des données académiques</li>
                                <li class="list-group-item">Assurer la sécurité et la confidentialité des informations</li>
                                <li class="list-group-item">Faciliter la communication entre les étudiants, enseignants, et l'administration</li>
                                <li class="list-group-item">Permettre une prise de décision éclairée grâce aux rapports et statistiques</li>
                            </ul>
                        </div>

                        <div class="mt-5">
                            <h4>Comment utiliser la plateforme</h4>
                            <p>Utilisez le menu en haut de la page pour naviguer entre les différentes sections. Assurez-vous d'être connecté pour accéder aux fonctionnalités réservées à votre rôle.</p>
                        </div>
                    </div>`;
        break;
      case "Étudiants":
        contentDiv.innerHTML = `
                    <div>
                        <h2>Gestion des Étudiants</h2>
                        <p>Gérez ici les profils des étudiants inscrits à l'ENSITECH. Vous pouvez ajouter, modifier ou supprimer des informations sur les étudiants.</p>
                        <ul class="list-group mt-4">
                            <li class="list-group-item">Ajouter un nouvel étudiant</li>
                            <li class="list-group-item">Modifier les informations d'un étudiant</li>
                            <li class="list-group-item">Supprimer un étudiant</li>
                            <li class="list-group-item">Consulter la liste des étudiants</li>
                        </ul>
                    </div>`;
        break;
      case "Cours":
        contentDiv.innerHTML = `
                    <div>
                        <h2>Gestion des Cours</h2>
                        <p>Gérez ici les cours proposés par l'ENSITECH. Vous pouvez ajouter, modifier ou supprimer des cours.</p>
                        <ul class="list-group mt-4">
                            <li class="list-group-item">Ajouter un nouveau cours</li>
                            <li class="list-group-item">Modifier un cours</li>
                            <li class="list-group-item">Supprimer un cours</li>
                            <li class="list-group-item">Consulter la liste des cours</li>
                        </ul>
                    </div>`;
        break;
      case "Enseignants":
        contentDiv.innerHTML = `
                    <div>
                        <h2>Gestion des Enseignants</h2>
                        <p>Gérez ici les profils des enseignants de l'ENSITECH. Vous pouvez ajouter, modifier ou supprimer des enseignants et consulter les cours qui leur sont assignés.</p>
                        <ul class="list-group mt-4">
                            <li class="list-group-item">Ajouter un nouvel enseignant</li>
                            <li class="list-group-item">Modifier les informations d'un enseignant</li>
                            <li class="list-group-item">Supprimer un enseignant</li>
                            <li class="list-group-item">Consulter la liste des enseignants</li>
                        </ul>
                    </div>`;
        break;
      case "Administration":
        contentDiv.innerHTML = `
                    <div>
                        <h2>Administration des Rôles et Autorisations</h2>
                        <p>Attribuez des rôles spécifiques aux utilisateurs et gérez leurs autorisations d'accès aux différentes sections de la plateforme.</p>
                        <ul class="list-group mt-4">
                            <li class="list-group-item">Créer un rôle</li>
                            <li class="list-group-item">Modifier un rôle</li>
                            <li class="list-group-item">Attribuer un rôle à un utilisateur</li>
                            <li class="list-group-item">Gérer les autorisations</li>
                        </ul>
                    </div>`;
        break;
      case "Statistiques":
        if (currentUser && currentUser.role === "directeur") {
          contentDiv.innerHTML = `
                        <div>
                            <h2>Statistiques et Rapports</h2>
                            <p>Générez et consultez des rapports détaillés sur les performances académiques des étudiants, ainsi que d'autres statistiques importantes pour l'établissement.</p>
                            <ul class="list-group mt-4">
                                <li class="list-group-item">Générer un rapport de performance académique</li>
                                <li class="list-group-item">Voir les statistiques par cours</li>
                                <li class="list-group-item">Consulter les rapports des présences</li>
                            </ul>
                        </div>`;
        } else {
          contentDiv.innerHTML = `
                        <div>
                            <h2>Accès refusé</h2>
                            <p>Vous n'avez pas les autorisations nécessaires pour consulter les statistiques. Veuillez contacter l'administrateur pour plus d'informations.</p>
                        </div>`;
        }
        break;
      default:
        contentDiv.innerHTML = `<p>Section non trouvée.</p>`;
    }
  }

  // Gestion de la navigation entre les sections
  document.querySelectorAll("a[data-section]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const section = this.getAttribute("data-section");
      loadSection(section);
    });
  });

  // Gestion de la connexion utilisateur
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
  });

  // Gestion de la déconnexion utilisateur
  document.getElementById("logoutBtn").addEventListener("click", function () {
    logout();
  });

  // Charger la section Accueil par défaut si l'utilisateur est déjà connecté
  if (currentUser) {
    showAppSection();
  }
});
