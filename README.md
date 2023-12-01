# q3-prova-WEB2

# Documentação da API q3-prova-WEB2

## Rotas da API

Esta API oferece as seguintes rotas para interagir com recursos de usuários:

### **GET**
Endpoint para obter informações sobre usuários com base no parâmetro `id`.

- **URL:**
http://localhost:3000/user/?id=?

- **Parâmetros:**
- `id` (opcional): Identificador único do usuário.

- **Exemplo de Uso:**
- Para obter todos os usuários: `http://localhost:3000/user/`
- Para obter um usuário específico pelo ID: `http://localhost:3000/user/?id=1`

### **POST (Adicionar Usuário)**
Endpoint para adicionar um novo usuário à base de dados.

- **URL:**

http://localhost:3000/user/


- **Método:**
- **POST**

- **Headers:**

{
"Content-Type": "application/json"
}

- **Corpo da Requisição:**

{
"name": "Um Nome",
"email": "email@email.com",
"data_nascimento": "00/00/00"
}


- **Resposta Esperada:**
- Espera-se a resposta contendo o usuário adicionado.

### **PATCH**
Endpoint para atualizar informações de um usuário com base no ID.

- **URL:**
http://localhost:3000/user/:id


- **Método:**
- **PATCH**

- **Headers:**

{
"Content-Type": "application/json"
}

- **Corpo da Requisição:**
- O corpo da mensagem não precisa incluir todas as chaves do usuário, apenas aquelas que deseja modificar e seus respectivos valores. Chaves que não existem no usuário serão desconsideradas.

{
"name": "Novo Nome",
"email": "novo@email.com"
}


- **Resposta Esperada:**
- Retorna o usuário atualizado.

### **DELETE**
Endpoint para excluir um usuário com base no ID.

- **URL:**
http://localhost:3000/user/:id

- **Método:**
- **DELETE**

- **Resposta Esperada:**
- Espera-se que retorne todos os usuários, exceto o usuário com o ID correspondente que foi removido.

