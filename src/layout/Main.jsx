import Footer from "../pages/footer/Footer";
import Header from "../pages/header/Header";
import HeroSection from "../pages/hero/HeroSection";
import TaskBoard from "../pages/task/TaskBoard";

export default function Main(){
    return (
        <>
           <Header/>
           <HeroSection/>
           <TaskBoard/>
           <Footer/>
        </>
    );
}