/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { API_IMAGE_URL, MEDIA_TYPE } from '../../../utils/constants';
import { getAllCountriesAPIUrl, getProvidersAPIUrl } from '../../../utils/helperMethods';
import "./WatchProvider.scss";

const WatchProvider = ({ type = MEDIA_TYPE.MOVIE, id }) => {
    const USER_COUNTRY = 'IN';
    const [countryData, setCountryData] = useState([]);
    const [providers, setProviderData] = useState({});
    // const [selectedProvider, setSelectedProvider] = useState([]);

    const getAllCountries = useCallback(() => {
        const fetchCountries = async () => {
            const url = getAllCountriesAPIUrl()
            const resp = await axios.get(
                url
            );
            const { data } = resp;
            setCountryData(data);
        };

        fetchCountries();
    }, []);

    const getProviders = useCallback(() => {
        const fetchProviders = async () => {
            const url = getProvidersAPIUrl(type, id)
            const resp = await axios.get(
                url
            );
            const { data } = resp;
            setProviderData(data.results[USER_COUNTRY]);
        };
        fetchProviders();
    }, []);


    useEffect(() => {
        // getAllCountries();
        getProviders();
    }, []);

    // const handleOnChange = (event) => {
    //     const { value } = event.target;
    //     const selectValue = providers[value].flatrate;
    //     setSelectedProvider(selectValue);
    // }

    return (
        <div className='provider-container'>
            {/* <select onChange={handleOnChange}>
                {
                    countryData?.map((country) => (
                        <option value={country.iso_3166_1} key={country.iso_3166_1}>{country.english_name}</option>
                    ))
                }
            </select>
            <div>
                {
                    selectedProvider?.map((provider) => (
                        <div>{provider.provider_name}</div>
                    ))
                }
            </div> */}
            <div className='provider-title'>
                Streaming
            </div>
            {
                providers.flatrate && providers.flatrate.map((ott) => (
                    <div key={ott.provider_id} className='provider-logo'>
                        <img src={`${API_IMAGE_URL}/w45/${ott.logo_path}`} alt={ott.provider_name} />
                    </div>
                ))
            }

        </div>
    )
}

export default WatchProvider
