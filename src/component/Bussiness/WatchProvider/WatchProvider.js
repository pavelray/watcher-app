/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { MEDIA_TYPE } from '../../../utils/constants';
import { getAllCountriesAPIUrl, getProvidersAPIUrl } from '../../../utils/helperMethods';

const WatchProvider = ({ type = MEDIA_TYPE.MOVIE, id }) => {
    const [countryData, setCountryData] = useState([]);
    const [providers, setProviderData] = useState({});
    const [selectedProvider, setSelectedProvider] = useState([]);

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
            setProviderData(data.results);
        };
        fetchProviders();
    }, []);


    useEffect(() => {
        getAllCountries();
        getProviders();
    }, []);

    const handleOnChange = (event) => {
        const { value } = event.target;
        const selectValue = providers[value].flatrate;
        setSelectedProvider(selectValue);
    }

    return (
        <div>
            <select onChange={handleOnChange}>
                {
                    countryData?.map((country) => (
                        <option value={country.iso_3166_1}>{country.english_name}</option>
                    ))
                }
            </select>
            <div>
                {
                    selectedProvider?.map((provider) => (
                        <div>{provider.provider_name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default WatchProvider
