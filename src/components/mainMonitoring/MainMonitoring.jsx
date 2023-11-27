import ListSensorFilters from '../listSensorFilters/ListSensorFilters';
import './MainMonitoring.css'
function MainMonitoring() {
    return (
        <main className="mainn">
            <h1 className="main-title">Киселев Лев Георгиевич - Пермская 31</h1>
            <div className="main-listsensor">
                <ListSensorFilters />
            </div>
        </main>
    )
}

export default MainMonitoring;