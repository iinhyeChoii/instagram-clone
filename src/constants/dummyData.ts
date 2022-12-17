import Assets from '../assets/images/Assets';

const FeedData = [
  {
    id: 'Feed-01',
    user: {
      userName: 'but_first__',
      profileThumbnail: null,
      hasStories: false,
    },
    contents: [
      {
        id: 'feed-1',
        imageSource: Assets.Feed01,
      },
    ],
    description: '첫번째 피드!',
    likesCount: 100,
    hasFollowed: false,
    locationTag: {
      id: 'tag-01',
      name: '',
    },
    commentsCount: 0,
    comments: [],
  },
  {
    id: 'Feed-02',
    user: {
      userName: 'but_first__',
      profileThumbnail: null,
      hasStories: false,
    },
    contents: [
      {
        id: 'feed-1',
        imageSource: Assets.Feed02,
      },
    ],
    description: '두번쨰 피드입니당. ☕️',
    likesCount: 100,
    hasFollowed: false,
    locationTag: {
      id: 'tag-01',
      name: '',
    },
    commentsCount: 0,
    comments: [],
  },
  {
    id: 'Feed-03',
    user: {
      userName: 'but_first__',
      profileThumbnail: null,
      hasStories: false,
    },
    contents: [
      {
        id: 'feed-1',
        imageSource: Assets.Feed03,
      },
    ],
    description: '세번째 :) ',
    likesCount: 100,
    hasFollowed: false,
    locationTag: {
      id: 'tag-01',
      name: '',
    },
    commentsCount: 0,
    comments: [],
  },
];

export { FeedData };
