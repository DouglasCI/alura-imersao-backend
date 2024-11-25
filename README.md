## Projeto Instabytes pela Alura
### Ele imita uma rede social em que o usuário pode postar imagens.
### O projeto envolve apenas o desenvolvimento do backend da aplicação, com uma API que permite resgatar as imagens dos posts, dar upload de novos posts e atualizá-los.
#### Tecnologias envolvidas:
- Node.js para o desenvolvimento do backend 
- MongoDB para a persistência dos dados
- Integração com o Google Gemini para a geração automática de descrições para as imagens enviadas
- Publicação no Google Cloud para acesso público da API
#### É possível interagir com a API desenvolvida através desse [link](https://alura-imersao-backend-670061950429.southamerica-east1.run.app/posts).
- Uma requisição **GET** para a rota `/posts` mostra os dados de todos os posts
- Uma requisição **POST** para a rota `/posts` permite a adição manual de uma postagem
- Uma requisição **POST** para a rota `/upload` permite o upload de um post com um arquivo de imagem
- Uma requisição **PUT** para a rota `/upload` seguido pelo identificador de um post permite alterar dado post
