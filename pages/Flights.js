import AboutFlights from '../components/AboutFlights';
import Flight from '../components/Flight'

const Flights = () => {
    return (
        <div>
            <div style={{marginTop:'200px',backgroundColor:'#F4F4F4'}} className="container">
            <Flight/>
            <AboutFlights/>
            </div>
                
        </div>
    );
}

export default Flights;