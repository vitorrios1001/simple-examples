import React from 'react'

import { STATUS_CARD, DIRECTION_MOVE } from '../../../constants'
import Button from '../Button'

import './index.css'

const Card = props => {
  const {
    id,
    title,
    member,
    color,
    status,
    onMoveCard,
    onRemove,
  } = props

  const renderCards = () => (
    <>
      {
        (status === STATUS_CARD.DOING || status === STATUS_CARD.DONE) &&
        <Button
          onClick={() => onMoveCard(id, DIRECTION_MOVE.onGoBack)}
          text="Voltar"
        />
      }
      <Button
        onClick={() => onMoveCard(id, DIRECTION_MOVE.onNext)}
        text={status === STATUS_CARD.DONE ? 'Concluir' : 'Avançar'}
      />
    </>
  )

  return (
    <div className="container-card">
      {
        status === STATUS_CARD.TODO &&
        <button className="btn-remove" onClick={() => onRemove(id)}>
          X
        </button>
      }
      <div style={{ backgroundColor: color }} className="color-card" />
      <div className="content">
        <h4>
          {title}
        </h4>
        <span>
          {member}
        </span>
      </div>
      <div className={`card-footer ${status}`}>
        {renderCards()}
      </div>
    </div>
  )
}

export default Card
