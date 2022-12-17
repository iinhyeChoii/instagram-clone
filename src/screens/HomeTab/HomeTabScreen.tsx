import { useState } from 'react';
import { RootTabScreenProps } from '../../../types';
import { Container, Title } from '../../components/styles';
import { FeedData } from '../../constants';
import FeedCard from '../../components/FeedCard';
import Assets from '../../assets/images/Assets';

export default function HomeTabScreen({
  navigation,
}: RootTabScreenProps<'HomeTab'>) {
  const [nftData, setNftData] = useState(FeedData);

  return (
    <Container>
      <FeedCard
        data={{
          id: 'Feed-01',
          user: {
            id: 'user-01',
            userName: 'but_first__',
            profileThumbnail: Assets.Feed01,
            hasNewStories: false,
            hasFollowed: false,
          },
          contents: [
            {
              id: 'feed-1',
              source: Assets.Feed01,
              contentsType: 'img',
              aspect: 'square',
            },
          ],
          caption:
            'Many platforms, one React. Create platform-specific versions of components so a single codebase can share code across platforms. With React Native, one team can maintain multiple platforms and share a common technology—React.\n',
          likesCount: 100,
          likes: [],
          commentsCount: 0,
          comments: [],
          locationTag: {
            tagId: 'tag-01',
            tagName: 'Seoul, South Korea',
          },
        }}
      />
    </Container>
  );
}
