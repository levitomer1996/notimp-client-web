import axios from "axios";
var localhost = "http://10.100.102.23:4000";
var heroku = "https://still-lake-07605.herokuapp.com";
export const notimp_feed_socket_endpoint = "http://10.100.102.23:4001";

export const baseUrl = heroku;
export default axios.create({
  baseURL: baseUrl,
});
