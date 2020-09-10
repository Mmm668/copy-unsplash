import axios from 'axios';
import {ACCESS_KEY, BASE_URL} from './ConstsHelper';

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',

    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',
    SCOPE: "public read_photos write_photos write_likes write_collections",
};

const response = (ok, data) => ({
    ok,
    data,
});

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 12000,
    // withCredentials: true,
    headers: {
        'Accept': FetchConsts.APPLICATION_JSON,
        'Content-Type': FetchConsts.APPLICATION_JSON,
        'Authorization': ACCESS_KEY,
        "scope": FetchConsts.SCOPE,
    }
});

const request = async (method, url, data = {}) => {

    try {
        let axiosConfig = {
            method,
            url,
            data,
        };

        if(method === FetchConsts.GET) {
            axiosConfig.params = data; // get은 body가없고, url에 쿼리 추가해서 쓰는 방식이라서고.
        } else {
            axiosConfig.data = data;
        }

        const result = await axiosInstance(axiosConfig);

        console.log('@@ axiosInstance', axiosInstance); // fn으로 출력
        console.log('@@ axiosConfig', axiosConfig); // [object]출력 > 클릭 시 설정값들 나옴
        console.log('@@ await axiosInstance(axiosConfig)', await axiosInstance(axiosConfig)); // [object]출력 > 클릭 시 통신한 data 나옴

        return response(true, result.data);

    } catch (e) {
        if(e.response) {
            // apiExceptionLog(e.response.config, e.response.data.message);
            console.log(`@@ [failed api] method:${e.response.config.method}, url: ${e.response.config.url}, data:${e.response.config.data}, message:${e.response.data.message}`);

            if(e.response.status === 400) {
                return response(false, e.response.data)
            }
            else if(e.response.status === 403) {
                console.log('로그인 만료됨. 로그인으로 이동합니다');
                return response(false, e.response.data)
            } else {
                return response(false, e.response.data)
            }
        } else {
            console.log('failed api: ', url, ', reason: ', e);
            response(false, '잘못된 요청입니다.');
        }
    }
};


const FetchHelper = {

    fetchJsonGet: (url, data) =>  request(FetchConsts.GET, url, data),

    fetchJsonPost: (url, data) => request(FetchConsts.POST, url, data),

    fetchJsonUpdate: (url, data) => request(FetchConsts.PUT, url, data),

    fetchJsonDelete: (url, data) => request(FetchConsts.DELETE, url, data),

};


export default FetchHelper;
