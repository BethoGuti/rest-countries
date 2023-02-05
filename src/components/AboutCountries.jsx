import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { Loading, ContentInfoCountry } from "./";


export function AboutCountries() {
  const { country } = useParams();
  const url = `https://restcountries.com/v3.1/name/${country}`;
  const { data, isLoading, hasError } = useFetch(url);
  

  return (
    <section className="content-about">
      <Link to={'/'} className='btn-about-country'><ion-icon name='arrow-back-outline'></ion-icon></Link>

      {
        isLoading ? 
        <Loading /> : 
        <ContentInfoCountry data={data} />
      }
    </section>
  )
}
