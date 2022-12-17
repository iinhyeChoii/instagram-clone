import { ImageSourcePropType } from 'react-native';
import { Icons } from '../assets';
import DownSmall from '../assets/icons/down-small/down-small.png';

export interface ImgInterface {
  source: ImageSourcePropType;
  aspect: 'square' | 'portrait' | 'landscape';
}

export interface ContentsInterface {
  id: string;
  source: ImageSourcePropType;
  contentsType: 'img' | 'video' | 'reels';
  aspect: 'square' | 'portrait' | 'landscape';
}

export interface LocationTagInterface {
  tagId: string;
  tagName: string;
}

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FAILURE = 'FETCH_FAILURE';

interface FetchRequestAction {
  type: typeof FETCH_REQUEST;
}

interface FetchFailureAction {
  type: typeof FETCH_FAILURE;
  payload: any;
}

export type FetchActionTypes = FetchRequestAction | FetchFailureAction;

export type IconSourceTypes =
  | Icons.Add
  | Icons.Back
  | Icons.Bookmark
  | Icons.BookmarkFilled
  | Icons.Comment
  | Icons.DownSmall
  | Icons.Film
  | Icons.Heart
  | Icons.HeartFilled
  | Icons.Home
  | Icons.HomeFilled
  | Icons.MenuBurger
  | Icons.MenuDots
  | Icons.Message
  | Icons.Search
  | Icons.ShoppingCart
  | Icons.User
  | Icons.UserFilled;
