import { Outlet } from 'react-router-dom'
import { CustomHeader, CustomFooter } from '..'
import styles from './headerAndFooter.module.css'

const HeaderAndFooter = () => {
    return (
        <>
            <CustomHeader />
            { <div className={ styles.topShadow }></div> }
            <Outlet />
            <CustomFooter />
        </>
    )
}
export default HeaderAndFooter