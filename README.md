# Todo-List Project
## Prérequis
- Docker et Docker Compose installés.
- Node.js (pour développement local).

## Le fichier .env
```bash
PORT=3000
DB_HOST=mysql
DB_USER=user
DB_PASSWORD=password
DB_NAME=todo_db
``` 

## Initialiser le projet
```bash
npm install
``` 

## Lancer avec Docker
```bash
docker-compose up
``` 


# Avec Ansible
## Prérequis
- Ansible installé sur la machine.
- Docker et Docker Compose installés sur la machine cible.

## Déploiement
### 1. Déployer l'infrastructure
```bash
ansible-playbook -i inventory/production playbooks/deploy_infrastructure.yml
``` 
### 2. Déployer le projet
```bash
ansible-playbook -i inventory/production playbooks/deploy_project.yml
``` 

## Déploiement
- URL : http://<adresse-ip>
- Port : 80
```yaml 
---

### Prochaines étapes
1. **Testez les playbooks localement ou dans un environnement simulé.**
2. Si tout semble correct, finalisez la documentation.

Souhaitez-vous que je prépare un guide pour les tests ou des fichiers supplémentaires ? 😊
``` 
