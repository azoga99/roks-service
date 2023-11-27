import './ListSensorsFilters.css'

function ListSensorFilters() {
    return (
        <div class="main-listsensor-filters">
            <div class="main-listsensor-filters-search">
                <p class="main-listsensor-filters-search-text">Поиск</p>
            </div>
            <div class="main-listsensor-filters-checkbox">
                <label class="main-listsensor-filters-checkbox-labelOne">
                    <input class="main-listsensor-filters-checkbox-labelOne-checkboxOne" type="checkbox" />
                        <span class="FakeOne"></span>
                        <span class="main-listsensor-filters-checkbox-labelOne-textOne">Активные</span>
                </label>
                <label class="main-listsensor-filters-checkbox-labelTwo">
                    <input class="main-listsensor-filters-checkbox-labelTwo-checkboxTwo" type="checkbox" />
                        <span class="FakeTwo"></span>
                        <span class="main-listsensor-filters-checkbox-textTwo">Неактивные</span>
                </label>
            </div>
            <div class="main-listsensor-filters-select">
                <div class="filter-select-wrapper1">
                    <select class="filter-select-choise1" name="selection_of_area" id="">
                        <option value="1">Угарный газ</option>
                        <option value="2">Давление</option>
                        <option value="3">Температура</option>
                        <option value="4">Уровень шума</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ListSensorFilters;