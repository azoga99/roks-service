import './Filter.css'

function Filter() {
    return (
        <section class="filter">
            <div class="filter-field_input">
                <p class="filter-field_input-text">Введите ФИО</p>
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
                        <span class="filter-list-textTwo">Активные датчики</span>
                </label>
            </div>
        </section>
    )
}

export default Filter;