import React, { useState } from 'react';
import {
  FeedContainer,
  Row,
  UserThumbnail,
  UserName,
  FeedImage,
  NumberOfLikes,
  FeedCaption,
  UploadedTimeInfo,
} from './styles';
import { FeedInterface } from '../interfaces';
import DetailsDesc from './DetailsDesc';
import { IconButton } from './Buttons';
import { Icons } from '../assets';
import { ExtraInfoContainer, UserInfoRow } from './styles/FeedStyledComponent';
import { SpaceBetweenRow } from './styles/CommonStyledComponents';

const FeedCard = ({ data }: { data: FeedInterface }) => {
  const { id, user, contents, likesCount, caption } = data;
  return (
    <FeedContainer>
      <UserInfoRow>
        <Row style={{ flex: 1 }}>
          <UserThumbnail source={user.profileThumbnail} />
          <UserName numberOfLines={1}>{user.userName}</UserName>
          {/*verified mark*/}
        </Row>
        {/*더보기 버튼*/}
        <IconButton
          noMargin
          iconSource={Icons.MenuDots}
          iconSize={18}
          onPress={() => {
            console.log('Hi');
          }}
        />
      </UserInfoRow>
      <FeedImage source={contents[0].source} />
      <SpaceBetweenRow>
        <Row>
          {/*Like button, Comment button, Message Button, Bookmark button*/}
          <IconButton
            iconSource={Icons.Add}
            onPress={() => {
              console.log('Hi');
            }}
          />
          <IconButton
            iconSource={Icons.Comment}
            onPress={() => {
              console.log('Hi');
            }}
          />
          <IconButton
            iconSource={Icons.Message}
            onPress={() => {
              console.log('Hi');
            }}
          />
        </Row>
        <IconButton
          iconSource={Icons.Bookmark}
          onPress={() => {
            console.log('Hi');
          }}
        />
      </SpaceBetweenRow>
      <ExtraInfoContainer>
        <NumberOfLikes>{likesCount} likes</NumberOfLikes>
        <DetailsDesc>{caption}</DetailsDesc>
      </ExtraInfoContainer>

      {/*<UploadedTimeInfo>{data.createdTime}</UploadedTimeInfo>*/}
    </FeedContainer>
  );
};

export default FeedCard;
