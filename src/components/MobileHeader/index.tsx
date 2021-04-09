import React from 'react'
import { Container,ProfileCircle,SearchInput,MessageIcon } from './styles'

export default function MobileHeader() {
    return (
        <Container>
            <ProfileCircle src="https://avatars.githubusercontent.com/u/53882388?v=4"/>
            <SearchInput placeholder="Pesquisar"/>
        </Container>
    )
}
