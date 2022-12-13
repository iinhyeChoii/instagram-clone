import styled from 'styled-components/native';
import { Text } from './CommonStyledComponents';
import { Layout } from '../../constants';

export const { width, height } = Layout.window;
// user info - thumbnail, userName,
export const UserThumbnail = styled.Image``;
export const UserName = styled(Text)``;
export const FeedImage = styled.Image`
  width: ${width}px;
  height: ${width}px;
`;
export const NumberOfLikes = styled(Text)``;
export const FeedCaption = styled(Text)``;
export const UploadedTimeInfo = styled(Text)``;
