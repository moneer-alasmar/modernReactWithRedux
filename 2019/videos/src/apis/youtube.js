import axios from "axios";

const KEY = "AIzaSyCNxn9oSRDL0O0px3Hn7mENPESb-23QlUQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
