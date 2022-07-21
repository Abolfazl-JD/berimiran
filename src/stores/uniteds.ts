import { v4 as uuid } from "uuid"
import { unitedsType } from '@/types'

const uniteds: unitedsType = [
    {
      title: 'مازندران',
      name : 'mazandaran',
      nickedName: 'گرشاه',
      id : uuid(),
      stars: 4,
      island : false,
      cities : []
  },
  {
    title: 'فارس',
    name : 'fars',
    nickedName: 'ملک سلیمان',
    id : uuid(),
    stars: 5,
    island : false,
    cities : []
  },
  {
    title: 'گیلان',
    name : 'gilan',
    nickedName: 'باران های نقره ای',
    id : uuid(),
    stars: 5,
    island : false,
    cities : []
  },
  {
    title: 'کیش',
    name : 'kish',
    nickedName: 'عروس جزایر مرجانی',
    island : true,
    id : uuid(),
    stars: 5,
    cities : []
  },
  {
    title: 'اصفهان',
    name : 'esfahan',
    nickedName: 'نصف جهان',
    id : uuid(),
    stars: 4,
    island : false,
    cities : []
  },
  {
    title: 'اردبیل',
    name : 'ardabil',
    nickedName: 'دارالارشاد',
    id : uuid(),
    stars: 4,
    island : false,
    cities : []
  },
  {
    title: 'زنجان',
    name : 'zanjan',
    nickedName: 'دارالسعادت',
    id : uuid(),
    stars: 5,
    island : false,
    cities : []
  },
]

export default uniteds
