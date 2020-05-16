import React, { useState, useRef } from 'react'
import { STATUS_CARD } from '../../../constants'

import './index.css'

const initialForm = {
  title: '',
  member: '',
  color: '#e66465',
  status: STATUS_CARD.TODO
}

const Form = ({ onSubmit }) => {
  const inputRef = useRef(null)
  const [form, setForm] = useState(initialForm)

  const handleText = e => setForm({
    ...form,
    [e.target.name]: e.target.value
  })

  const handleSubmit = e => {
    e.preventDefault()

    if (!form.title || !form.member) {
      return alert('Preencha todos os campos!')
    }

    onSubmit(form)
    setForm(initialForm)
    inputRef.current.focus()
  }

  return (
    <div className="container-form-new-task">
      <h3>Nova tarefa</h3>
      <form onSubmit={handleSubmit} >
        <input
          name="title"
          value={form.title}
          onChange={handleText}
          placeholder="Título"
          ref={inputRef}
          autoFocus
        />

        <input
          name="member"
          value={form.member}
          onChange={handleText}
          placeholder="Membro"
        />
        <div className="input-color">
          <input
            name="color"
            type="color"
            value={form.color}
            onChange={handleText}
          />
          <label>Cor</label>
        </div>

        <button type="submit" >
          Salvar
        </button>
      </form>
    </div>
  )
}

export default Form
