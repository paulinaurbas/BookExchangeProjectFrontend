import React from 'react'
import {Jumbotron} from 'react-bootstrap'

const Quotes = (props) =>{
    return (
        <div className="Quotes" >
            <h1>
                <center>
                <Jumbotron id="QuotesJB" variant = "primary">“A room without books is like a body without a soul.” ~ Cicero</Jumbotron>
               </center>
            </h1>
        </div>
      
    )
}
export default Quotes