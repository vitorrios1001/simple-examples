import Trello from '../pages/Trello'

export const STATUS_CARD = {
  TODO: 'TODO',
  DOING: 'DOING',
  DONE: 'DONE',
  NONE: 'NONE'
}

export const DIRECTION_MOVE = {
  onNext: 'ON_NEXT',
  onGoBack: 'ON_GO_BACK',
}

export const ROUTES = [
  {
    path: '/',
    component: Trello,
  }
]
