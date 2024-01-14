/*
 * @Description: 公共的方法,可以提供到其他模块去引用
 * import { publicTxt } from 'common'
 * @Author: lujunan
 * @Date: 2024-01-09 19:23:06
 * @LastEditors: lujunan
 * @LastEditTime: 2024-01-09 19:25:54
 */

import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000
})

export const publicTxt = () => {
  return '公共方法';
}
