import { Outlet } from 'react-router-dom'
import { CustomHeader, CustomFooter } from '..'

const HeaderAndFooter = () => {
    return (
        <>
            <CustomHeader />
            <Outlet />
            <CustomFooter />
        </>
    )
}
export default HeaderAndFooter