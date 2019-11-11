import axios from 'axios';
import {message} from 'antd';
// import { userStore } from '../store/userStore';

export const MethodType = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH'
};

/**
 * 模块说明:有api_token的请求
 */

export const requestToken = (api, method = MethodType.GET, params = {}) => {
    const apiToken = localStorage.getItem('token');
    const data = (method === 'GET') ? 'params' : 'data';
    return new Promise((resolve, reject) => {
        axios({
            url: `${api}`,
            method,
            [data    ]: params,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiToken}`,
                'Access-Control-Allow-Credentials': true
                // 'X-Tenant-Token': `${apiToken}`,
            },
        }).then(
            (res) => {
                if (res.data.code === 400) {
                    // userStore.handleLoginOut();
                }
                resolve(res);
            }
        )
            .catch(error => {
                console.log(error);
                message.error(typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data));
                reject(error);
                if (error.response.status === 403) {
                    // 返回403无权限则重新发起登录流程
                    // userStore.handleLoginOut();
                }
                if (error.response.status === 401) {
                    // 返回403无权限则重新发起登录流程
                }
            });
    });
};

/**
 * 模块说明:无api_token请求
 */
export const request = (api, method = MethodType.GET, params = {}) => {
    const data = (method === 'GET') ? 'params' : 'data';
    return axios({
        url: `${api}`,
        method,
        [data]: params,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Credentials': true
        },
    })
        .then(resp => {
            return resp;
        })
        .catch(error => {
            console.log('请求错误2', error);
            return error;
        });
};
/**
 * 模块说明:无api_token请求()
 */
export const requestNice = (api, method = MethodType.GET, params = {}) => {
    const apiToken = localStorage.getItem('token');
    const data = (method === 'GET') ? 'params' : 'data';
    const headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
    };
    return new Promise((resolve, reject) => {
        axios({
            url: `${api}`,
            method,
            [data]: params,
            headers,
        }).then(
            (res) => {
                if (res.data.code === 400) {
                }
                resolve(res);
            }
        )
            .catch(error => {
                console.log(error);
                reject(error);
            });
    });
};

/**
 * 模块说明:上传文件请求
 */
export const requestFile = (api, method = MethodType.GET, params = {}) => {
    const data = (method === 'GET') ? 'params' : 'data';
    return axios({
        url: `${api}`,
        method,
        [data]: params,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
        .then(resp => {
            if (resp.status >= 300) {
                console.log('网络错误', resp);
            }
            return resp;
        })
        .catch(error => {
            console.log('请求错误', error);
            return error;
        });
};
