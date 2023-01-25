import React from 'react'

export const EventItem = () => {

    const EventData= [
        {
          id:0,
          image: '../../Assets/pictures/Events-1.jpg',
          occation: "Birthday Parties",
          price: "$499",
          details:"lorem20"
        },
        {
          id:1,
          image: '../../Assets/pictures/events-2.jpg',
          occation: "Coustom Parties",
          price: "$99",
          details:"lorem20"
        },    {
          id:2,
          image: '../../Assets/pictures/Events-1.jpg',
          occation: "Private Parties",
          price: "$499",
          details:"lorem20"
        }
      ]

  return (
        <div className='row'>
    <div className='col-lg-4 bg-dark'> 
         {
        EventData.map((events)=>{
{console.log(events)}
          <div key={events}>Item 1
            {/* <img src={events.image}> </img> */}
            <div>{events.occation}</div>
            <div>{events.price}</div>
            <div>{events.details}</div>
          </div>
        })
      }
      </div>

        </div>
  )
}
