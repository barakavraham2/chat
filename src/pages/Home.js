import React, { useEffect } from 'react'
import { auth, database } from '../misc/firebase'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/reducers/auth'
import { userLoggedIn, userLoggedOut } from '../store/actions/auth'
import { Container, Grid, Row, Col, Panel, Button, Icon, Alert } from 'rsuite'
import Sidebar from '../components/Sidebar'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Chat from './Chat'
import { useMediaQuery } from '../misc/costum-hooks'
function Home() {
    const isDesktop = useMediaQuery(`(min-width:990px)`)
    const { isExact } = useRouteMatch();
    const canrendersidebar = isDesktop || isExact
    return (
        <Grid fluid className="h-100">
            <Row className="h-100">
                {canrendersidebar &&
                    <Col xs={24} md={8} className="h-100" >
                        <Sidebar />
                    </Col>
                }
                <Switch>
                    <Route exact path={'/chat/:chatid'}>
                        <Col xs={24} md={16} className="h-100">
                            <Chat />
                        </Col>
                    </Route>
                    <Route>
                        {isDesktop && <Col xs={24} md={16} className="h-100">
                            <h5 className="mt-page text-center">Please select chat room</h5>
                        </Col>}
                    </Route>
                </Switch>
            </Row>
        </Grid>

    )
}

export default Home
