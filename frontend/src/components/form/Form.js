import React, {useState} from 'react'

export default function Form(){
  const [ngram, setNgram] = useState(1)
  const [body, setBody] = useState('')
  const [case_sensitive, setSensitivity] = useState(false)
  const [length, setLength] = useState(100)
  const submit = e => {
    e.preventDefault()
    fetch(`http://localhost:8000/api/stats/create_stats`, {
      method: 'POST',
      body: JSON.stringify({ ngram, body, case_sensitive, length }),
    })
  }
  return (
    <form>
      <label htmlFor="body">Text</label>
      <textarea
        name="body"
        value={body}
        onChange={e => setBody(e.target.value)}
        />
      <br />
      <label htmlFor="ngam"> ngram</label> <br />
      <input
        name="ngram"
        value={ngram}
        onChange={e => setNgram(e.target.value)}
       />
      <br />

      <label htmlFor="case sensitive"> case sensitive</label> <br />
      <input
        type="radio"
        name="case_sensitive"
        value={case_sensitive}
        onChange={e => setSensitivity(e.target.value)}
       />
      <br />

      <label htmlFor="length"> length</label> <br />
      <input
        name="length"
        value={length}
        onChange={e => setLength(e.target.value)}
       />
      <br />
      <button type="submit">Send it!</button>
    </form>
  )
}