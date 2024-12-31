
## Projet Todo-List avec Ansible

## Roadmap

- Introduction
- Description du Projet
- Prérequis
- Déploiement avec Ansible
- Accéder au Projet
- Membres du Groupe
## Introduction

Ce projet a été conçu dans le cadre d'un TP visant à automatiser le déploiement d'une application web avec Ansible. Le projet Todo-List est une application simple qui permet de gérer des tâches via une interface web et une base de données MySQL.




# Description du Projet

Le projet a été développé from scratch pour répondre aux objectifs pédagogiques du TP.

Caractéristiques :
Frontend minimal : Une interface HTML/JavaScript accessible depuis un navigateur.
Backend : API Node.js pour gérer les tâches.
Base de données : MySQL pour le stockage.
Déploiement : Automatisé via Docker, Docker Compose et Ansible.
Lien vers le dépôt Git : https://github.com/choeurtis18/tp-ansible



    
## Prérequis

**Machine cible:** Ubuntu ou Debian installé.
Docker et Docker Compose configurés.

**Machine Ansible:** Ansible installé.
Accès SSH à la machine cible.

**Fichier d'inventaire:** Exemple (inventory/production) :

```app
192.168.1.100 ansible_user=ubuntu ansible_become=true
```
**Configuration des variables:** 

Le fichier .env est pré-configuré dans roles/app/files :
 un fichier .env.example y est disponible

```env
PORT=3000
DB_HOST=mysql
DB_USER=user
DB_PASSWORD=password
DB_NAME=todo_db
```
## Déploiement avec Ansible

1. Déployer l'infrastructure
Ce playbook configure les services nécessaires pour faire fonctionner l'application :

Installation de Nginx, MySQL, et Docker.
Configuration des bases de données et des fichiers nécessaires.
Exécutez la commande suivante :

```bash
ansible-playbook -i inventory/production playbooks/deploy_infrastructure.yml --ask-become-pass
```

2. Déployer le projet

Ce playbook déploie l'application sur l'infrastructure configurée :

Téléchargement du code depuis Git.
Installation des dépendances.
Lancement des conteneurs via Docker Compose.
Exécutez la commande suivante :

```bash
ansible-playbook -i inventory/production playbooks/deploy_project.yml --ask-become-pass
```

## Accéder au Projet

Une fois le déploiement terminé, accédez à l'application via un navigateur web :

URL : http://localhost:3000/



## 🔗 Membres du Groupe

- Choeurtis : choeurtis18
- Mouhamadou : Mouhamadou-Soumare

