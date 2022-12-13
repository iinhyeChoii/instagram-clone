import { ImageSourcePropType } from 'react-native';
import { ContentsInterface, LocationTagInterface } from './common';

export interface UserInterface {
  id: string;
  userName: string;
  profileThumbnail: ImageSourcePropType;
  hasNewStories?: boolean;
}

export interface CommentInterface {
  user: UserInterface;
  comment: string;
}

export interface PostInterface {
  id: string;
  // createdTime: moment.Moment;
  user: UserInterface;
  caption: string;
  contents: ContentsInterface[];
  likesCount?: number;
  likes: string[];
  commentsCount?: number;
  commentsBlocked?: boolean;
  comments: CommentInterface[];
  locationTag?: LocationTagInterface;

  // post advanced settings:
  // hide like and view counts
  hideViewCounts?: boolean;
  // turn off commenting
  turnOffCommenting?: boolean;
  // add paid partnership label
  showPaidPartnershipLabel?: boolean;
}

export const UPDATE_FEED = 'UPDATE_FEED';
export const LIKE_POST = 'LIKE_POST';

interface UpdateFeedAction {
  type: typeof UPDATE_FEED;
  payload: PostInterface[];
}

interface LikePostAction {
  type: typeof LIKE_POST;
  payload: PostInterface[];
}

export type FeedActionTypes = UpdateFeedAction | LikePostAction;
