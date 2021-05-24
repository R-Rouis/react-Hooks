import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

const Filter = ({handleTitleFilterChange,handleRateFilterChange}) => {
    return (
        <div>
            <div className="search">
    <Form inline>
      <FormControl type="text" placeholder="Search for a movie" className="mr-sm-2"  
      onChange={(search) => handleTitleFilterChange(search.target.value)}/>   
      <br/><ReactStars
    count={5}
    onChange={handleRateFilterChange}
    size={24}
    isHalf={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
      </Form>
        </div>
        </div>
    )
}

export default Filter
