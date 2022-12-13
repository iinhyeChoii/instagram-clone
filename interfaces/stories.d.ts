import { ImageSourcePropType } from 'react-native';
import { UserInterface } from './feed';

export interface StoryInterface {
  id: string;
  creator: UserInterface;
  hasSeen: boolean;
  isCloseFriend: boolean;
  // datetime: moment.Moment;
  img: ImageSourcePropType;
}

export const UPDATE_STORIES = 'UPDATE_STORIES';
export const UPDATE_MY_STORY = 'UPDATE_MY_STORY';
export const WATCH_STORY = 'WATCH_STORY';

interface UpdateStoriesAction {
  type: typeof UPDATE_STORIES;
  payload: StoryInterface[];
}

interface UpdateMyStoryAction {
  type: typeof UPDATE_MY_STORY;
  payload: StoryInterface[];
}

interface WatchStoryAction {
  type: typeof WATCH_STORY;
  payload: StoryInterface[];
}

export type StoriesActionTypes =
  | UpdateStoriesAction
  | UpdateMyStoryAction
  | WatchStoryAction;
