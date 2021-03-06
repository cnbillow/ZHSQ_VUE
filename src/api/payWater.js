import request from '@/utils/request'

// 所有记录的list
export function fetchWaterLogList(listQuery_all) {
  return request({
    url: '/pay/water/log/all',
    method: 'get',
    params: { listQuery_all }
  })
}

// 搜索记录search
export function fetchWaterLogSearch(listQuery_search) {
  return request({
    url: '/pay/water/log/search',
    method: 'get',
    params: { listQuery_search }
  })
}

// 缴费成功后查询指定id的操作记录
export function fetchSearchByHouseId(houseId) {
  return request({
    url: '/pay/water/log/searchById',
    method: 'get',
    params: { houseId }
  })
}

// 单一收费详情表单
export function singleMoneyPost(singleFormPost) {
  return request({
    url: '/pay/water/singleMoneyPost',
    method: 'post',
    params: { singleFormPost }
  })
}

// 复合收费详情表单
export function mixMoneyPost(mixFormPost) {
  return request({
    url: '/pay/water/mixMoneyPost',
    method: 'post',
    params: { mixFormPost }
  })
}

// 当缴费方式为“特批”，调取sms
export function getWaterSMS(singleSMSPost) {
  return request({
    url: '/pay/water/getSMS',
    method: 'post',
    params: { singleSMSPost }
  })
}

