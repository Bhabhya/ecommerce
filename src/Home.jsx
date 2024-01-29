
import About from "./Components/About"
import Popular from "./Components/Popular"
import Offer from "./Components/Offer"
import Subscribe from "./Components/Subscribe"
import End from "./Components/End"

const Home = ({username }) => {
  
  return (
   
    <div>
<About username={"WINTER COLLECTION 2023"} ></About>
<Popular></Popular>
<Offer></Offer>
<Subscribe></Subscribe>
<End></End>

</div>
  )
}

export default Home