import { mens_kurta } from "../../../../Data/men/men_kurta"
import { mensPantsPage1 } from "../../../../Data/pants/men_page1"
import { lehngacholiPage2 } from "../../../../Data/Saree/lenghaCholiPage2"
import { mensShoesPage1 } from "../../../../Data/shoes"
import { MainCarousel } from "../../HomeCarosel/MainCarousel"
import { HomeSectionCaruosel } from "../../HomeSectionCarosel/HomeSectionCarosel"

export const HomePage=()=>{
    return(
        <>
            <MainCarousel/>
            <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCaruosel data={mens_kurta} sectionName={"mens_kurta"} />
                <HomeSectionCaruosel data={mensShoesPage1} sectionName={"men's shoes"} />
                <HomeSectionCaruosel data={mensPantsPage1} sectionName={"men's Pants"} />
                <HomeSectionCaruosel data={lehngacholiPage2} sectionName={"Lehnga Choli"} />

            </div>
        </>
    )
}