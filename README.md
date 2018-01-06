# Boman Boilerplate - Node.js | GraphQL | FAST

Rapid prototyping of GraphQL backend applications using Node.js.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
git clone https://github.com/bermanboris/boman-boilerplate
```

### Installing

A step by step series of examples that tell you have to get a development env running

Installation using Yarn:

```
yarn install
```

or NPM:

```
npm install
```

## Running the server

You can start the server using:

```
yarn start
```

or using NPM:

```
npm start
```

You can find "GraphiQL" UI on the http://localhost:5050/graphiql

Get all users:

```gql
{
  getUsers {
    name
    age
  }
}
```

or add new user:

```gql
mutation {
  addUser(name: "Michael", age: 18) {
    name
    age
  }
}
```

## Controllers

You can add custom controller by creating JS file inside "controllers" directory.
For example, let's create "UserController".

`/controllers/UserController.js`

```js
import { RootController } from 'boman';

@RootController
class UserController {
  hello() {
    return 'hi';
  }
}

export default UserController;
```

When you create new class controller, you need to decorate it with "RootController"
decorator from "boman" npm package. This way you get access to "express" request
object (`this.req`) in your controller, and the db models (`this.models`).

Controller automatically passed to all your resolvers context, and you can
use them immediately without doing extra work.

Let's try using UserController we've just created:
`/graphql/resolvers.js`

```js
export default {
  Query: {
    sayHello(parent, args, { UserController }) {
      return UserController.hello();
    }
  }
};
```

Like you can see, "it just works" out of the box!
Don't forget to add GraphQL type to the type.gql file. Let's add it:

`/graphql/type.gql`

```gql
type Query {
  sayHello: String!
}
```

And we're done!

## Built With

* [Boman](https://github.com/bermanboris/boman) - Node.js GraphQL Framework

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Boris Berman** - _Creator_ - [Boris Berman](https://github.com/bermanboris)

See also the list of [contributors](https://github.com/bermanboris/boman-boilerplate/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
