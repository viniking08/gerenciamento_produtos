
# Gerenciador de Produtos

Essa API serve para gerenciar produtos, permitindo cadastrar, listar, editar e excluir produtos, além de consultar por categoria e verificar o estoque.

## Como executar

1. Executar o script SQL no banco de dados.
2. Configurar o arquivo `.env`.
3. Instalar as dependências com `npm install`  (node nodemon express dotenv mysql2).
4. Iniciar com `npm run start`.

## Rotas

- `GET /produto` – listar produtos.
- `GET /produto/:id` – buscar por ID.
- `POST /produto` – cadastrar produto.
- `PATCH /produto/:id` – editar produto com ou sem todas as informações.
- `DELETE /produto/:id` – excluir produto.
- `GET /produto/:id/categoria` – buscar produto por categoria.
- `GET /produto/zerado` – produtos sem estoque.
- `GET /produto/normal` – produtos com estoque normal.
- `GET /produto/baixo` – produtos com estoque baixo.
