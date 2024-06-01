http://localhost:4000/graphql

# Queries

```graphql
query {
  book(id: 1) {
    author {
      books {
        title
      }
    }
  }
  books {
    id
    title
  }
}
```

# Add book

```graphql
mutation {
  addBook(authorId: 1, releaseYear: 2011, title: "Driver") {
    id
    authorId
    releaseYear
    title
  }
}
```

# Subscription

```graphql
subscription BookAdded {
  bookAdded {
    id
    title
    releaseYear
    authorId
  }
}
```
