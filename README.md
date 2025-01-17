## Consigne

1. Créer une nouvelle branche nommée "test17_<votre_nom>" [max 4 lettres du nom de famille, sans espace, sans accent] (exemple: test17_houm):
git checkout -b <branch_name>

2. Si pas déjà fait, installer Express et Nodemon:  
npm install express --save  
npm install nodemon --save-dev

3. Installer Sequelize et le driver MySQL:  
npm install sequelize --save  
npm install mysql2 --save-dev

4. Créer la base de données MySQL pour les Pokemons (p. ex "db_pokemons")

5. Renseigner les informations de connexion au serveur MySQL:
Copier 'example.env.mjs' et renommer le nouveau fichier 'env.mjs', dans lequel on renseignera l'utilisateur et son mot de passe.
On évite ainsi de publier les informations de connexion sur GIT.

6. Incrémenter la version dans "package.json"

7. Commit et push

## Auto-évaluation, difficultés rencontrées

Le test c'est bien passé. J'ai réussie à tout réalisé meme les bonus comme le 418 et le message pour l'exercice 3.

J'ai passé un long moment sur l'exercice 5 car je croyais qu'il fallait mettre le compteur dans le fichier app.mjs. Mais ducoup je l'ai mis dans toutes les routes et maintenant tout marche.

J'ai aussi eu de la peine avec les vailadtion de dimention car j'avais oublié d'ajouter le allowNull: false mais je l'ai mis et tout fonctionne à la pérfection maintenant.