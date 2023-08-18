import styles from './customButton.module.css'

const CustomButton = ({ label, handleClick, filled, icon }) => {
    return (
        <button
            className={ `${styles.customButton} ${filled && styles.fill}` }
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