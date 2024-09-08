import qs from 'qs';
import axios from 'axios';
const generateToken= async ()=>{

    const tokenURL = 'https://outpost.mappls.com/api/security/oauth/token';

    const formData = qs.stringify({
        grant_type: "client_credentials",
        client_id: "96dHZVzsAuv20IWCfMxHc6Uf6L8Tbi0xJNgKibjV2YJLHlByTOq1oMRWsjdwPM0_pSBw7wnbZz6YDQdllQDfHQVUoiP6oX42",
        client_secret: "lrFxI-iSEg8X6iZXS0T0zrBeOdKLSy8bVDWhqm13QfQMSVlvyEiQpPghTiOioaFup-dOXYsab3Rs2_ck3SfgQbHh-9adjoeZBTXuoc5qfqI="
    });

    const result = await axios({method: "post", data: formData, url: tokenURL, headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    } });

    return result.data.access_token;
}

export {generateToken};