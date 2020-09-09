<html>
    <h3>Esse aqui e o crud da aplicação de cadastro de alunos, fazendo a integração com o banco</h3>
    <body>
        <h5>Passo a passo para obter o projeto. <h5>
         <ul>
         <li>#clone o projeto ou faça downoload : https://github.com/Gabriel200395/API-FORM.git</li>
         <li>#entre na pasta: cd API-FORM</li>
         <li>#baixa as independencias:  npm install e depois npm install cors --save</li>
         <li>#execute o projeto: npm run server</li>
        </ul>
         <br /> 
         <h5>Banco de Dados</h5>
         <ul>
          <li>1 - npm install --save mongodb</li>
          <li>2 - npm install --save mongoose </li>
          <li>3 - Validação de Schema https://mongoosejs.com/docs/guide.html</li>
          <li>4 - Instalação do cors npm install cors https://www.npmjs.com/package/cors</li>
         </ul> 
    </body>
</html>
 
-----------------------------------------------------------------------


Passo a passo como criar as funcionalidades

1- criamos as nossa rota normalmente com "/usuario" e passando o find({})
para buscar cada elemento no meu banco isso e o GET ai passando como resposta
esse usuario como json e criamos um metado de catch caso gera algum erro.  


2- criamos as nossa rota normalmente com "/usuario/:id" e passando o findOne({_id: req.params.id})
para buscar cada _id no meu banco isso e o GET ai passando como resposta
esse usuario como json e criamos um metado de catch caso gera algum erro. 


3- criamos as nossa rota normalmente com "/usuario" e passando o Create(req.body)
para adicionar cada usuário no banco isso e o POST ai passando uma condicao retornado o erro caso o usuário não consiga fazer o cadastro, mais caso consigar retornado a message sucessso e o status de 200


4- criamos as nossa rota normalmente com "/usuario/:id" e passando o deleteOne({_id: req.params.id})
para deletar cada _id no meu banco isso e o Delete ai passando uma condicao retornado o erro caso o usuário não consiga fazer o cadastro, mais caso consigar retornado a message sucessso e o status de 200


5- modificando o id no meu banco com o updateOne({_id: req.params.id}, req.body) para ser atualizado no meu banco.

6 - habilitamos o cors para fazer as nossas requições com o banco sem a interferência do navegador.

