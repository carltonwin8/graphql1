# Graph QL with Express and Nodejs

Following the tutorial
[here](https://www.youtube.com/watch?v=UBGzsb2UkeY&list=WL&index=17&t=216s).

  - Start database with `node db.js`.
  - Then start server with `babel-node index.js`.

The following query at `${baseURL}\graphiql` and note the total requests
on the second commit verses subsequent commits when caching is enabled.

```GraphQl
{
	person (id: "0") {
		firstName
    friends {
      firstName
      friends {
        firstName
        friends {
          firstName
            friends {
              firstName
            }
        }
      }
    }
	}
}
```
