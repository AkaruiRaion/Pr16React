import { Accordeon } from "../../components/accordeon/Accordeon"
import { Banner } from "../../components/banner/Banner"
import { PauseOnHover } from "../../components/slider/Slider"

export function HomePage() {
    return (
        <section>
            <Banner />
            <div className="home container">
                <h2>Актуальные товары</h2>
                <PauseOnHover />
                <Accordeon />
            </div>
        </section>
    )
}