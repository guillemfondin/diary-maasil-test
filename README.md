## Test
### Votre mission, si vous l'acceptez
En vous servant du paquet 'api-service', déjà déclarée depuis packages.json, librairie développée afin d'interfacer l'API à différentes applications front. la doc est disponible ici : [doc.semardel.agence-massai.fr](https://doc.semardel.agence-massai.fr) et vous permettra de récupérer les données à afficher sur le site.
La doc API est accessible ici : [doc API](https://api.dev.semardel.agence-massai.fr/)

Vous développerez les pages :
* Home => route : "/"
* Actualités => route : "/actualite"
* Affichage d'une actualité : "/actualite/{id}

En respectant la maquette suivante : [Maquette figma](https://www.figma.com/proto/bXXwSCCz4id3rc0AmaaR9s/CITD-home-page?node-id=1%3A2&viewport=-2081%2C248%2C0.8173831701278687&scaling=min-zoom)

Certaines données présentent dans les maquettes (notamment sur la Home) ne sont pas encore accessible depuis l'API. Il n'y a donc pas de problèmes à écrire certains blocs de texte "en dur", excepté pour la partie Actualités/News.

Une attention particulière sera porté à l'architecture du code, ainsi qu'au respect des maquettes. Une version responsive serai également un grand plus !



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
docker-compose up
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
