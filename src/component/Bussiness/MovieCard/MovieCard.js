import React from "react";
import { useNavigate } from "react-router-dom";
import { API_IMAGE_URL } from "../../../utils/constants";
import Card from "../../UI/Card/Card";


export const MovieCard = (props) => {
    const { poster, id, type, ...otherProps } = props;
    const navigate = useNavigate();
    const redirectToDetails = () => {
      navigate(`/${type}/${id}`);
    }
  return <Card poster={`${API_IMAGE_URL}/w200${poster}`} {...otherProps} redirectToDetails={redirectToDetails}/>;
};
