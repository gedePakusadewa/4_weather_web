import GeneralConst from "../resource/General.js"

export const InputIsDarkMode = () => {
    return(
        <form>
            <label htmlFor="title">{GeneralConst.INPUT_DARK_MODE_TITLE}</label><br />
            <input type="checkbox" id="isDarkMode" name="isDarkMode" value="Dark Mode" />
        </form>
    )
}
