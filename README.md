<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex

## Ejecutar en desarrollo

1. Clonar el repositorio
   ```
   $ git clone https://github.com/BraianMG/nest-pokedex.git
   ```

2. Instalar dependencias
   ```
   $ yarn install
   ```

3. Tener Nest CLI instaldo
   ```
   $ npm i -g @nestjs/cli
   ```

4. Levantar base de datos local
   ```
   $ docker-compose up -d
   ```

5. Clonar archivo __.env.template__ y renombrar a __.env__

6. Completar información de variables de entorno

7. Ejecutar aplicación
   ```bash
   $ yarn start:dev
   ```
8. Reconstruir base de datos semilla
   ```
   http://localhost:3000/api/v2/seed
   ```

## Build de producción
1. Crear archivo __.env.prod__
2. Completar información de las variables de entorno
3. Crear la nueva imagen
   ```
   $ docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
   ```
4. Si ya se tiene la imagen creada
   ```
   $ docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
   ```

## Notas
Redeploy en Heroku sin cambios:
```
$ git commit --allow-empty -m "Trigger Heroku deploy"
$ git push heroku main
```

## Stack tecnológico
* MongoDB
* NestJS