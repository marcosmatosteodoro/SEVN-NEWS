Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Executando aplicação

Instale as dependências
Execute a build
Execute a aplicação

```bash
npm install
npm run build
npm run start
# or
yarn
yarn build
yarn start
```

Abra  [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado..

<!-- Ou pode abrir [https://sevn-news-nine.vercel.app/](https://sevn-news-nine.vercel.app/) para ver sua versão hospedada na vercel -->

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente o Inter, uma fonte personalizada do Google.

## Leia Mais

Este projeto está consumindo uma API externa, ou seja é necessário iniciar o projeto ```https://github.com/marcosmatosteodoro/SEVN-NEWS-API``` para que este consuma suas informações

Por parão se espera que ele esteja rodando em `http://localhost:3001`, caso haja alguma modificação, se faz necessário alterar o endereço na variável `NEXT_PUBLIC_API_URL`que se encontra no arquivo `.env`
