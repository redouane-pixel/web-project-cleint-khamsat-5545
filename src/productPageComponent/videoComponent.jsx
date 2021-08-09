import React, { useState } from 'react';
// this is the video component
const Video = ({embedId}) => {
  // the prop embedId is the video id in youtube system
    return(
      <div className="VideoPart">
          {/* in your dataBase/api put a embedId like:"9_iUqXLQ-PY" you go to find it in the youtube share in the src*/}
             <iframe width="560"
            height="315"
            src={`https://www.youtube.com/embed/${embedId}`}
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
              {/* this a default text that say "how to use" */}
              <h1 className="title">:كيفية الإستخدام</h1> 
      </div>
    );
}
export default Video;