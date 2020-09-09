Passo a passo para obter o projeto. 



#clone o projeto ou faça downoload : https://github.com/Gabriel200395/API-FORM.git
#entre na pasta: cd API-FORM 
#baixa as independencias:  npm install e depois npm install cors --save
#execute o projeto: npm run server



CRONOGRAMA DO PROJETO LOGO ABAIXO.

1 - demos um npm init para criar o nosso package 
2 - instalamos o npm install express para verificar as nossas rotas 
3 - instalamos npm install -D nodemon para atualizar a nossa aplicação e criar um server 
no nosso package para rodar
 
----------------------------------------------- 

Banco de Dados  

//Instalar o Mongo 

npm install --save mongodb 

// instalar o mongose - para traduzir os dados do banco de dados para objetos javaScript para que passam ser utilizados por sua aplicação. 

npm install --save mongoose 

Validação de Schema 
https://mongoosejs.com/docs/guide.html 

Cors 

Instalação do cors
npm install cors
https://www.npmjs.com/package/cors

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

