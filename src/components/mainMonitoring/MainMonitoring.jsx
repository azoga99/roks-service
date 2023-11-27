import ListSensors from '../listSensor/ListSensors';
import ListSensorFilters from '../listSensorFilters/ListSensorsFilters';
import SensorStatus from '../sensorStatus/SensorStatus';
import './MainMonitoring.css'
function MainMonitoring() {
    return (
        <main className="mainn">
            <h1 className="main-title">Киселев Лев Георгиевич - Пермская 31</h1>
            <div className="main-listsensor">
                <ListSensorFilters />
                <ListSensors />
                <SensorStatus />
            </div>
        </main>
    )
}

export default MainMonitoring;