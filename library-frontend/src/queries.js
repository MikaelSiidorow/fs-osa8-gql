import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
  query authorQuery {
    allAuthors  {
      name
      born
      bookCount
    }
  }
`

export const ALL_BOOKS = gql`
  query bookQuery {
    allBooks  {
      title
      published
      author
      genres
    }
  }
`

export const ADD_BOOK = gql`
  mutation addBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      title
      published
      author
      id
      genres
    }
  }
`

export const EDIT_AUTHOR = gql`
  mutation editAuthor($name: String!, $setBornTo: Int!) {
    editAuthor(
      name: $name
      setBornTo: $setBornTo
    ) {
      name
      born
    }
  }
`