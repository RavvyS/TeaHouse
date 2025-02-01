//import AboutUs from "../components/AboutUs.jsx";
import Content from "../components/content.jsx";
import VideoP from "../components/VideoP.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import Location from "../components/Location.jsx";
import StatsRow from "../components/StatsRow.jsx";



function Home(){
    return(
        <div>
            <ImageSlider/>
            <Content/>
            <StatsRow/>
            <Location/>
            <VideoP/>
        </div>
    )
}export default Home;