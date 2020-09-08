import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import App from './../components/App.js';

var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!

  // var callback = () => {};


  return {
    type: 'CHANGE_VIDEO',
    videos: (q) => {
      dispatch(App.getYoutubeVideos(q));
    }
  };
};

export default handleVideoSearch;
