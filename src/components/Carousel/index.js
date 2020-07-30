import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Slider from './Slider';
import VideoCard from './VideoCard';
import {
  VideoCardGroupContainer,
  Title,
  ExtraLink,
  SliderItem,
} from './styles';

function Carousel({ category }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async function loadVideos() {
      const response = await api.get(`videos?category_id=${category.id}`);

      setVideos(response.data);
    })();
  }, [category.id]);

  return (
    <VideoCardGroupContainer>
      {category.title && (
        <>
          <Title style={{ backgroundColor: category.color || 'red' }}>
            {category.title}
          </Title>
          {category.link && (
            <ExtraLink href={category.link.url} target="_blank">
              {category.link.text}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video) => (
          <SliderItem key={video.id}>
            <VideoCard
              videoTitle={video.title}
              videoURL={video.url}
              categoryColor={category.color}
            />
          </SliderItem>
        ))}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
