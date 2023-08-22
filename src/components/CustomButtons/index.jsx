import styles from './customButton.module.css'

const CustomButton = ({ label, handleClick, filled, icon, customStyle }) => {
    return (
        <button
            className={ `${styles.customButton} ${filled && styles.filled} ${customStyle}` }
            onClick={ () => {
                handleClick('working yes')
            } }>

            {
                icon && <span
                    className={ styles.btnIcon }>
                    { icon }
                </span>
            }

            { label }
        </button>
    )
}
export default CustomButton