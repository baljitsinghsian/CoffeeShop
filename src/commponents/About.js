
import './About.css'
import React, { useContext } from 'react'
import UserContext from './Context'
import mount from './mountain.png.png'


function About() {
  const {mode,darkmode  } = useContext(UserContext)
  return (
    <>

<div className="container-md-12  badge" >
<h1 data-aos="zoom-in-down">About</h1>
</div>
<div className='mount'>
  <img src={mount}/>
</div>
<div className="container-md-12 crl" >
  <div className="firstcrl" data-aos="flip-left">
  <h2>Fresh integredient</h2>
  <p >
Experience the unparall
btneled taste of our dishes crafted with fresh ingredients</p>
  </div>
  <div className="seccrl" data-aos="flip-left">
 <h2>Filtered water</h2>
 <p>Purified, crystal-clear, pristine, refreshing, clean, cri
  btnsp, clear, hygienic, sanitized.</p>
  </div>
  <div className="thirdcrl" data-aos="flip-left">
<h2>Our farm</h2>
<p>"Locally roasted coffee from our farm, crafted with love."</p>

  </div>
</div>  
<hr/>
    <div className="container-md-12">

    <div>
      <div className="container-md-6 about">

        <img src="https://images.unsplash.com/photo-1537130508299-46ab547b4be3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZmZlZSUyMHdpdGglMjB3b21hZW58ZW58MHx8MHx8fDA%3D" alt="" />
      <div className="container-md-6 para">
        <h2>Recipe of Our coFFee</h2>
        <p style={{ color:mode==="dark"?"white":""}}>Welcome to our coffee brewing guide! At [ Coffee Shop], we're passionate about bringing you the perfect cup of coffee every time. Our simple yet effective pour-over method ensures that you experience the full richness and flavor of our carefully selected coffee beans. Starting with freshly roasted beans and filtered water, our pour-over process allows for a controlled extraction, resulting in a smooth and aromatic brew. With precise measurements, a gentle pour, and just the right amount of time, we craft each cup to perfection. Whether you're a coffee aficionado or just starting your coffee journey, join us as we share our love for great coffee and guide you through the art of brewing the perfect cup."</p>
      </div>
      </div>
    </div>
    </div>
    <div className="container-md-12 team">
<div className="parateam">
  <h2>Our team</h2>
  <p style={{ color:mode==="dark"?"white":""}}>"At [my coffee shop], our team is the heart and soul of everything we do. Comprised of dedicated individuals from diverse backgrounds, we come together with a shared passion for excellence and innovation. Each member brings a unique set of skills, experiences, and perspectives to the table, allowing us to tackle challenges creatively and deliver exceptional results. Whether it's our talented developers crafting cutting-edge solutions, our meticulous designers shaping captivating visuals, or our dedicated customer support team providing top-notch service, every member plays a crucial role in our success. United by a common vision and fueled by collaboration, we strive to exceed expectations and make a positive impact in everything we do. Meet the faces behind [Your Company Name] and discover the expertise and dedication driving our mission forward.</p>
</div>
<div className="teamimg">
  <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVhbXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="src" />
</div>
    </div>
<div>
</div>
    <div className="container-md-12 Membership">

  <div className="container-md-6 Membershipimg">

    <img src="https://images.unsplash.com/photo-1595014361820-91c39c0cf800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVtYmVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
  </div>

  <div className="container-md-6 paraMembership">
    <h2>Our Membership</h2>
    <p style={{ color:mode==="dark"?"white":""}}>"Join our exclusive coffee shop membership and become part of a community that celebrates the love for exceptional coffee. As a member of [Your Coffee Shop Name], you'll enjoy a host of perks and benefits designed to enhance your coffee experience. From special discounts on your favorite brews to exclusive access to limited edition blends and member-only events, our membership program is tailored to delight coffee enthusiasts like you. Whether you're a casual coffee drinker or a devoted connoisseur, our membership offers something for everyone. Sign up today and elevate your coffee journey with us!"</p>
  </div>
</div>
    </>
  )
}

export default About
