import CommonSection from '../shared/CommonSection'
import "../styles/tour.css"
import SearchBar from "./../shared/SearchBar"
import TourCard from "./../shared/TourCard"
import Newsletter from "./../shared/Newsletter"
import { useSelector } from 'react-redux'
const Tours = () => {
  const { tours } = useSelector(state => state.public)
  const vv = () => {
    console.log(tours);
  }
  return <>
    <CommonSection title={"All Tours"} />
    <section>
      <div className="container">
        <div className="row">
          {/* <SearchBar /> */}
        </div>
      </div>
    </section>
    <section className='pt-0'>
      <div className="container">
        <div className="row">
          <button onClick={e => vv()} type="button" class="btn btn-primary">Primary</button>
          <TourCard />
          <div className="col-sm-12">
            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
            </div>
          </div>
        </div>
      </div>
    </section>
    <Newsletter />
  </>
}

export default Tours