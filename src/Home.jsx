
import { useEffect } from 'react'
import Herosection from './components/Herosection'
import { useGlobalContext } from './context'

import Contact from './Contact'
import Product from './Product'

const Home = () => {
const { updateHomePage } = useGlobalContext()


useEffect(() => {
 updateHomePage();}, [])
return (
    <>
    <Herosection />
    <Product />

    </>
    )

}
export default Home
