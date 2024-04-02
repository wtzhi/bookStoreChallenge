import NewCarousel from "../Components/NewCarousel";
import { NewArrivalGrid } from "../Components/NewArrivalGrid";
import { ScrollTop } from "../Components/ScrollTop";
import { Footer } from "../Components/Footer";
import { RecommendationGrid } from "../Components/RecommendationGrid";
const Homepage = () =>{
    return(
        <div>
            <div>                
                <NewCarousel/>
                <NewArrivalGrid/>
                <RecommendationGrid/>
                <Footer/>
            </div>
            
            <div style = {{position:"fixed", bottom:0,right:10,}}><ScrollTop/></div>
            
        </div>
    )
}
export default Homepage;