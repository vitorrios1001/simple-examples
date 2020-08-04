import React, { useCallback } from 'react'
import { STATUS_CARD } from '../../../constants'

import Card from '../Card'

import './index.css'

const List = ({
  listCards = [],
  typeCards = STATUS_CARD.NONE,
  onMoveCard,
  title,
  onRemove,
}) => {

  const renderCards = useCallback(() => (
    listCards.map((card, idx) => (
      <Card
        key={idx}
        onMoveCard={onMoveCard}
        onRemove={onRemove}
        {...card}
      />
    ))
  ), [listCards, onRemove, onMoveCard])

  return (
    <div className={`container-cards ${typeCards}`}>
      <h2>{title}</h2>
      {renderCards()}
    </div>
  )
}

export default List
