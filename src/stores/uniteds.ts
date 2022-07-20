import { v4 as uuid } from "uuid"
import { unitedsType } from '@/types'

const uniteds: unitedsType = [
    {
      title: 'مازندران',
      name : 'mazandaran',
      nickedName: 'گرشاه',
      id : uuid(),
      stars: 4,
      cities : []
  },
  {
    title: 'فارس',
    name : 'fars',
    nickedName: 'ملک سلیمان',
    id : uuid(),
    stars: 5,
    cities : []
}
]

export default uniteds
