import CardsBuild from '../cardBuild/CardsBuild';
import CardsProfile from '../cardProfile/CardsProfile';
import Filter from '../filterProfile/Filter';
import './Main.css';

function Main() {
    return (
        <section>
            <Filter />
            <main className="main">
                <div className="main-card">
                    <CardsProfile />
                    <CardsProfile />
                    <CardsProfile />
                    <CardsProfile />
                    <CardsProfile />
                    <CardsProfile />
                </div>
            </main>
        </section>
    )
}

export default Main;