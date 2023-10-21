import {Carousel} from 'flowbite-react';
import MySliderItem from "./MySliderItem";
import "../../output.css";

const MySlider = () => {
    let itemsList = {"text": "https://appuals.com/wp-content/uploads/2021/04/Eq0XNmfjPhM.jpg", "aboba":"https://mysnippets443.files.wordpress.com/2023/09/image.png"};
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