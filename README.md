# Graph QL with Express and Nodejs

Following the tutorial
[here](https://www.youtube.com/watch?v=UBGzsb2UkeY&list=WL&index=17&t=216s).

  - Start code with `npm run run`.

The following query at
http://localhost:9876/graphiql
and note the total requests
on the third commit verses subsequent commits when caching is enabled.

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
