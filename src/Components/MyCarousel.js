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
import WorkshopPlusPic from '../Images/WorkshopPlus.png';
import ReactPlayer from 'react-player';
import { useRef, useState } from 'react';

export default function MyCarousel() {
    const videoRef = useRef(null);
    const [video, setVideo] = useState({
        title: '',
        url: ''
    });

    const footers = {
        SFUWintertide: "A short horror game made in seven days. After being stranded in the SFU campus due to heavy snow late at night, you are forced to find another way home alone. However, when one of the campus' metal statues disappears, it turns out you're not as alone as you thought.",
        Skyscrapper: "A simple yet very responsive Google Flights clone using Air Scraper API. Complete with a price-date picker, options for returning flights, multiple passengers, different class types, sorting by different categories, and more.",
        BaytreeCentre: "A semester-long project involving a scrum team of six other students. This web application is created for mentors to manage all of their needs involving their assigned mentee(s). Includes a variety of features. Click Play to see the demo.",
        LCF: "An upcoming indie game about a summer camp haunted by an enigmatic native tribe. With many mechanics implemented pertaining to top-down 2D combat, platforming, object interactions, animation, and physics in general, this is my most developed project to date. Playable demo coming soon.",
        WorkshopPlus: "Workshop+ is a virtual platform that brings the university workshop experience online. Students join with a code, select a course and assignment, and access past TA-led help videos or request live assistance. TAs can set availability across multiple workshops, ensuring targeted support.",
    }

    function SetCarouselVideo(videoid) {
        switch (videoid) {
            case 'baytree':
                setVideo({
                    title: 'Demo: Baytree Centre Mentor Portal',
                    url: 'https://pfreitas-personal-website2000.s3.us-east-1.amazonaws.com/Videos/BaytreeCentre.mp4'
                })
                break;
            case 'flightFinder':
                setVideo({
                    title: 'Demo: Flight Finder App',
                    url: 'https://pfreitas-personal-website2000.s3.us-east-1.amazonaws.com/Videos/flightFinderVideo.mp4'
                })
                break;
        }

        setTimeout(() => {
            const videoPosition = videoRef.current.getBoundingClientRect().top + window.scrollY;
            const offset = -125;
            window.scrollTo({ top: videoPosition + offset, behavior: "smooth" });
        }, 500);
    }

    return (
        <div className="carousel-container">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    840: { slidesPerView: 2, slidesOffsetBefore: 10, slidesOffsetAfter: 10},
                    1560: { slidesPerView: 3, slidesOffsetBefore: 30, slidesOffsetAfter: 30 }
                }}
                scrollbar={{draggable: true}}
                pagination={{ 
                    clickable: true,
                    el: ".swiper-pagination",
                    type: "progressbar"
                }}
                modules={[Navigation, Pagination]}
                slidesOffsetBefore={0}
                slidesOffsetAfter={0}
                style={{ padding: "20px 0" }}
                grabCursor={true}
            >
                <SwiperSlide>
                    <ProjectSlide title="SFU Wintertide" techUsed={["Unity", "C#", "Blender"]} githubLink="https://github.com/pedrogaldfreitas/sfuwintertide" footerText={footers["SFUWintertide"]} img={SFUWintertidePic} playable={true} playableText={'Play!'} onClickPlay={() => window.open("https://doctorcrawfish.itch.io/sfuwintertide", "_blank")}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectSlide title="Baytree Portal" techUsed={["TypeScript", "React", "NodeJS", "Express", "MongoDB"]} githubLink="https://github.com/Earth-373/baytree-centre-app" footerText={footers["BaytreeCentre"]} img={BaytreeCentrePic} playable={true} playableText={'Play Demo'} onClickPlay={() => SetCarouselVideo('baytree')}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectSlide title="Flight Finder" techUsed={["JavaScript", "React", "NodeJS"]} githubLink="https://github.com/pedrogaldfreitas/google-flights-clone" footerText={footers["Skyscrapper"]} img={SkyscrapperPic} playable={true} playableText={'Play Demo'} onClickPlay={() => SetCarouselVideo('flightFinder')}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectSlide title="Occult Cascadia" techUsed={["Unity", "C#"]} githubLink="https://github.com/pedrogaldfreitas/CampGame" footerText={footers["LCF"]} img={LCFPic}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProjectSlide title="Workshop+" techUsed={["Java"]} githubLink="https://github.com/snayyar00/WorkshopPlus" footerText={footers["WorkshopPlus"]} img={WorkshopPlusPic}/>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination"></div>
            <div className="video-container" ref={videoRef}>
                <ReactPlayer 
                    url={video.url}
                    controls
                    width="100%"
                    height="auto"
                />
                <div className="video-title">{video.title}</div>
            </div>
        </div>
    );
};