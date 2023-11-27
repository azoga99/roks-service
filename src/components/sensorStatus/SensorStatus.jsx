import './SensorStatus.css'
function SensorStatus() {
    return (
        <div class="main-sensorStatus">
            <div class="main-sensorStatus-item">
                <div class="main-sensorStatus-item-headline">
                    <h4 class="main-sensorStatus-item-headline-h">Угарный газ</h4>
                    <p class="main-sensorStatus-item-headline-p">310838264523568</p>
                </div>
                <div class="main-sensorStatus-item-status">
                    <h1 class="main-sensorStatus-item-status-h">Не активен</h1>
                    <button class="bttn_message">Сообщить</button>
                </div>
                <div class="main-sensorStatus-item-info">
                    <div class="main-sensorStatus-item-info-lastStatus">
                        <h4 class="main-sensorStatus-item-info-lastStatus-h">Последнее состояние</h4>
                        <p class="main-sensorStatus-item-info-lastStatus-p">412 pmm</p>
                    </div>
                    <div class="main-sensorStatus-item-info-lastMessage">
                        <h4 class="main-sensorStatus-item-info-lastMessage-h">Последнее сообщение</h4>
                        <p class="main-sensorStatus-item-info-lastMessage-p">18:00 06.10</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SensorStatus;