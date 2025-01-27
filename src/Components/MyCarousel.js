import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Styles/carousel.scss'
import { Navigation, Pagination } from 'swiper/modules';
import ProjectSlide from './ProjectSlide';
import SFUWintertidePic from '../Images/SFUWintertide.png'
import SkyscrapperPic from '../Images/Skyscrapper.png';
import BaytreeCentrePic from '../Images/BaytreeCentre.png'
import LCFPic from '../Images/LCF.png';

export default function MyCarousel() {
    const footers = {
        SFUWintertide: "A short horror game made in seven days. After being stranded in the SFU campus due to heavy snow late at night, you are forced to find another way home alone. However, when one of the campus' metal statues disappears, it turns out you're not as alone as you thought.",
        Skyscrapper: "A simple yet very responsive Google Flights clone using Sky Scrapper API. Complete with a price-date picker, options for returning flights, multiple passengers, different class types, sorting by different categories, and more.",
        BaytreeCentre: "A semester-long project involving a scrum team of six other students. This web application is created for mentors to manage all of their needs involving their assigned mentee(s). They can view their session history, clock in/out of sessions, complete monthly questionnaires, access Baytree Centre resources, and receive notifications from Baytree admins.",
        LCF: "An upcoming indie game set in an uncanny summer camp. With many mechanics implemented pertaining to top-down 2D combat, platforming, object interactions and physics in general, this is my most developed project to date. Playable demo coming soon.",
    }


    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1} // Show 1 slide at a time on small screens
            breakpoints={{
                768: { slidesPerView: 2 }, // Show 2 slides on medium screens
                1560: { slidesPerView: 3 } // Show 3 slides on large screens
            }}
            scrollbar={{draggable: true}}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            slidesOffsetBefore={50}
            slidesOffsetAfter={50}
            style={{ padding: "20px 0" }}
        >
            <SwiperSlide>
                <ProjectSlide title="SFU Wintertide" techUsed={["Unity", "C#", "Blender"]} githubLink="https://github.com/pedrogaldfreitas/sfuwintertide" footerText={footers["SFUWintertide"]} img={SFUWintertidePic}/>
            </SwiperSlide>
            <SwiperSlide>
                <ProjectSlide title="Flight Finder" techUsed={["JavaScript", "React", "NodeJS"]} githubLink="https://github.com/pedrogaldfreitas/google-flights-clone" footerText={footers["Skyscrapper"]} img={SkyscrapperPic}/>
            </SwiperSlide>
            <SwiperSlide>
                <ProjectSlide title="Baytree Centre Mentor Portal" techUsed={["TypeScript", "React", "NodeJS", "Express", "MongoDB"]} githubLink="https://github.com/Earth-373/baytree-centre-app" footerText={footers["BaytreeCentre"]} img={BaytreeCentrePic}/>
            </SwiperSlide>
            <SwiperSlide>
                <ProjectSlide title="Lost Cascadian Folklore" techUsed={["Unity", "C#"]} githubLink="https://github.com/pedrogaldfreitas/CampGame" footerText={footers["LCF"]} img={LCFPic}/>
            </SwiperSlide>
        </Swiper>
    );
};