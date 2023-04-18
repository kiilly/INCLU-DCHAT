import { GiphyFetch } from '@giphy/js-fetch-api';
import {
  Grid,
} from '@giphy/react-components';
import React, { useState } from 'react';

export default function Carousel({ sendToChat }) {
  const giphyFetch = new GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh');

  const [value, setValue] = useState('');

  const fetchGifs = (offset: number) => {
    if (value === '') {
      return giphyFetch.trending({ offset, limit: 13 });
    }

    return giphyFetch.search(value, { offset, limit: 13 });
  };

  return <div className="overflow-y-hidden bg-[#adb6fa] border-t-[30px] border-r-[10px] border-b-[20px] border-l-[10px] border-[#adb6fa]">
    <input className="m-2 rounded-lg p-2" type="text" placeholder='search a gif' value={value} onChange={(value) => setValue(value.target.value)} ></input>
    <Grid

    onGifClick={(gif, e) => {
      sendToChat(gif.images.original.url);
      e.preventDefault();
    }}
    fetchGifs={fetchGifs}
    width={300}
    columns={3}
    gutter={6}
    key={value}
  /></div>;
}
