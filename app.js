const express = require('express')
const mockjs = require('mockjs')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const total = 400

app.post('/api/callPlaning', function (req, res) {
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

app.listen(4001)