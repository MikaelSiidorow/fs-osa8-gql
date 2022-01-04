
import React, { useState } from 'react'

const Books = (props) => {
  const [genre, setGenre] = useState('')

  if (!props.show) {
    return null
  }

  const books = props.books
  const genres = [...new Set(props.books.flatMap(book => book.genres))]

  return (
    <div>
      <h2>books</h2>

      {genre === '' ? null : <div>in genre <b>{genre}</b></div>}
      {}

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {(genre === '' ? books : books.filter(book => book.genres.includes(genre))).map(a =>
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
      {genres.map(genre =>
        <button key={genre} onClick={() => setGenre(genre)}>{genre}</button>
      )}
      <button onClick={() => setGenre('')}>all genres</button>
      </div>
    </div>
  )
}

export default Books