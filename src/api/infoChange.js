import request from '@/utils/request'

// 查询所有房间具体信息
export function fetchHouseInfoAll(query) {
  return request({
    url: '/info/houseChange/all',
    method: 'get',
    params: { query }
  })
}

// 查询所有房间具体信息
export function fetchHouseInfoSearch(query) {
  return request({
    url: '/info/houseChange/search',
    method: 'get',
    params: { query }
  })
}

// 向后台提交表单（房屋面积变更）
export function postHouseInfoArea(formPost) {
  return request({
    url: '/info/houseChange/areaChangePost',
    method: 'post',
    params: { formPost }
  })
}

// 向后台提交表单（业主信息变更）
export function postHouseInfoUser(formPost) {
  return request({
    url: '/info/houseChange/userChangePost',
    method: 'post',
    params: { formPost }
  })
}

// 向后台提交表单（房间状态变更）
export function postHouseInfoStatus(formPost) {
  return request({
    url: '/info/houseChange/statusChangePost',
    method: 'post',
    params: { formPost }
  })
}

// 缴费成功后的跳转逻辑，根据指定houseId查询指定的住宅信息
export function fetchHouseInfoByHouseId(houseId) {
  return request({
    url: '/info/houseChange/searchById',
    method: 'get',
    params: { houseId }
  })
}

// 向后台提交表单（新增信息）
export function postNewHouseInfo(newInfoFormPost) {
  return request({
    url: '/info/houseChange/infoPost/new',
    method: 'post',
    params: { newInfoFormPost }
  })
}
