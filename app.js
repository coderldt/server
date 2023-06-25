const express = require('express')
const mockjs = require('mockjs')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const total = 400

app.post('/api/callPlaning/list', function (req, res) {
  const { page, pageSize } = req.body
  if (!(page && pageSize)) {
    return res.send({ code: 1, data: '', msg: '参数不正确' })
  }

  const data = mockjs.mock({
    [`list|${pageSize}`]: [
      {
        'id|+1': (page - 1) * pageSize + 1,
        'key|+1': (page - 1) * pageSize + 1,
        'name|+1': mockjs.Random.cname(),
        "age|1-50": 100,
        'address': mockjs.Random.county(true)
      }
    ],
    total,
    page,
    pageSize
  })

  res.send({ code: 0, data, msg: '' })
})
app.post('/api/sys/user/list', function (req, res) {
  const { page, pageSize } = req.body
  if (!(page && pageSize)) {
    return res.send({ code: 1, data: '', msg: '参数不正确' })
  }

  const data = mockjs.mock({
    [`list|${pageSize}`]: [
      {
        'id|+1': (page - 1) * pageSize + 1,
        'key|+1': (page - 1) * pageSize + 1,
        'name|+1': mockjs.Random.cname(),
        "age|1-50": 100,
        'address': mockjs.Random.county(true)
      }
    ],
    total,
    page,
    pageSize
  })

  res.send({ code: 0, data, msg: '' })
})
app.post('/api/sys/permission/list', function (req, res) {
  const data = mockjs.mock({
    list: [
      {
        menu_id: 1,
        path: '/home',
        menu_name: '主页',
        menu_type: 'menu',
        parent_id: null
      },
      {
        menu_id: 2,
        path: '/call-planning',
        menu_name: '拜访计划管理',
        menu_type: 'menu',
        parent_id: null
      },
      {
        menu_id: 3,
        path: '/customer-data',
        menu_name: '客户数据管理',
        menu_type: 'disable',
        parent_id: 1
      },
      {
        menu_id: 4,
        path: '/smart-sales',
        menu_name: '智慧销售管理',
        menu_type: 'disable',
        parent_id: null
      },
      {
        menu_id: 5,
        path: '/centralized-policy',
        menu_name: '集采政策',
        menu_type: 'menu',
        parent_id: 3
      },
      {
        menu_id: 6,
        path: '/signing-techniques',
        menu_name: '签单技巧',
        menu_type: 'disable',
        parent_id: null
      },
      {
        menu_id: 7,
        path: '/sys',
        menu_name: '系统管理',
        menu_type: 'disable',
        parent_id: 6
      },
      {
        menu_id: 8,
        path: '/sys/user',
        menu_name: '用户技巧',
        menu_type: 'disable',
        parent_id: 7
      },
      {
        menu_id: 9,
        path: '/sys/permission',
        menu_name: '权限管理',
        menu_type: 'menu',
        parent_id: 7
      },
    ],
    total: 20,
  })

  res.send({ code: 0, data, msg: '' })
})

app.post('/api/callPlaning/delete', function (req, res) {
  const { id } = req.body
  if (!(id)) {
    return res.send({ code: 1, data: '', msg: '参数不正确' })
  }

  res.send({ code: 0, data, msg: '删除成功' })
})

app.listen(4001)