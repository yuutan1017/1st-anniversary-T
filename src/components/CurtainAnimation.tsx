import { useState } from 'react'
import '../scss/CurtainAnimation.scss'



export const CurtainAnimation = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const start_animation = () => {
    setVisible(!visible)
    console.log(visible)
  }

  return (
    <div className="curtain">
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
