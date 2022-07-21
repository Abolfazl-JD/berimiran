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
  {
    title: 'قشم',
    name : 'qeshm',
    nickedName: 'سرزمین عجایب هفتگانه',
    id : uuid(),
    stars: 5,
    island : true,
    cities : []
  },
  {
    title: 'خراسان رضوی',
    name : 'razavi-khorasan',
    nickedName: 'پایتخت گردشگری مذهبی',
    id : uuid(),
    stars: 3,
    island : false,
    cities : []
  },
  {
    title: 'چهارمحال بختیاری',
    name : 'bakhtiari-chaharmahal',
    nickedName: 'سوئیس ایران',
    id : uuid(),
    stars: 3,
    island : false,
    cities : []
  },
  {
    title: 'لرستان',
    name : 'lorestan',
    nickedName: 'سرزمین آبشارها',
    id : uuid(),
    stars: 4,
    island : false,
    cities : []
  },
  {
    title: 'ایلام',
    name : 'ilam',
    nickedName: 'عروس زاگرس',
    id : uuid(),
    stars: 3,
    island : false,
    cities : []
  },
]

export default uniteds
