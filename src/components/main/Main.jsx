import CardsBuild from '../cardBuild/CardsBuild';
import CardsProfile from '../cardProfile/CardsProfile';
import './Main.css';

function Main() {
    return (
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
    )
}

export default Main;