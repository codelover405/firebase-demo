import React from 'react'
import Card from 'react-bootstrap/Card';
import { chef1 } from '../../Assets/pictures/chefs-1.jpg';
import { chef2 } from '../../Assets/pictures/chefs-2.jpg';
import { chef3 } from '../../Assets/pictures/chefs-3.jpg';
import './chefs.scss';

export const Chefs = () => {
    const chefDetails= [
        {
            id:0,
            image :require('../../Assets/pictures/chefs-1.jpg'),
            chefName:"Walter White",
            job :"Master Chef",
            details: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."
        },
        {
            id:1,
            image :require('../../Assets/pictures/chefs-2.jpg'),
            chefName:"Sarah Jhonson",
            job :"Patissier",
            details: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente."
        },
        {
            id:2,
            image :require('../../Assets/pictures/chefs-3.jpg'),
            chefName:"William Anderson",
            job :"Cook",
            details: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi."
        }
    ]
  return (

    <>
        <section id="chefs-section">    
    <div className='chefs' id="about">
                <div className='continer about-content text-center'>
                    <div className='heading'>
                        <p>Chefs</p>                       
                        <h4>Our<span>  Proffesional </span> Chefs</h4>
                    </div>
                    <div className='container'>
                    <div className='row gy-4'>
                            
                    {chefDetails.map((datass,index) => {
                        // console.log(data,"day");
                            return(
                                <div className='col-md-6 col-lg-4 d-flex'>
                    <Card className='card' key={datass.id}>
                        <div className='member-image'>

                          <img className="card-img-top" src={datass.image} alt="Card image cap"></img>
                        </div>
                                    <Card.Body className='card-body member-info'>
                                       <h4 className='chef-name'>
                                        {datass.chefName}
                                       </h4>
                                       <span className='occupation'>
                                        {datass.job}
                                       </span>
                                       <p className='chef-description'>
                                        {datass.details}
                                       </p>
                                    </Card.Body>
                                </Card>
                        </div>
                            )
                    })}
                    

                    </div>

                    </div>
                </div>
            </div>
    </section>
    </>
  )
}
