import React, { useEffect,useState } from 'react'
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import {Container} from './styles';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader'
import AdBanner from '../AdBanner';

export default function Layout() {
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },1000)
    },[])
    return (
        <Container>
            <MobileHeader/>
            <DesktopHeader/>
            <span>
                <AdBanner/>
            </span>
            <main>
                <LeftColumn isLoading={isLoading}/>
                <MiddleColumn isLoading={isLoading}/>
                <RightColumn isLoading={isLoading}/>

            </main>
        </Container>
    )
}
