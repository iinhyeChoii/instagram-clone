import React, { useState } from 'react';
import { View, Text, FeedCaption } from './styles';

type Props = {
  children: string;
};

const DetailsDesc = (props: Props) => {
  const { children } = props;

  const [text, setText] = useState(children.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <View>
      <FeedCaption>
        {text}
        {!readMore && '...'}
        <Text
          onPress={() => {
            if (!readMore) {
              setText(children);
              setReadMore(true);
            } else {
              setText(children.slice(0, 100));
              setReadMore(false);
            }
          }}
        >
          {readMore ? ' Show Less' : ' Read More'}
        </Text>
      </FeedCaption>
    </View>
  );
};

export default DetailsDesc;
