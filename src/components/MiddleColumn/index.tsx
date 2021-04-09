import React from 'react';

import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import { Container } from './styles';
import LoadFeedPost from '../Shimmer/LoadFedPost/LoadFeedPost';
import LoadFeedShare from '../Shimmer/LoadFeedShare'

const MiddleColumn: React.FC<LoadingProps> = ({isLoading}) => {
  return (
    <Container className="middle-column">
     {isLoading ?(
       <>
       <LoadFeedShare/>
       <LoadFeedPost/>
       <LoadFeedPost/>
       <LoadFeedPost/>
       <LoadFeedPost/>


       </>

     ):(
      <>
      <FeedShare/>
     <FeedPost/>
     <FeedPost/>
     <FeedPost/>
     <FeedPost/>
     </>
     )}
    </Container>
  );
};

export default MiddleColumn;
