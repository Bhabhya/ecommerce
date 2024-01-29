
import About from "../About"
import Popular from "./Popular"
import Offer from "./Offer"
import Subscribe from "./Subscribe"
import End from "./End"

const Home = () => {

  return (
    <div>
      <About username={"WINTER COLLECTION 2023"} ></About>
      <Popular/>
      <Offer/>
      <Subscribe/>
      <End/>
    </div>
  )
}

export default Home