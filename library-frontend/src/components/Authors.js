import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import Select from 'react-select'
import { ALL_AUTHORS, EDIT_AUTHOR } from '../queries'

const Authors = (props) => {
  const [selectedAuthor, setSelectedAuthor] = useState(null)
  const [born, setBorn] = useState('')

  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
    onError: (error) => {
      console.log(error.graphQLErrors[0].message)
    }
  })

  if (!props.show) {
    return null
  }
  const authors = props.authors

  const submit = async (event) => {
    event.preventDefault()

    editAuthor({ variables: { name: selectedAuthor.value, setBornTo: parseInt(born) } })

    setBorn('')
  }


  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      {!props.user ? null :
        <div>
          <h2>Set birthyear</h2>
          <form onSubmit={submit}>
            <div>
              <Select
                defaultValue={selectedAuthor}
                onChange={setSelectedAuthor}
                options={authors.map(a => ({ value: a.name, label: a.name }))}
              />
            </div>
            <div>
              born
              <input
                value={born}
                onChange={({ target }) => setBorn(target.value)}
              />
            </div>
            <button type='submit'>update author</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Authors