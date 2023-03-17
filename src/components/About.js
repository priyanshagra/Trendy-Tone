import React from 'react'
import fashion from  './images/fashion.jpg';

const About = () => {

   
  return (
    
    <div>
        <div className="container" >
    <h1
      style={{
        textDecoration: "underline",
        textAlign: "center",
        fontSize: 50,
        fontFamily: "Arial, Helvetica, sans-serif"
      }}
    >
      About Us
    </h1>
    <h3 style={{ color: "aliceblue", fontSize: 75, textAlign: "justify" ,
         }}>
      <i>'Fashion is the armor to survive the reality of everyday life'</i>
      </h3>
  </div>
  <h2 style={{ color: "chocolate" }}>1. Mission</h2>
  <div>
    <p style={{ width: "50vw" }}>
      To innovate, to lead, to enhance, to provide best-value products and
      services to global customers.
      <br />
      To make a difference through our branding to stay ahead of fashion trends,
      market changes and the latest technology.
      <br />
      To enhance the quality of life for our business partners,customers and
      employees.
      <br />
      We strive to be a global leader in fashion-knit and fashion outerwear by
      empowering innovation and design to provide total customer satisfaction.
      <br />
      We strive to be a caring and well-managed organization for our business
      partners ,customers and employees, and a responsible corporate citizen to
      our society.
    </p>
    {/* <img src="Mission.jpg" alt="MISSION" margin:0px> */}
  </div>
  <div>
    <h2 style={{ color: "chocolate" }}>2. Services</h2>
    <h3 style={{ color: "darkgoldenrod" }}>Design and Trend</h3>
    <p style={{ width: "50vw", display: "inline-block" }}>
      We love working with both new and established brands on their designs. We
      able to work with your inspiration, or We can provide moodboards and
      creative direction for you, it's up to you. We invest in a lot of trend
      resources, so clients don't have to. All designs will be tailored to your
      brief, brand and customer. As well as clothing design, We can also provide
      the specifications that factories will need in order to produce the
      garments.
      <br />
    </p>
    <ul>
      <li>Concept creation</li>
      <li>Trend research</li>
      <li>Moodboards</li>
      <li>Colour palette creation</li>
      <li>Range plans</li>
      <li>Garment design</li>
    </ul>
    <p />
    <h3 style={{ color: "darkgoldenrod" }}>
      Production, Sourcing and Working with Suppliers
    </h3>
    <p style={{ display: "inline-block" }}>
      Getting ideas produced successfully can be difficult. In our 16 years in
      the industry our been involved in the <br />
      production of over 1000 styles and would love to help you go from idea to
      production effectively.
    </p>
    <ul>
      <li>Translating your design ideas into a factory ready format</li>
      <li>Technical drawings</li>
      <li>
        Tech packs, including measurements, grade rules, construction, tolerance
        and more
      </li>
      <li>3d design renders</li>
      <li>Fit sample assistance</li>
      <li>Product development</li>
      <li>
        Factory and fabric sourcing assistance {"{"}training, not done-for-you
        {"}"}
      </li>
      <li>Factory management help</li>
      <li>Costings and price calculations</li>
      <li>Critical path creation and management</li>
    </ul>
    {/* <img src="factory.jpg" alt="Factory"> </p> */}
    <h3 style={{ color: "darkgoldenrod" }}> Education and Resources</h3>
    <p style={{ display: "inline-block" }}>
      A lot of our clients are totally new to fashion, or are fashion students
      without any real life industry experience.
      <br /> The fashion business is notoriously secretive and it can be hard to
      get insider information. Aside from 1-on-1 consulting sessions
    </p>
  </div>
  <div>
    <h2 style={{ color: "chocolate" }}>3. What we offer</h2>
    <h3 style={{ color: "darkgoldenrod" }}>Personalization: online shoppers</h3>
    <p style={{ display: "inline-block" }}>
      Online shoppers tend to regard personalised offers highly. Many customers
      will shop around for the best deal. However, <br />
      if there is a deal tailored specifically to the person, for example a
      birthday discount; then the customer will more than <br />
      likely use that store. Personalised products have a similar effect with
      drawing customers away from the competition by <br />
      offering unique products.
    </p>
    <h3 style={{ color: "darkgoldenrod" }}>
      Reviews: building long lasting trust
    </h3>
    <p style={{ display: "inline-block" }}>
      Over 98% of fashion buyers also stated the importance of reviews. This was
      down to customers wanting to get an honest perspective <br />
      of the product they are considering buying. However, reviews were deemed
      less important when buying through trusted e-retailers with <br />
      strong return policies.
    </p>
    <h3 style={{ color: "darkgoldenrod" }}>
      Customized results: great filtering systems
    </h3>
    <p style={{ display: "inline-block" }}>
      Finally, fashion shoppers also tend to demand to quickly find the product
      they want. An easy and effective filter system also contributes <br />
      to an online shops interface.
      <br />
      The best filtering allows customers to easily access other areas of an
      online fashion retailer (for example ‘striped shirts &gt; blue striped
      shirts’).
      <br />
      This allows customers to find similar products to the ones they searched
      for, whilst enjoying their browsing experience. Fashion shoppers may{" "}
      <br />
      also use a variety of channels to filter for themselves
    </p>
  </div>
    </div>
  )
}

export default About
