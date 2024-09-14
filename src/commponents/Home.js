import React, { useContext } from 'react'
import './Home.css'
import first from './latte.png'
import { Link } from 'react-router-dom'
import UserContext from './Context'

function Home() {
  const {mode,darkmode  } = useContext(UserContext)
  return (
    <>
      <div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide crousal"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1469957761306-556935073eba?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1561395663-385e657f72bc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* cards */}
      <div className="container">

      <h1>Special coFFee</h1>
<hr></hr>
      <div className="row row-cols-1 row-cols-md-2 g-2 spl">
        <div className="col  "  data-aos="fade-right">
          <div className={`card splcard card bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlfGVufDB8fDB8fHww" className="card-img-top" alt="Coffee 1" />
            <div className="card-body">
              <h5 className="card-title">Morning Bliss</h5>
              <p className="card-text">
                Start your day with a perfect cup of coffee, bringing warmth and
                comfort to your mornings.
              </p>
            </div>
          </div>
        </div>
        <div className="col " data-aos="fade-left">
          <div className={`card splcard card bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlfGVufDB8fDB8fHww" className="card-img-top" alt="Coffee 2" />
            <div className="card-body">
              <h5 className="card-title">Rich Aroma</h5>
              <p className="card-text">
                Indulge in the rich aroma of freshly brewed coffee, a delightful
                treat for your senses.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>



      <div className="container bgcard">
        <div className="png" data-aos="zoom-in">

 <img src={first} alt="coffee" />
        </div>
        <div className="pngtxt">
        <div className="detail" data-aos="zoom-in-up">


          <h2>Make your Day with A Tasty coffee </h2>
          <p>There's something truly magical about the aroma of freshly brewed coffee, isn't there? It's not just a beverage; it's an experience—a ritual that brings comfort, warmth, and a moment of tranquility in our busy lives.</p>
          </div>
        </div>
 
</div>




      <h1>Best for you</h1>
      <div className="container-fluid" data-aos="zoom-in">

      <div className="row row-cols-1 row-cols-md-4 g-3 coffee">
        <div className="col colbs">
          <div className={`card cardcee bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwJTIwb2YlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Espresso</h5>
              <p className="card-text">
              Strong, concentrated coffee shot; perfect for a quick boost.
              </p>
              <h6>price $10.02</h6>
              <button style={{backgroundColor:mode==="dark"?"burlywood":"", color:mode==="dark"?"black":""}} className='btn'>Order </button>
            </div>
          </div>
        </div>
        <div className="col colbs">
          <div className={`card cardcee bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <img src="https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VwJTIwb2YlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Latte</h5>
              <p className="card-text">
              Creamy espresso with steamed milk; a comforting, frothy indulgence.
              </p>
              <h6>price $50.02</h6>
              <button style={{backgroundColor:mode==="dark"?"burlywood":"", color:mode==="dark"?"black":""}} className='btn'>Order </button>
            </div>
          </div>
        </div>
        <div className="col colbs">
          <div className={`card cardcee bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <img src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VwJTIwb2YlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cappuccino</h5>
              <p className="card-text">
              Equal parts espresso, steamed milk, and foam; classic Italian delight.
              </p>
              <h6>price $10.02</h6>
              <button style={{backgroundColor:mode==="dark"?"burlywood":"", color:mode==="dark"?"black":""}} className='btn'>Order </button>
            </div>
          </div>
        </div>
        <div className="col colbs">
          <div className={`card cardcee bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <img src="https://plus.unsplash.com/premium_photo-1673107321914-d1c327b86fce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VwJTIwb2YlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Americano</h5>
              <p className="card-text">
              Diluted espresso with hot water; bold yet smooth flavor.
              </p>
              <h6>price $30.02</h6>
              <button style={{backgroundColor:mode==="dark"?"burlywood":"", color:mode==="dark"?"black":""}} className='btn'>Order </button>
            </div>
          </div>
        </div>
        <div className="col colbs">
          <div className={`card cardcee bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <img src="https://images.unsplash.com/photo-1628365704556-ee80c8cd7ffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1cCUyMG9mJTIwY29mZmVlfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mocha</h5>
              <p className="card-text">
              Espresso with chocolate syrup and steamed milk; a decadent treat.
              </p>
              <h6>price $60.02</h6>
              <button style={{backgroundColor:mode==="dark"?"burlywood":"", color:mode==="dark"?"black":""}} className='btn'>Order  </button>
            </div>
          </div>
        </div>
        <div className="col colbs">
          <div className={`card cardcee bg-${mode} text-${mode==="dark"?"light":"dark"}`}>
            <img src="https://images.unsplash.com/photo-1593068654099-10ad31300e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1cCUyMG9mJTIwY29mZmVlfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Flat White</h5>
              <p className="card-text">
              Smooth espresso with velvety microfoam; a minimalist luxury.
              </p>
              <h6>price $20.02</h6>
              <button style={{backgroundColor:mode==="dark"?"burlywood":"", color:mode==="dark"?"black":""}} className='btn'>Order </button>
            </div>
          </div>
        </div>
      </div>
      </div>

  
<div className='secbgcard'>
  
  <h3 data-aos="zoom-out-right">Roubst, Rich coffee ,everyday
  At 50% off</h3>
  <p data-aos="zoom-out-right">great for beginners,get best offers</p>
  <button>Read more</button>

</div>

<div class='circles'>
  <div class="item" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
    <img src="https://www.starbucks.in/assets/icon/Bestseller.webp" />
    <h4 style={{color:mode==="dark"? "white":""}}> Bestseller</h4>
  </div>
  <div class="item" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
    <img src="https://www.starbucks.in/assets/icon/Drinks.webp" />
    <h4 style={{ color:mode==="dark"?"white":""}}> Drinks</h4>
  </div>
  <div class="item" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
    <img src="https://www.starbucks.in/assets/icon/Food.webp" />
    <h4 style={{ color:mode==="dark"?"white":""}}> Food</h4>
  </div>
  <div class="item" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
    <img src="https://www.starbucks.in/assets/icon/Merchandise.webp" />
    <h4 style={{ color:mode==="dark"?"white":""}}> Merchandise</h4>
  </div>
  <div class="item" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
    <img src="https://www.starbucks.in/assets/icon/CoffeeAtHome.webp" />
    <h4 style={{ color:mode==="dark"?"white":""}}> Coffee at home</h4>
  </div>
  <div class="item" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
    <img src="https://www.starbucks.in/assets/icon/ReadyToEat.webp" />
    <h4 style={{ color:mode==="dark"?"white":""}}> ReadyToEat</h4>
  </div>
</div>
  <div class="container-md-12 show" >
<div class="container-md showcardft" data-aos="zoom-in-right">
<div className="div">

    <h2 style={{color:"white"}}>Recipe </h2>
            <p style={{color:"white"}}>Description of the recipe goes here...</p>";
</div>


  </div>
<div class="container-md showcardsd" data-aos="zoom-in-left">
  <div className="div">

<h2 style={{color:"white"}}>Coffee tasting </h2>
            <p style={{color:"white"}}>it takes year of experience to become a perfessional coffe tster</p>";
  </div>
</div>
  </div>

<div className="container-md-12 showsec">

<div class="container-md showcardtd" data-aos="zoom-in-right">

<div className="div">
<h2 style={{color:"white"}}>Our latest campaigns</h2>
            <p style={{color:"white"}}>it all start with heart</p>";
</div>
  </div>
<div class="container-md showcardfh" data-aos="zoom-in-left">
<div className="div">
<h2 style={{color:"black"}}>Coffee Culture</h2>
            <p style={{color:"black"}}>Whether over a stimulating morning coffee,</p>";
</div>
</div>
</div>


<footer>

<div className="container-md-12 footer">

<div className="firstrow">
  <Link to='/'> Home</Link>
  <Link to='/About'> About</Link>
  <Link to='/Contact'> Contact</Link>
</div>

<div className="secrow">
<h5>
  Privacy Policy
  </h5>
<p>Similar to the terms of service, a privacy policy outlines how you collect, use, and protect user data.</p>

<h5>
FAQs
</h5>
<p>
Frequently Asked Questions can be helpful for visitors seeking quick answers to common queries.
</p>

<h5>
Blog
</h5>
<p>
If you have a blog section on your website, you can include a link to it in the footer.
</p>

<h5>

</h5>
<p>
  
</p>
</div>
<div className="thirdrow">
  <h5>Support/Help</h5>
  <p>If applicable, a link to customer support or help documentation can be included.</p>
</div>

</div>
</footer>
    </>
  )
}
export default Home;
