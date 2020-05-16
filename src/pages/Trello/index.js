import React, { useState } from 'react'

import List from '../../components/Trello/List'

import { STATUS_CARD, DIRECTION_MOVE } from '../../constants'

import './index.css'
import Form from '../../components/Trello/Form'

const initialState = [
  {
    id: 1,
    title: 'Lavar as Louças',
    member: 'Vitor',
    color: '',
    status: STATUS_CARD.TODO
  },
  {
    id: 2,
    title: 'Arrumar a Casa',
    member: 'Vitor',
    color: '',
    status: STATUS_CARD.DOING
  },
  {
    id: 3,
    title: 'Ficar à toa',
    member: 'Ninguem',
    color: '',
    status: STATUS_CARD.DONE
  },
]

const TreloPage = () => {
  const [cards, setCards] = useState(initialState)

  const onMoveCard = (id, direction = DIRECTION_MOVE) => {
    const newList = cards.map(card => {
      if (card.id !== id) {
        return card
      }

      switch (card.status) {
        case STATUS_CARD.TODO:
          return { ...card, status: STATUS_CARD.DOING }
        case STATUS_CARD.DOING:
          return { 
            ...card, 
            status: direction === DIRECTION_MOVE.onNext ? STATUS_CARD.DONE : STATUS_CARD.TODO
          }
        case STATUS_CARD.DONE:
          return { 
            ...card, 
            status: direction === DIRECTION_MOVE.onNext ? STATUS_CARD.NONE : STATUS_CARD.DOING
          }
        default:
          return card
      }
    })

    setCards(newList)
  }

  const onAdd = newItem => {
    const id = new Date().getTime()
    setCards([
      ...cards,
      { ...newItem, id }
    ])
  }

  const onRemove = id => {
    setCards(cards.filter(card => card.id !== id))
  }

  return (
    <div>
      <Form onSubmit={onAdd} />
    
      <div className="container-lists">

        <List
          listCards={cards.filter(card => card.status === STATUS_CARD.TODO)}
          typeCards={STATUS_CARD.TODO}
          onMoveCard={onMoveCard}
          onRemove={onRemove}
          title="TODO"
        />

        <List
          listCards={cards.filter(card => card.status === STATUS_CARD.DOING)}
          typeCards={STATUS_CARD.DOING}
          onMoveCard={onMoveCard}
          title="DOING"
        />

        <List
          listCards={cards.filter(card => card.status === STATUS_CARD.DONE)}
          typeCards={STATUS_CARD.DONE}
          onMoveCard={onMoveCard}
          title="DONE"
        />
      </div>
    </div>
  )
}

export default TreloPage
