import GeneralConst from "../resource/General.js"

export const InputCity = () => {
    return(
        <form>
            <label htmlFor="title">{GeneralConst.INPUT_CITY_TITLE}</label><br />
            <select id="city" name="city">
            <option value="london">London</option>
            <option value="jakarta">Jakarta</option>
            </select>
        </form>
    )
}

export const InputTemperatureUnit = () => {
    return(
        <form>
            <label htmlFor="title">{GeneralConst.INPUT_TEMPERATURE_TITLE}</label><br />
            <select id="unit" name="unit">
            <option value="celcius">Celcius</option>
            <option value="fahrenheit">Fahrenheit</option>
            </select>
        </form>
    )
}

export const InputIsDarkMode = () => {
    return(
        <form>
            <label htmlFor="title">{GeneralConst.INPUT_DARK_MODE_TITLE}</label><br />
            <input type="checkbox" id="isDarkMode" name="isDarkMode" value="Dark Mode" />
        </form>
    )
}

export const InputBiodata = () => {
    return(
        <form>
            <label htmlFor="title">{GeneralConst.USERNAME}</label><br />
            <input type="input" name="username" value="" /><br />
            <label htmlFor="title">{GeneralConst.EMAIL}</label><br />
            <input type="input" name="email" value="" /><br />
            <label htmlFor="title">{GeneralConst.INPUT_CITY_TITLE}</label><br />
            <input type="input" name="city" value="" /><br />
        </form>
    )
}