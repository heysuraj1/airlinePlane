import AboutFlights from '../components/AboutFlights';
import Flight from '../components/Flight'

const Flights = () => {
    return (
        <div>
            <div style={{marginTop:'200px'}} className="container">
            <Flight/>
            <AboutFlights/>
            </div>
                
        </div>
    );
}

export default Flights;