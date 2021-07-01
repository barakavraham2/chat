import React from 'react'
import { Button, Icon, Drawer } from 'rsuite'
import Dashboard from '.'
import { useMediaQuery, useModalState } from '../../misc/costum-hooks'
const DashboardToggle = () => {
    const isMobile = useMediaQuery('(max-width:992px)')
    const { isOpen, open, close } = useModalState()
    return (
        <>
            <Button block color="blue" onClick={open}>
                <Icon icon="dashboard" />dashboard
            </Button>

            <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
                <Dashboard />
            </Drawer>
        </>
    )
}

export default DashboardToggle
