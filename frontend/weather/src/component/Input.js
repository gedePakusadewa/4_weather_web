import GeneralConst from "../resource/General.js"

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