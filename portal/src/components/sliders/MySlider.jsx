import {Carousel} from 'flowbite-react';
import MySliderItem from "./MySliderItem";
import "../../output.css";

const MySlider = () => {
    let itemsList = {"ГОРЫ": "https://wp-s.ru/wallpapers/9/8/549551266186127/priroda-s-gorami-zakatom-na-ozere.jpg", "ГОРЫ 2":"https://i.pinimg.com/originals/03/b8/a6/03b8a688873b3b7617addb10a5f22af2.jpg"};
    return (
        <Carousel className="relative h-96 w-full mt-5 rounded-2xl">
            {
                Object.entries(itemsList).map(([key , value]) => (
                    <MySliderItem value={key} image={value}></MySliderItem>
                ))
            }
        </Carousel>

    )
};

export default MySlider;