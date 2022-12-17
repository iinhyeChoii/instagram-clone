import styled from 'styled-components/native';
import { Row, Text } from './CommonStyledComponents';
import { Layout } from '../../constants';

export const { width, height } = Layout.window;

export const FeedContainer = styled.View``;

export const UserInfoRow = styled(Row)`
  padding: 10px;
  justify-content: space-between;
`;

export const UserThumbnail = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const UserName = styled(Text)`
  flex: 1;
  font-weight: bold;
  margin: 0 10px 0 10px;
`;

export const FeedImage = styled.Image`
  width: ${width}px;
  height: ${width}px;
`;

export const NumberOfLikes = styled(Text)`
  font-weight: bold;
  padding-bottom: 5px;
`;

export const ExtraInfoContainer = styled.View`
  margin: 0 10px 10px 10px;
`;

export const FeedCaption = styled(Text)``;
export const UploadedTimeInfo = styled(Text)``;
