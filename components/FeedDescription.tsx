import React, { useState } from 'react';
import { View, Text, FeedCaption } from './styles';
import { PostInterface } from '../interfaces';

const DetailsDesc = (data: PostInterface) => {
  const [text, setText] = useState(data.caption.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View>
        <Text>Description</Text>
        <View>
          <FeedCaption>
            {text}
            {!readMore && '...'}
            <Text
              onPress={() => {
                if (!readMore) {
                  setText(data.caption);
                  setReadMore(true);
                } else {
                  setText(data.caption.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? ' Show Less' : ' Read More'}
            </Text>
          </FeedCaption>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
