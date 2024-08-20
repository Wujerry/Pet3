// import './index.css'

import { Test } from './pet/actions'
import { boxCss, boxHtml } from './pet/assets/boxHtml'
import { pet3HandlerStyle, pet3WrapperStyle } from './pet/assets/wrapperHtml'
import { Pet } from './pet/Pet'

function initDom() {
  // create pet3 wrapper
  const root = document.createElement('div')
  root.id = 'pet3-wrapper'
  document.body.appendChild(root)

  const style = document.createElement('style')
  style.innerHTML = pet3WrapperStyle
  document.head.appendChild(style)

  // create pet3 handler
  const handlerDom = document.createElement('div')
  handlerDom.id = 'pet3-handler'
  handlerDom.style.transform = `translate(var(--pet3-handler-x), var(--pet3-handler-y)) rotate(var(--pet3-rotate))`
  document.body.appendChild(handlerDom)
  const handlerStyle = document.createElement('style')
  handlerStyle.innerHTML = pet3HandlerStyle
  document.head.appendChild(handlerStyle)

  // create lucky box
  const luckyBox = document.createElement('div')
  luckyBox.id = 'pet3-lucky-box'
  luckyBox.innerHTML = boxHtml
  document.body.appendChild(luckyBox)
  const boxStyle = document.createElement('style')
  boxStyle.innerHTML = boxCss
  document.head.appendChild(boxStyle)
}
initDom()
Pet()

//test
Test()
