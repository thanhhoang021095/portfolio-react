import { scroller } from "react-scroll";

export const handleScrollToElement = (elmName: string) => {
    scroller.scrollTo(elmName, {
        smooth: true,
        offset: -window.innerHeight / 4, // scroll to the middle of the section
    });
};