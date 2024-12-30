# Base Node.js 18
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et installer les dépendances
COPY ./package*.json ./ 
RUN npm install

# Copier le fichier app.js directement au bon endroit
COPY ./app.js ./app.js 
COPY ./db.js ./db.js
COPY ./public ./public  

# Exposer le port
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "app.js"]
