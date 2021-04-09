import React from 'react'
import {Container,Wrapper,LikedinIcon,SearchInput,HomeIcon,NotificationsIcon,ProfileCircle,CaretDownlIcon} from './styles';
export default function DesktopHeader() {
    return (
        <Container>
            <Wrapper>
                <div className="left">
                    <LikedinIcon/>
                    <SearchInput placeholder="Pesquisar"/>
                </div>
                <div className="right">
                    <nav>
                        <button className="active">
                            <HomeIcon/>
                            <span>Inicio</span>
                        </button>
                        <button>
                            <NotificationsIcon/>
                            <span>Notificações</span>
                        </button>
                        <button>
                            <ProfileCircle src="https://avatars.githubusercontent.com/u/53882388?v=4"/>
                            <span>Eu <CaretDownlIcon/> </span>
                        </button>
                    </nav>
                </div>
            </Wrapper>
        </Container>
    )
}
