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
Auto-éval :
J'ai l'impression d'avoir bien réussi et plutôt bien compris le fonctionnement de express.

Difficultés :
1. Problème de commit : quand on fait un commit on se prends un message d'erreur 
(probablement lié au fait que le système n'arrive pas à se connecter à gitHub), mais les modifications apportées au fichier
ne sont plus indiqué.

2. Je ne sais pas comment ajouter le compteur d'appel dans le get.

3. la route "cofffe" ne fonctionne pas, elle me renvoie la réponse du get normal.