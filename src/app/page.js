import HomeMax from './home/HomeMax'
import HomeMin from './home/HomeMin'
import NavBarAll from './navbar/NavBarAll'

export default function Main() {
  return (
    <div className='bg-orange-200'>
      <NavBarAll />
      <HomeMax/>
      <HomeMin/>
    </div>

  )
}

