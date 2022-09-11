<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex

## Ejecutar en desarrollo

### 1. Clonar el repositorio
```
$ git clone https://github.com/BraianMG/nest-pokedex.git
```

### 2. Instalar dependencias
```
$ yarn install
```

### 3. Tener Nest CLI instaldo
```
$ npm i -g @nestjs/cli
```

### 4. Levantar base de datos
```
$ docker-compose up -d
```

### 5. Clonar archivo __.env.template__ y renombrar a __.env__

### 6. Completar información de variables de entorno

### 7. Ejecutar aplicación
```bash
$ yarn start:dev
```
### 8. Reconstruir base de datos semilla
```
http://localhost:3000/api/v2/seed
```

## Stack tecnológico
* MongoDB
* NestJS

## Notas
Redeploy en Heroku sin cambios:
```
git commit --allow-empty -m "Trigger Heroku deploy"
git push heroku main
```