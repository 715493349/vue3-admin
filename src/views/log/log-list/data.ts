export const userColumnsFactory = () => [
  {
    prop: 'id',
    label: 'ID'
  },
  {
    prop: 'nickName',
    label: '昵称'
  },
  {
    prop: 'userGender',
    label: '性别',
    sortable: true,
    formatter: (row: any) => row.userGender || '未知'
  },
  {
    prop: 'userPhone',
    label: '手机号'
  },
  {
    prop: 'userEmail',
    label: '邮箱'
  }
]
