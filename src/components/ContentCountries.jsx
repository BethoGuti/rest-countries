import { DivItem, Loading } from "./";
import PropTypes from 'prop-types';


export function ContentCountries( { data, isLoading } ) {

  return (
    <>
    { 
      isLoading ? <Loading /> : 
      <section className="content">
          {
              Array.isArray(data) 
              ? 
              data.map((countri, index) => {
                return <DivItem src={countri.flags.png} key={index} population={countri.population} region={countri.region} capital={countri.capital} title={countri.name.official} />
              })
              : 
              <h3>No se encontro</h3>
          }
      </section>
     }
  </>
  )
}

ContentCountries.prototype= {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}