import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.header`
    text-align: center;
    background-color: #beacac67;
`

const NavBar = styled.div`
    display: flex;
    justify-content: center;
    ul{
        list-style: none;
        background-color: #333;
        margin: 20px auto;
    }

    ul li{
        float: left;
        padding: 10px;
    }
    ul li:hover{
        background-color: #918888;
        a{
            color: black;
        }
    }
    ul li a{
        text-decoration: none;
        color: white;
        padding: 10px 50px;
    }
`

const MainTemplate: FC = ({ children }) => (
    <>
        <Header>
            <NavBar>
                <ul>
                <li><Link to='/'>back</Link></li>
                    <li><Link to='/stats'>stats</Link></li>
                    <li><Link to='/database'>database</Link></li>
                </ul>
            </NavBar>
        </Header>
        {children}
    </>
)

export default MainTemplate