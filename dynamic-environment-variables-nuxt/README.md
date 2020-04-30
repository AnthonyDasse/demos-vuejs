# dynamic-environment-variables-nuxt

> Projet démo présentant une façon de charger des variables d'environnement dans une application Nuxt packagée.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Deployment

Le dossier [/deployment](deployment/) contient un exemple de déploiement Kubernetes ainsi qu'un exemple de docker file.

Pour créer la ConfigMap : 

```bash
kubectl create configmap webapp-config --from-file=static/config.json
```
