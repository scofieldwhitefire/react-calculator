import { Buttons } from './index'

const ButtonPanel = () => {
  return (
    <div>
      <div className='flex flex-row'>
        <Buttons numb='1'/>
        <Buttons numb='2'/>
        <Buttons numb='3'/>
      </div>
      <div className='flex flex-row'>
        <Buttons numb='4'/>
        <Buttons numb='5'/>
        <Buttons numb='6'/>
      </div>
      <div className='flex flex-row'>
        <Buttons numb='7'/>
        <Buttons numb='8'/>
        <Buttons numb='9'/>
      </div>
    </div>
  )
}

export default ButtonPanel;