# whisperwall
Para el desarrollo se uso: 
* Back: NodeJS
* DB: Mysql
* Front: React + Vite


Para el deploy: 
* Front: Github Pages
* Back: Fly.io
* DB: RDS AWS

## Github Pages
Se hizo el deploy aqui porque es gratis y automatizado con los workflows actions
* https://vitejs.dev/guide/static-deploy.html#github-pages
* https://github.com/josuerobld/WhisperWall-App
* https://www.youtube.com/watch?v=TgfD0pywZAQ

Si son sitios no estaticos, agregar esto en el jekyll-gh-pages.yml para que redireccione corretamente
```
- name: Build
run: npm run build
- name: Copy index.html to 404.html
run: cp ./dist/index.html ./dist/404.html
```
## Fly.io
Se uso porque brinda el API en https, de manera gratuita, sin tarjeta y por consumo.

Internamente usa docker para hacer los deploy automaticamente.
* https://fly.io/docs/apps/deploy/
* https://youtu.be/xLoILOdqW2U
* https://fly.io/
