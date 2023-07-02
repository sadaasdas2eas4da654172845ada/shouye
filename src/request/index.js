// 所有请求放这里
import axios from 'axios';
export const fetchPlaylistHot = () =>
    axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot');

export const fetchPlaylists = (cat) =>
    axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist', {
		params: { cat }
	})
export const fetchSearchDefault = () => axios.get('https://netease-cloud-music-api-five-roan-88.vercel.app/search/default');
export const fetchSear = () => axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page');

