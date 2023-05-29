import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import usa1 from './usa1.jpg';
import chef from './chef.jpg';
import manager from './manager.jpg';
import logo from './logo.png';

const Code = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
     };
  
    return (
      <>
      <div className='container-sm'>
      <div className="container-sm">
        <div className=' d-flex justify-content-center'>
        <img src={logo}  className="rest img-fluid " />
        </div>
      <nav>
        <div className="navbar clr">
        <img src={logo}  className="hid img-fluid" />
          <button className="navbar-toggler" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href=''>Services</a></li>
            <li><a href="#">Contact</a></li>
            
          </ul>
          
          
        </div>
      </nav>
      </div>
      <div className='container-sm mt-sm-5'>
              <div className='boly'>
              Philoxenia — φιλοξενια
              </div>
              <hr className="full"/>
              <hr className="full"/>
      
              <div className="noone">
                  <div>
              At Kokkari Estiatorio, we are driven by the concept of philoxenia, the art of making a stranger a friend. This philosophy drives our efforts to create a cuisine fit for the gods with the hospitality of a proper Greek home — a restaurant that you would never want to leave.
          </div> <br/>
          <div>
              Named after a small fishing village on the island of Samos in the Aegean Sea, Kokkari is the sister restaurant to acclaimed Evvia Estiatorio in Palo Alto, California.
          </div>
          <br/>
          <div>
              Legendary Kokkari is the site where Orion, son of the Greek god Poseidon, fell in love with the daughter of the King of Chios. For her love, Orion foraged the island for wild game and seafood to prepare elaborate banquets: Cuisine fit for the gods.
          </div> <br/>
          <div>
              On entering Kokkari, guests experience the old-world charm of a rustic Mediterranean country inn. An inviting fireplace, extensive woodwork, hand-made pottery and freshly picked flowers all reflect the warmth and tradition of ages-old hospitality.
          </div>
          <br/>
          </div>
                <div className="row">
                <div className='col-sm-7'>
                  
                
              <hr className='bg'/>
              <hr className='bg' />
              <div className="showone">
                  <div>
              At Kokkari Estiatorio, we are driven by the concept of philoxenia, the art of making a stranger a friend. This philosophy drives our efforts to create a cuisine fit for the gods with the hospitality of a proper Greek home — a restaurant that you would never want to leave.
          </div> <br/>
          <div>
              Named after a small fishing village on the island of Samos in the Aegean Sea, Kokkari is the sister restaurant to acclaimed Evvia Estiatorio in Palo Alto, California.
          </div>
          <br/>
          <div>
              Legendary Kokkari is the site where Orion, son of the Greek god Poseidon, fell in love with the daughter of the King of Chios. For her love, Orion foraged the island for wild game and seafood to prepare elaborate banquets: Cuisine fit for the gods.
          </div> <br/>
          <div>
              On entering Kokkari, guests experience the old-world charm of a rustic Mediterranean country inn. An inviting fireplace, extensive woodwork, hand-made pottery and freshly picked flowers all reflect the warmth and tradition of ages-old hospitality.
          </div>
          <br/>
          </div>
              
              </div>
              <div className="col-sm-5">
              <div className=' mt-sm-3'>
              <img src={usa1} alt="" srcset="" className='tables mx-5' />
              </div>
          </div>
          </div>
             
              <div className=' mt-sm-3'>
              <img src={usa1} alt="" srcset="" className='table1 mx-5' />
             
          </div>
          </div>
                
                <hr />
                  <hr />
      
                
  
               <div className="container-sm change">
                  <div className="card ">
                      <div className="card-body">
                          <h5 className="card-title d-sm-flex justify-content-center">KOKKARI ESTIATORIO</h5>
                          <div>
                          <h6 className="card-subtitle mb-2 text-body-secondary d-sm-flex justify-content-center">200 Jackson Street (at Front St.) <br />San Francisco, CA 94111</h6>
                          <p className="card-text d-sm-flex justify-content-center">p: <a href="">  415.981.0983  </a></p>
                          <p className="card-text d-sm-flex justify-content-center"> <a href="">reservations & hours</a></p>
                          <p className="card-text d-sm-flex justify-content-center"> <a href="">directions via mobile map</a></p>
                      </div>
                      </div>
                    </div>
                </div>
  
  <div className="container  sky1 "> 
              <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
                          <th class="end-text">Managing Partner</th>
                          <td> <a href="">Paul Kirby</a> </td>
                          
                        </tr>
                        <tr>
                          <th class="end-text">Chef/Partner</th>
                          <td><a href="">Erik Cosselmon</a></td>
                          
                        </tr>
                        <tr>
                          <th class="end-text">General Manager</th>
                          <td><a href="">William Boumier</a></td>
                          
                        </tr>
                        <tr>
                          <th class="end-text">Chef de Cuisine</th>
                          <td><a href="">	Manuel Vera</a></td>
                          
                        </tr>
                        <tr>
                          <th class="end-text">Office Manager</th>
                          <td><a href="">Molly Barrango</a></td>
                          
                        </tr>
                        <tr>
                          <th class="end-text">Sous Chefs</th>
                          <td><a href="">Brian Beach <br/>
                              Miho Reis</a></td>
                          
                        </tr>
                        <tr>
                          <th class="end-text">Pastry</th>
                          <td><a href="">Guillermo Coronado</a></td>
                          
                        </tr>
                        <tr>
                          <th class="end-text">Managers</th>
                          <td> <a href="">Bibi Bahador <br/>
                              Iain Bates <br/> 
                              Michele DiRuocco <br/>
                              Robin Kirby <br/>
                              Valerie Klein</a></td>
                          
                        </tr>
                        <tr>
                          <th class="end-text">Wine Buyer</th>
                          <td> <a href="">Lyle Coffield</a>	</td>
                          
                        </tr>
                        <tr>
                          <th class="end-text">Event Manager</th>
                          <td> <a href=""> Melissa Lopez</a></td>
                          
                        </tr>
          </thead>
         
        </table>
      </div>
                    
                </div>
  
  
  <div className=' change mt-sm-4 '>
                
                <img src={manager} srcset="" className='imreg'/> 
                <div>
                <a href="" className='mx-sm-3 mb-sm-2 saze'>Paul Kirby</a>
                <br/>
                <a href="" className='mx-sm-3 saze2'>Managing Partner</a>
              <div className='my-sm-4 mx-sm-4 '>
                  “Running a restaurant is all about taking care of people,” says Paul Kirby who has been at the helm of Kokkari Estiatorio since 2000. “From your staff to each and every guest that comes into your establishment, it is important to make everyone feel comfortable and welcome. Restaurant employees that are valued and respected take pride in their work and truly enjoy their jobs. This translates directly to the guest experience.”
              </div>
              <div>
                While Paul may be soft-spoken and charming (qualities he attributes to his Southern upbringing), he is extremely driven. His dedicated, hands-on approach to management ensures the high standards of service and hospitality at the restaurant have stayed consistent for over 15 years. Under Kirby, Kokkari’s refreshing approach to service emphasizes the emotional elements of hospitality: Have a good time and above all, make sure the guests have a great time.
            </div>
            <br/>
            Paul came to the West Coast after years managing waterfront restaurant properties in The Hamptons outside of New York City. His first job in San Francisco was working alongside acclaimed, Bay Area Chef, Reed Hearon as General Manager of Rose Pistola. After three years with Hearon he came to Kokkari Estiatorio bringing with him a genuine appreciation and knowledge of rustic Meditteranean cuisine and wines, an essential prerequisite for working at Kokkari. In 2006 he was named Managing Partner of both Kokkari and Evvia in Palo Alto.
            </div>
            </div>
  
  
            <div className=" change mt-sm-4">
              <img src={chef} srcset="" className='imreg'/> 
              <div>
              <a href="" className='mx-sm-3 mb-sm-2 saze'>Erik Cosselmon</a>
              <br/>
              <a href="" className='mx-sm-3 saze2'>Chef/Partner</a>
            <div className='my-sm-4 mx-sm-4 '>
              Erik Cosselmon’s wide-ranging Mediterranean repertoire and strong, ingredient-driven style finds full expression in the Greek-inspired menus at Kokkari and sister restaurant Evvia in Palo Alto. Since being named Executive Chef of Kokkari in 2004, Cosselmon’s brand of casual tavern cuisine has attracted even more devotees, earning Kokkari top ratings in both local and National press publications. “The goal at Kokkari and Evvia is to offer as close to a true Greek restaurant experience as possible. Not only is it about good food, it’s about the people, the celebratory atmosphere and the Greek hospitality.”    
          </div>
            <div>
              Erik grew up on a farm in Central Michigan helping his mom tend their extensive kitchen garden and his dad cook for the large parties the family would host. This introduction to farm-fresh ingredients and cooking cemented his desire to be a chef at an early age. After completing a degree at The Culinary Institute of America in Hyde Park, New York he moved to Manhattan and began his career working at notable restaurants such as Montrachet, Tribeca Grill, Le Bernardin and Daniel.
          </div>
          <br/>
          Cosselmon moved to San Francisco and in 1996 joined Reed Hearon in opening his landmark Liqurian restaurant, Rose Pistola, in North Beach. In 1998 he was named Executive Chef. In 2001, ready for a new challenge, Erik left to run the kitchen at Cetrella Bistro & Café in Half Moon Bay where he garnered immediate and consistent critical praise for his rustic Mediterranean food
          <br/>
          <div className="mt-sm-3">
              His subsequent move to Kokkari made perfect sense. “Since moving from New York to the Bay Area, my cooking philosophy has evolved from the formal French tradition to the less complicated Mediterranean, with a focus on ingredients as opposed to the architecture of the dish.” His leadership and cuisine has contributed to Kokkari’s extraordinary success as one of San Francisco’s busiest restaurants. In 2006, Cosselmon was named Executive Chef of sister restaurant Evvia located in Palo Alto where he oversees the menu. He also joined the founding Partners as a Partner.
          </div>
          </div>
          </div>
  
          <div className="container-sm sky">
            <div className="row">
          <div className="col-5 ">
              
                      <div className="card  ">
                          <div className="card-body">
                              <h5 className="card-title d-sm-flex justify-content-center">KOKKARI ESTIATORIO</h5>
                              <h6 className="card-subtitle mb-2 text-body-secondary d-sm-flex justify-content-center">200 Jackson Street (at Front St.) <br />San Francisco, CA 94111</h6>
                              <p className="card-text d-sm-flex justify-content-center">p: <a href="">  415.981.0983  </a></p>
                              <p className="card-text d-sm-flex justify-content-center"> <a href="">reservations & hours</a></p>
                              <p className="card-text d-sm-flex justify-content-center"> <a href="">directions via mobile map</a></p>
                          </div>
                        </div>
              
                  <div className="container-sm">
                      <table className="mt-sm-5">
                          <thead>
                          <tr>
                          <th className="end-text">Managing Partner</th>
                          <td> <a href="">Paul Kirby</a> </td>
                          
                        </tr>
                        <tr>
                          <th className="end-text">Chef/Partner</th>
                          <td><a href="">Erik Cosselmon</a></td>
                          
                        </tr>
                        <tr>
                          <th className="end-text">General Manager</th>
                          <td><a href="">William Boumier</a></td>
                          
                        </tr>
                        <tr>
                          <th className="end-text">Chef de Cuisine</th>
                          <td><a href="">	Manuel Vera</a></td>
                          
                        </tr>
                        <tr>
                          <th className="end-text">Office Manager</th>
                          <td><a href="">Molly Barrango</a></td>
                          
                        </tr>
                        <tr>
                          <th className="end-text">Sous Chefs</th>
                          <td><a href="">Brian Beach <br/>
                              Miho Reis</a></td>
                          
                        </tr>
                        <tr>
                          <th className="end-text">Pastry</th>
                          <td><a href="">Guillermo Coronado</a></td>
                          
                        </tr>
                        <tr>
                          <th className="end-text">Managers</th>
                          <td> <a href="">Bibi Bahador <br/>
                              Iain Bates <br/> 
                              Michele DiRuocco <br/>
                              Robin Kirby <br/>
                              Valerie Klein</a></td>
                          
                        </tr>
                        <tr>
                          <th className="end-text">Wine Buyer</th>
                          <td> <a href="">Lyle Coffield</a>	</td>
                          
                        </tr>
                        <tr>
                          <th className="end-text">Event Manager</th>
                          <td> <a href=""> Melissa Lopez</a></td>
                          
                        </tr>
                          </thead>
                      
                        </table>
                        
                    </div>
              </div>
              <div class='col-sm-7 flate'>
                
              <img src={manager} srcset="" class='imreg' /> 
              <div>
              <a href="" class='mx-sm-3 mb-sm-2 saze'>Paul Kirby</a>
              <br/>
              <a href="" class='mx-sm-3 saze2'>Managing Partner</a>
            <div class='my-sm-4 mx-sm-4 '>
                “Running a restaurant is all about taking care of people,” says Paul Kirby who has been at the helm of Kokkari Estiatorio since 2000. “From your staff to each and every guest that comes into your establishment, it is important to make everyone feel comfortable and welcome. Restaurant employees that are valued and respected take pride in their work and truly enjoy their jobs. This translates directly to the guest experience.”
            </div>
            <div>
              While Paul may be soft-spoken and charming (qualities he attributes to his Southern upbringing), he is extremely driven. His dedicated, hands-on approach to management ensures the high standards of service and hospitality at the restaurant have stayed consistent for over 15 years. Under Kirby, Kokkari’s refreshing approach to service emphasizes the emotional elements of hospitality: Have a good time and above all, make sure the guests have a great time.
          </div>
          <br/>
          Paul came to the West Coast after years managing waterfront restaurant properties in The Hamptons outside of New York City. His first job in San Francisco was working alongside acclaimed, Bay Area Chef, Reed Hearon as General Manager of Rose Pistola. After three years with Hearon he came to Kokkari Estiatorio bringing with him a genuine appreciation and knowledge of rustic Meditteranean cuisine and wines, an essential prerequisite for working at Kokkari. In 2006 he was named Managing Partner of both Kokkari and Evvia in Palo Alto.
          </div>
          <div class="mt-sm-5">
              <img src={chef} srcset="" class='imreg' /> 
              <div>
              <a href="" class='mx-sm-3 mb-sm-2 saze'>Erik Cosselmon</a>
              <br/>
              <a href="" class='mx-sm-3 saze2'>Chef/Partner</a>
            <div class='my-sm-4 mx-sm-4 '>
              Erik Cosselmon’s wide-ranging Mediterranean repertoire and strong, ingredient-driven style finds full expression in the Greek-inspired menus at Kokkari and sister restaurant Evvia in Palo Alto. Since being named Executive Chef of Kokkari in 2004, Cosselmon’s brand of casual tavern cuisine has attracted even more devotees, earning Kokkari top ratings in both local and National press publications. “The goal at Kokkari and Evvia is to offer as close to a true Greek restaurant experience as possible. Not only is it about good food, it’s about the people, the celebratory atmosphere and the Greek hospitality.”    
          </div>
            <div>
              Erik grew up on a farm in Central Michigan helping his mom tend their extensive kitchen garden and his dad cook for the large parties the family would host. This introduction to farm-fresh ingredients and cooking cemented his desire to be a chef at an early age. After completing a degree at The Culinary Institute of America in Hyde Park, New York he moved to Manhattan and began his career working at notable restaurants such as Montrachet, Tribeca Grill, Le Bernardin and Daniel.
          </div>
          <br/>
          Cosselmon moved to San Francisco and in 1996 joined Reed Hearon in opening his landmark Liqurian restaurant, Rose Pistola, in North Beach. In 1998 he was named Executive Chef. In 2001, ready for a new challenge, Erik left to run the kitchen at Cetrella Bistro & Café in Half Moon Bay where he garnered immediate and consistent critical praise for his rustic Mediterranean food
          <br/>
          <div class="mt-sm-3">
              His subsequent move to Kokkari made perfect sense. “Since moving from New York to the Bay Area, my cooking philosophy has evolved from the formal French tradition to the less complicated Mediterranean, with a focus on ingredients as opposed to the architecture of the dish.” His leadership and cuisine has contributed to Kokkari’s extraordinary success as one of San Francisco’s busiest restaurants. In 2006, Cosselmon was named Executive Chef of sister restaurant Evvia located in Palo Alto where he oversees the menu. He also joined the founding Partners as a Partner.
          </div>
           </div>
          </div>
          </div>
  
              </div>
              </div>
          
              <div class="container-sm mt-sm-5 d-flex justify-content-around">
                  <a href="">
                      PRESS ROOM
                  </a>
                  <a href="">
                      GIFT CERTIFICATES
                      <br/>
                        & COOKBOOK
                  </a>
                  <a href="">
                      CONTACT
                  </a>
                </div>
      
                <div class="container-sm  mt-sm-5" >
                  <p class=" car">
                  <a href="" >
                      KOKKARI    |     EVVIA
                  </a>
              </p>
                </div>
                <div class="container-sm my-sm-4">
                  <p class="car">KOKKARI ESTIATORIO <br/>
                      200 Jackson Street (at Front St.) <br/>
                      San Francisco, CA 94111 <br/>
                      p: <a href="">415.981.0983</a> </p>
                </div>
                <div class="container-sm">
                  <p class="car">
                  <a href="">
                      Reservations & Hours <br/> Directions
                  </a>
              </p>
                </div>
              
              <div class="container-fluid d-flex justify-content-between bg-dark">
                  <small>© 2015-2023 Kokkari</small>
                  <small>Photos by Sara Remington | Site by TenayaPartners</small>
                </div>
                </div>
                
      </>
    );
  }
export default Code;

import React, { useState } from "react";

import { Link } from "react-router-dom";
import logo from './logo.png';

function Navbar () {
  const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
     };

  return (
    <>
    <div className=' d-flex justify-content-center'>
        <img src={logo}  className="rest img-fluid " />
        </div>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
    <img src={logo}  className="hid img-fluid" />
    <button
        className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`}
        type="button"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className={`navbar-nav ml-auto ${isOpen ? 'show' : ''}`}>
      <li className="nav-item">
        <Link className="nav-link" to='/'>ABOUT</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/cuisine'>CUISINE</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/menu'>MENUS</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/reservation'>RESERVATIONS</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/private dining'>PRIVATE DINING</Link>
      </li>
    </ul>
  </div>
</nav>

    </>
  );
};
export default Navbar;