const CustomButton = ({ label, handleClick, filled, icon }) => {
    return (
        <button
            className={ `${styles.customButton} ${filled && styles.fill}` }
            onClick={ () => {
                handleClick()
            } }>

            <span
                className={ styles.btnIcon }>
                { icon && icon }
            </span>

            { label }
        </button>
    )
}
export default CustomButton