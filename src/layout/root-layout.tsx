import { useOutlet } from 'react-router-dom'
import { NavBar } from '@/components/layout'

const RootLayout = () => {
  const outlet = useOutlet()

  return (
    <>
      <NavBar />
      <main>{outlet}</main>
    </>
  )
}

export { RootLayout }
