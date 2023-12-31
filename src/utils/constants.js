const GOOGLE_API_KEY = "AIzaSyCckBic1eSyAUxgSDnu796Wd6dDA0vphJE";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SUGGESTIONS_SEARCH_API = (search) => {
  console.log(search);
  return "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+search+"&key=" +
  GOOGLE_API_KEY;
}
