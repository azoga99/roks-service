import CardsBuild from "../cardBuild/CardsBuild";
import FilterBuild from "../filterBuild/FilterBuild";

function MainBuild() {
    return (
        <section>
            <FilterBuild />
            <main className="main">
                <div className="main-card">
                    <CardsBuild />
                    <CardsBuild />
                    <CardsBuild />
                    <CardsBuild />
                    <CardsBuild />
                    <CardsBuild />
                </div>
            </main>
        </section>
    )
}

export default MainBuild;