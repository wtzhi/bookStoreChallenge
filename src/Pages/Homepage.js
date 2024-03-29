import NewCarousel from "../Components/NewCarousel";
import { NewArrivalGrid } from "../Components/NewArrivalGrid";
import { ScrollTop } from "../Components/ScrollTop";
const Homepage = () =>{
    return(
        <div>
            <div>                
                <NewCarousel/>
                <NewArrivalGrid/>
            </div>
            <div style = {{position:"fixed", bottom:0,right:10,}}><ScrollTop/></div>
        </div>
    )
}
export default Homepage;