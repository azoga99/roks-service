import './FilterBuild.css'

function FilterBuild() {
    return (
        <section class="filter">
            <div class="filter-field_input">
                <p class="filter-field_input-text">Пермская 31</p>
            </div>
            <div class="filter-select">
                <div class="filter-select-wrapper">
                    <select class="filter-select-choise" name="selection_of_area" id="">
                        <option value="1">Дзержинский район</option>
                        <option value="2">Индустриальный район</option>
                        <option value="3">Кировский район</option>
                        <option value="4">Ленинский район</option>
                        <option value="5">Мотовилихинский район</option>
                        <option value="6">Орджоникидзевский район</option>
                        <option value="7">Свердловский район</option>
                        <option value="8">Новые Ляды</option>
                    </select>
                </div>
            </div>
            <div class="filter-list">
                <label class="filter-list-labelOne">
                    <input class="filter-list-checkboxOne" type="checkbox" />
                        <span class="FakeOne"></span>
                        <span class="filter-list-textOne">Активные датчики</span>
                </label>
                <label class="filter-list-labelTwo">
                    <input class="filter-list-checkboxTwo" type="checkbox" />
                        <span class="FakeTwo"></span>
                        <span class="filter-list-textTwo">Неактивные датчики</span>
                </label>
            </div>
        </section>
    )
}

export default FilterBuild;