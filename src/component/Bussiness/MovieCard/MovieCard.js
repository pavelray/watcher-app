import React from "react";
import { useNavigate } from "react-router-dom";
import { API_IMAGE_URL, NO_IMG_PLACEHOLDER_MEDIA } from "../../../utils/constants";
import Card from "../../UI/Card/Card";


export const MovieCard = (props) => {
    const { poster, id, type, ...otherProps } = props;
    const posterImg = poster ? `${API_IMAGE_URL}/w200${poster}` : NO_IMG_PLACEHOLDER_MEDIA;
    const navigate = useNavigate();
    const redirectToDetails = () => {
      navigate(`/${type}/${id}`);
    }
  return <Card poster={posterImg} {...otherProps} redirectToDetails={redirectToDetails}/>;
};
