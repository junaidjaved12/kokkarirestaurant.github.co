import React from "react";
import { Link } from "react-router-dom";
import green from './green.jpg';
import butter from './butter.jpg';
import fish from './fish.jpg';
import lamb from './lamb.jpg';
import legs from './legs.jpg';
import onion from './onion.jpg';
import oil from './oil.jpg';
import tomato from './tomato.jpg';
import lemon from './lemon.jpg';
import bottle from './bottle.jpg';
import cheftable from './cheftable.jpg';
import hania from './hania.jpg';
import room from './room.jpg';
import door from './door.jpg';
import car from './car.png';

function Reservation () {
    return (
        <>
       
         
      
              {/* <div className="noone">
                  <div>
                  Although we operate in San Francisco and draw on the bounty of Northern California, we owe our culinary aesthetic to Greece, where diners take more pleasure in quality ingredients than in artful embellishment.          
          </div> <br/>
          <div>
          We have modernized many Greek dishes while staying true to the signature tastes of the Greek table, respecting the pure flavors of sweet baby lamb, tangy homemade yogurt, and the woodsy scent of wild oregano.         
          </div>
          <br/>
          <div>
          While Greece is a country with dramatically varied landscapes and widely dispersed archipelagos, there is a singularly Greek flavor palette, a collection of ingredients and preparation, that define what we do at the Kokkari.          
          </div> <br/>
          <div>
          The appetizing aroma of wood smoke, coming from our open hearth, charcoal grill, and wood-fired oven, perfumes our dishes and enhances the of warmth of family and friends.        
          </div>
          <div>
          Our menu, showcasing seafood and game, features many of the most sought-after traditional Aegean dishes, as well as selections which have been modernized through the innovative blending of cultures and techniques. Horiatiki, the classic Greek salad is offered along side the Maroulosalata, a version of the chopped salad with a creamy feta dressing, pine nuts and Kalamata olives. Tender grilled octopus is garnished with lemon juice and olive oil; a classic Greek preparation, while calamari is stuffed with feta, fennel and orange; a more modern combination.  Lamb chops are served straight from the mesquite grill with hints of garlic, oregano and lemon juice.  While traditional soutzoukakia, or lamb meatballs, are enlivened with a hint of cumin and tangy Greek yogurt.    
          </div>
          <br/>
          </div> */}
          <div className='container mt-md-5'>
              <div className='boly'>
              RESERVATIONS
              </div>
              <hr className="full"/>
              <hr className="full"/>


                <div className="row">
                <div className='col-md-7'>
                  
                
              <hr className='bg'/>
              <hr className='bg' />
              <div className="">
                  <div>
                  KOKKARI ESTIATORIO accepts reservations up to two months in advance to the calendar date.</div> <br/>
          </div>
          <div>
          To reserve a table, please call <a href=""> 415.981.0983.</a> 
          
          </div>
          <br />
          <div>
          Online reservations are 30 days in advance only. <br /> <a href=""> Make an online reservation through OpenTable</a>
          </div>
          <br />
          <div>
          We do not take reservations via email.
          </div> 
          <br />
          <p className="wait">
            HOURS OF OPERATION
          </p>
          <br />
          <p className="waits">
           LUNCH
          </p>
          <br />
          <p className="ml">
            Mon-Fri 11:30am to 2:30pm
          </p>
          <br />
          <p className="waits">
            DINNER
          </p>
          <br />
          <p className="ml">
           Monday-Sunday 5:00pm - 10:00
          </p>
          <br />
          <p className="waits">
           CORKAGE
          </p>
          <br />
          <p className="ml" >
          $30 per 750ml bottle for up to 2 bottles, $50 per additional bottle


          </p>
          <br />
          <div className=' mt-sm-3'>
              <img src={door} alt="" srcset="" className='table1 mx-5' />
             
          </div>
          
              
              </div>
              <div className="col-sm-5">
              <div className=' mt-sm-3'>
              <img src={door} alt="" srcset="" className='tables img-fluid' />
              </div>
            
          </div>
          </div>
             
          </div>
         
         <div className="container">
          <p className="bolo">
            DIRECTIONS
          </p>
         </div>
         <div>
          <Link href="" className="word"> CLICK HERE FOR MOBILE APP </Link>
         </div>
         <span className="bg-darks">
          <Link href="">
         <img src={car} alt="" className="cap" />
         </Link>
         </span>

         <div className="container">
         <hr />
         <hr />
         </div>

         <div className="container-sm cont">
          FROM NORTH BAY:
         </div>

         <div className="container-sm mt-md-3">
          <ul>
            <li>
            Take US-101 South towards San Francisco
            </li>
            <li>
            Go across the Golden Gate Bridge
            </li>
            <li>
            Take the US-101 South ramp towards DOWNTOWN/LOMBARD ST            </li>
            <li>
            Stay on LOMBARD ST. until VAN NESS AVE            </li>
            <li>
            Turn RIGHT on VAN NESS AVE            </li>
            <li>
            Turn LEFT on BROADWAY ST.            </li>
            <li>
            Take BROADWAY thru the BROADWAY TUNNEL            </li>
            <li>
            Proceed thru the major intersection of COLUMBUS and BROADWAY.            </li>
            <li>
            Turn RIGHT on BATTERY ST.            </li>
            <li>
            Turn LEFT on JACKSON ST            </li>
            <li>
            OKKARI is at the corner of JACKSON ST. & FRONT ST.            </li>
          </ul>
         </div>

         <div className="container-sm cont">
         FROM EAST BAY:
         </div>

         <div className="container-sm mt-md-3">
          <ul>
            <li>
            Go Westbound on the BAY BRIDGE (I-80)            </li>
            <li>
            Take the FREMONT ST. exit.            </li>
            <li>
            At the bottom of the exit ramp turn LEFT on FREMONT ST.   
            </li>
            <li>
            Go ACROSS Market St.          </li>
            <li>
            Turn LEFT on PINE ST.          </li>
            <li>
            Turn RIGHT on SANSOME ST.           </li>
            <li>
            Turn RIGHT on JACKSON           </li>
            <li>
            KOKKARI is at the corner of JACKSON ST. & FRONT ST.        </li>
            
          </ul>
         </div>

         <div className="container-sm cont">
          FROM SOUTH BAY:
         </div>


         <div className="container-sm mt-md-3">
          <ul>
            <li>
            Take 280 NORTH to SAN FRANCISCO
            </li>
            <li>
            GET in LEFT LANE as you see the San Francisco cityscape
            </li>
            <li>
            LEFT off the ramp on to KING DRIVE           </li>
            <li>
            Continue straight past PAC BELL PARK            </li>
            <li>
            You are now on EMBARCADERO           </li>
            <li>
            Pass under the Bay Bridge and past the FERRY PLAZA BUILDING.           </li>
            <li>
            Turn LEFT on BROADWAY at stop light.
            </li>
            <li>
            Turn LEFT on BATTERY ST.            </li>
            <li>
            Turn LEFT on JACKSON ST.            </li>
            <li>
            KOKKARI is at the corner of JACKSON ST. & FRONT ST.           </li>
            
          </ul>
         </div>
          {/* <div className="container-sm change">
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
                </div>                  */}
          
              <div className="container-sm mt-sm-5 d-flex justify-content-around">
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
                
        </>
    )
};
export default Reservation;