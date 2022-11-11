import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getMovieVideosUrl } from '../../../utils/apiUtills';
import { VIDEO_TYPE } from '../../../utils/constants';
import Modal from '../../UI/Modal/Modal';
import './MovieVideos.scss';

const MovieVideos = ({ id, type }) => {

    const [videoData, setVideoData] = useState([]);
    const showModal = () => {
        const modal = document.getElementById('video-modal');
        modal.style.display = "block";
    }

    useEffect(() => {

        const fetchVideos = async (id) => {

            const url = getMovieVideosUrl(id, type);
            const resp = await axios.get(url);
            const videoTrailer = resp.data.results.filter(video => video.type === VIDEO_TYPE.TRAILER);
            setVideoData(videoTrailer);
        }

        fetchVideos(id);
    }, [id, type])

    return (
        <div className='video-container'>
            <button className='video-container-cta-btn' onClick={showModal}>Watch Trailer</button>
            <Modal modalId='video-modal'>
                {
                    videoData.slice(0, 1).map((video) => (
                        <iframe className='video-frame' key={video.key} title={video.type} src={`https://www.youtube.com/embed/${video.key}`}>
                        </iframe>
                    ))
                }
            </Modal>

        </div>
    )
}

export default MovieVideos
