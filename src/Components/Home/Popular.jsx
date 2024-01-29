import styled from "styled-components"


const Popular = () => {
  return (
    <Container>
    <div>
      <div>
        <h1>POPULAR PRODUCTS</h1>
    <div className="images">
        <div className="shadow">
          <img src="/images/coats.jpg"></img>
          <p>Wool mix longline coat</p>
          <p>$324.00</p>
          </div>

          <div className="shadow">
            <img src="/images/scarf.jpg"></img>
            <p>Knitted Scarf</p>
            <p>$23.00</p>
          </div>

          <div className="shadow">
            <img src="/images/hoodie.jpg"></img>
            <p> Hoodies</p>
            <p>$111.00</p>
          </div>

          <div className="shadow">
            <img src="/images/jacket.jpg"></img>
            <p>Puffer jacket</p>
            <p>$252.00</p>

          </div>

          </div>

          <div className="cloth">

            <div className="shadow">
              <img src="/images/cardigan.webp"></img>
              <p>Waterfall Cardigan</p>
              <p>$48.00</p>
            </div>

            <div className="shadow">
              <img src="/images/cap.jpg"></img>
              <p>Fur Pom Pom Hat</p>
              <p>$77.00</p>
            </div>

            <div className="shadow">
              <img src="/images/red.jpg"></img>
              <p>Mesh Sleeve Sweater</p>
              <p>$75.00</p>
            </div>

            <div className="shadow">
              <img src="/images/maxi.jpg"></img>
              <p>Wide Collar Wrap Coat</p>
              <p>$332.00</p>
            </div>

          </div>

          </div>
        </div>
    </Container>
  )
}

export default Popular

const Container=styled.div`
display:flex;
justify-content:center;
margin-bottom: 20px;
h1{
  color: black;
 // background-color: yellow;//
  text-align: center;
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.first{
  margin-left: 20px;
 // background-color: yellow;//
 
 
}

.images{
  //background-color: green;//
  display: flex;
  gap: 10px;
  box-shadow: 0px 1px 3px -2px black;
}

.cloth{
  display: flex;
  gap: 10px;
  box-shadow: 0px 1px 3px -2px black;

}

p{
  font-weight: 700;
  text-align: center;
}

img{
  width: 300px;
  height: 300px;
  box-shadow: 0px 1px 3px -2px black;
}

.shadow{
  box-shadow: 0px 1px 3px -2px black;
}

`;
