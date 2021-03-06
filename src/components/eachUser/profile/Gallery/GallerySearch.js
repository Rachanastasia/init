import config from '../../../../config';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TokenService from '../../../../services/token-service'

export default function useGallerySearch(observed, pageNumber, limit, user_id = null) {

    /*This custom hook handles the infinite scroll with pagination*/

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [results, setResults] = useState([]);
    const [hasMore, setHasMore] = useState(null);


    useEffect(() => {
        setLoading(true);
        setError(false);

        let cancel;

        axios({
            method: 'GET',
            url: `${config.API_ENDPOINT}/post/download`,
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            params: { page: pageNumber, limit: limit, id: user_id },
            cancelToken: axios.CancelToken(c => cancel = c)
        }).then(res => {

            setResults(prevResults => {
                return [...new Set([...prevResults, ...res.data.results])]
            })

            setHasMore(res.data.results.length > 0)

            setLoading(false)

        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [pageNumber]);

    return { loading, error, results, hasMore };
};