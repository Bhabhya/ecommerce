import styled from "styled-components"

const Dresses = () => {
  return (
    <Section>
    <div className="box">
        <h1>OUR COLLECTION</h1>
    </div>
    <div className="mens">
        <div >
            <img src="/images/white.webp"></img>
            <p>Mens Printed Hoodie</p>
            <p>$22.00</p>
            <button>ADD TO CART</button>
        </div>

        <div>
            <img src="/images/puffer.jpg"></img>
            <p>Winter Coats long Warm Jacket</p>
            <p>$28.00</p>
            <button>ADD TO CART</button>
        </div>

    </div>

    <div className="mens">
        <div>
            <img src="/images/black.jpg"></img>
            <p>Mens Leather jacket</p>
            <p>$30.00</p>
            <button>ADD TO CART</button>
        </div>

        <div>
            <img src="/images/blue.webp"></img>
            <p>Round Neck Full Sweatshirt</p>
            <p>$25.00</p>
            <button>ADD TO CART</button>
        </div>

    </div>

    <div className="mens">
        <div>
            <img src="/images/yellow.webp"></img>
            <p>Mens Stylish Hoodie</p>
            <p>$28.00</p>
            <button>ADD TO CART</button>
        </div>

        <div>
            <img src="/images/cream.jpg"></img>
            <p>Lightweight oversize Sweatshirt</p>
            <p>$29.00</p>
            <button>ADD TO CART</button>
        </div>

    </div>


    </Section>
  )
}

export default Dresses

const Section=styled.div`
.box{
    //background-color: yellow;//
    text-align: center;
    font-size: 1.5rem;
}
    .mens{
        display: flex;
        justify-content: space-between;
    }

    img{
        width: 300px;
        height: 300px;
        margin: 20px 100px;
        box-shadow: 1px 1px 3px black;
        cursor: pointer;
    }

    p{
        margin: 0px 100px;
        text-align: center;
        font-weight: 300;
    }

    button{
        margin: 0px 200px;

        &:hover{
            cursor: pointer;
        }
    }


`;
