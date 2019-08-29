# Ecommerce API

* Autor: César Magalhães
* Tecnologias: LoopBack, Node JS
* Resumo: API usando o LoopBack
* Linguagens: JavaScript
* Fonte: <https://github.com/cams7/ecommerce-api>
* Site: <https://warm-island-68633.herokuapp.com/explorer/>
* Linkedin: <https://br.linkedin.com/in/cams7>

## Qual a finalidade desse projeto?

Criar uma API para uma loja virtual.

## Sistemas requeridos

* [Microsoft Windows 10](https://www.microsoft.com/pt-br/software-download/windows10)
* [Ubuntu 16.04.5 LTS](http://releases.ubuntu.com/16.04/)
* [Git](https://git-scm.com/downloads)
* [LoopBack](https://loopback.io/)
* [Node JS](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Para testa o exemplo

* Instale o Git
* Instale o Node JS
* Instale o Visual Studio Code

-------------------

```sh
sudo npm install -g strongloop

cd ~/Dev/Projetos/ecommerce

mkdir ecommerce-api
cd ~/Dev/Projetos/ecommerce/ecommerce-api

slc loopback

#What's the name of your application? (ecommerce-api)
#Which version of LoopBack would you like to use? (Use arrow keys)
# 3.x (current)
#What kind of application do you have in mind? (Use arrow keys)
# api-server (A LoopBack API server with local User auth)

slc run
#Go to http://0.0.0.0:3000/explorer
#CTR-C
```

```sh
lb model

#Enter the model name: Customer
#Select the datasource to attach Customer to: ecommerceDS ...
#Select model's base class PersistedModel
#Expose Customer via the REST API? Yes
#Common model or server only? common

#Property name: name
#Property type: string
#Required? Yes

#Property name: phone
#Property type: string
#Required? Yes

#Property name: createdAt
#Property type: date
#Required? Yes

#Property name: updatedAt
#Property type: date
#Required? Yes

lb relation

#Select the model to create the relationship from: Customer
#Relation type: belongs to
#Choose a model to create a relationship with: (other)
#Enter the model name: User
#Enter the property name for the relation: user
#Optionally enter a custom foreign key: userId

lb relation

#Select the model to create the relationship from: Customer
#Relation type: has many
#Choose a model to create a relationship with: Order
#Enter the property name for the relation: orders
#Optionally enter a custom foreign key: customerId
#Require a through model? No

lb relation

#Select the model to create the relationship from: Customer
#Relation type: has many
#Choose a model to create a relationship with: ProductReview
#Enter the property name for the relation: reviews
#Optionally enter a custom foreign key: customerId
#Require a through model? No

#-------------------------------------------------

lb model

#Enter the model name: Order
#Select the datasource to attach Order to: ecommerceDS ...
#Select model's base class PersistedModel
#Expose Order via the REST API? Yes
#Common model or server only? common

#Property name: quantity
#Property type: number
#Required? Yes

#Property name: subtotal
#Property type: number
#Required? Yes

#Property name: status
#Property type: number
#Required? Yes

#Property name: createdAt
#Property type: date
#Required? Yes

#Property name: updatedAt
#Property type: date
#Required? Yes

lb relation

#Select the model to create the relationship from: Order
#Relation type: belongs to
#Choose a model to create a relationship with: Customer
#Enter the property name for the relation: customer
#Optionally enter a custom foreign key: customerId

lb relation

#Select the model to create the relationship from: Order
#Relation type: has many
#Choose a model to create a relationship with: OrderItem
#Enter the property name for the relation: items
#Optionally enter a custom foreign key: orderId
#Require a through model? No

#-------------------------------------------------

lb model

#Enter the model name: OrderItem
#Select the datasource to attach OrderItem to: ecommerceDS ...
#Select model's base class PersistedModel
#Expose OrderItem via the REST API? Yes
#Common model or server only? common

#Property name: productCost
#Property type: number
#Required? Yes

#Property name: quantity
#Property type: number
#Required? Yes

lb relation

#Select the model to create the relationship from: OrderItem
#Relation type: belongs to
#Choose a model to create a relationship with: Order
#Enter the property name for the relation: order
#Optionally enter a custom foreign key: orderId

lb relation

#Select the model to create the relationship from: OrderItem
#Relation type: belongs to
#Choose a model to create a relationship with: Product
#Enter the property name for the relation: product
#Optionally enter a custom foreign key: productId

#-------------------------------------------------

lb model

#Enter the model name: Product
#Select the datasource to attach Product to: ecommerceDS ...
#Select model's base class PersistedModel
#Expose Product via the REST API? Yes
#Common model or server only? common

#Property name: name
#Property type: string
#Required? Yes

#Property name: pricing
#Property type: number
#Required? Yes

#Property name: description
#Property type: string
#Required? No

#Property name: published
#Property type: boolean
#Required? Yes

#Property name: ratingCache
#Property type: number
#Required? No

#Property name: ratingCount
#Property type: number
#Required? No

#Property name: createdAt
#Property type: date
#Required? Yes

#Property name: updatedAt
#Property type: date
#Required? Yes

lb relation

#Select the model to create the relationship from: Product
#Relation type: has many
#Choose a model to create a relationship with: OrderItem
#Enter the property name for the relation: items
#Optionally enter a custom foreign key: productId
#Require a through model? No

lb relation

#Select the model to create the relationship from: Product
#Relation type: has one
#Choose a model to create a relationship with: StoredProduct
#Enter the property name for the relation: stored
#Optionally enter a custom foreign key: productId

lb relation

#Select the model to create the relationship from: Product
#Relation type: has many
#Choose a model to create a relationship with: ProductReview
#Enter the property name for the relation: reviews
#Optionally enter a custom foreign key: productId
#Require a through model? No

lb relation

#Select the model to create the relationship from: Product
#Relation type: has many
#Choose a model to create a relationship with: ProductImage
#Enter the property name for the relation: images
#Optionally enter a custom foreign key: productId
#Require a through model? No

#-------------------------------------------------

lb model

#Enter the model name: StoredProduct
#Select the datasource to attach StoredProduct to: ecommerceDS ...
#Select model's base class PersistedModel
#Expose StoredProduct via the REST API? Yes
#Common model or server only? common

#Property name: quantity
#Property type: number
#Required? Yes

#Property name: subtotal
#Property type: number
#Required? Yes

lb relation

#Select the model to create the relationship from: StoredProduct
#Relation type: belongs to
#Choose a model to create a relationship with: Product
#Enter the property name for the relation: product
#Optionally enter a custom foreign key: productId

#-------------------------------------------------

lb model

#Enter the model name: ProductReview
#Select the datasource to attach ProductReview to: ecommerceDS ...
#Select model's base class PersistedModel
#Expose ProductReview via the REST API? Yes
#Common model or server only? common

#Property name: rating
#Property type: number
#Required? Yes

#Property name: comment
#Property type: string
#Required? Yes

#Property name: approved
#Property type: boolean
#Required? Yes

#Property name: spam
#Property type: boolean
#Required? Yes

#Property name: createdAt
#Property type: date
#Required? Yes

#Property name: updatedAt
#Property type: date
#Required? Yes

lb relation

#Select the model to create the relationship from: ProductReview
#Relation type: belongs to
#Choose a model to create a relationship with: Product
#Enter the property name for the relation: product
#Optionally enter a custom foreign key: productId

lb relation

#Select the model to create the relationship from: ProductReview
#Relation type: belongs to
#Choose a model to create a relationship with: Customer
#Enter the property name for the relation: customer
#Optionally enter a custom foreign key: customerId

#-------------------------------------------------

lb model

#Enter the model name: ProductImage
#Select the datasource to attach ProductImage to: ecommerceDS ...
#Select model's base class PersistedModel
#Expose ProductImage via the REST API? Yes
#Common model or server only? common

#Property name: icon
#Property type: string
#Required? Yes

#Property name: size
#Property type: number
#Required? Yes

lb relation

#Select the model to create the relationship from: ProductImage
#Relation type: belongs to
#Choose a model to create a relationship with: Product
#Enter the property name for the relation: product
#Optionally enter a custom foreign key: productId
```

```sh
sudo -i -u postgres
psql -d template1 -U postgres
CREATE USER ecommerce_admin WITH PASSWORD '12345';
CREATE DATABASE ecommerce;
GRANT ALL PRIVILEGES ON DATABASE ecommerce to ecommerce_admin;
\q
exit

lb datasource

#Enter the datasource name: ecommerceDS
#Select the connector for ecommerceDS: PostgreSQL ...
#Connection String url to override other settings (eg: postgres://username:password@localhost/database):
#host: 127.0.0.1
#port: 5432
#user: ecommerce_admin
#password:12345
#database: ecommerce
#Install loopback-connector-postgresql@^2.4 Yes

npm install async -save
```

```sh
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ "username": "admin", "email": "admin@teste.com", "password": "12345" }' 'http://0.0.0.0:3000/api/Users'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"username":"admin", "password":"12345"}' 'http://0.0.0.0:3000/api/Users/login'
curl -X PATCH --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{}' 'http://0.0.0.0:3000/api/Users/1?access_token=TOKEN'
```

```sh
cd ~/Dev/Angular2/Exemplos/scotch/scotch-http
ng build --prod

rm -r  ~/Dev/Angular2/Exemplos/scotch/scotch-api/client/*
cp -r ~/Dev/Angular2/Exemplos/scotch/scotch-http/dist/*  ~/Dev/Angular2/Exemplos/scotch/scotch-api/client
```

## Para fazer o build da aplicação do Loopback no Heroku, acesse o [passo a passo](https://elements.heroku.com/buildpacks/strongloop/strongloop-buildpacks)

```sh
cd ~/Dev/Projetos/ecommerce/ecommerce-api


heroku apps:create --buildpack https://github.com/strongloop/strongloop-buildpacks.git
heroku addons:add heroku-postgresql:hobby-dev

heroku pg:psql DATABASE_URL

git push heroku master

heroku open
```