import React from 'react'
import Panel from '../../Panel'
import { Container } from './styles';
import Skeleton from '../../Skeleton'

export default function LoadingProfilePanel() {
    return (
        <Container>
            <Panel className="no-shadow">
               <Skeleton className="bg-skeleton"/>
               <span>
                    <Skeleton className="avatar-skeleton"/>
                    <Skeleton className="row-skeleton"/>
                    <Skeleton className="row-skeleton"/>
                </span>
                   
              
            </Panel>
        </Container>
    )
}
