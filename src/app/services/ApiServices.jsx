// apiService para regras de negócio do back end
import { get } from './httpService'

// const BACK_END_URL = 'http://localhost:8888/lucas_luoni/wp-json/wp/v2'
const BACK_END_URL =
  process.env.NODE_ENV === 'development' ?
    'http://localhost:8888/lucas_luoni/wp-json/wp/v2' :
    'https://www.arteluz.art.br/backend/wp-json/wp/v2' 

export async function apiGetWorksData() {
  const JsonData = await get(`${BACK_END_URL}/trabalhos`)
  return JsonData
}
// console.log('process.env.NODE_ENV =', process.env.NODE_ENV)

export async function apiGetAboutData() {
  const AboutData = await get(`${BACK_END_URL}/pages/28`)
  return AboutData
}

export async function apiGetNavData() {
  const menuData = await get(`${BACK_END_URL}/menu`)
  return menuData
}

export async function apiGetContactData() {
  const contactPage = await get(`${BACK_END_URL}/pages/35`)
  return contactPage
}