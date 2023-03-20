export interface ResponseProps<T> {
  status: number;
  code: number;
  message: string;
  data: T;
}

export interface ListBannerProps {
  id: number;
  imageUrl: string;
}

export interface ListNewProps {
  type: number;
  newsID: number;
  urlImage: string;
  title: string;
  description?: any;
  content: string;
  createDate: Date;
  date: string;
  countLike: number;
  countComment: number;
}

export interface ListFlashSale {
  id: number;
  name: string;
  code: string;
  image: string;
  price: number;
  description: string;
  technical?: any;
  warranty: number;
  special: number;
}

export interface ListCategory {
  id: number;
  name: string;
  imageUrl: string;
}

export interface ListHotItems {
  id: number;
  name: string;
  imageUrl: string;
}

export interface HomeResponseProps {
  customerInfo?: any;
  listNews: ListNewProps[];
  listSale: ListNewProps[];
  listCategory: ListCategory[];
  listFlashSale: ListFlashSale[];
  listHotItems: ListHotItems[];
  point?: number;
  couponCount?: number;
  listEvent?: listEvent[];
  listBanner?: listBanner[];
}
export interface listBanner {
  title: string;
  urlImage: string;
  content: string;
}
export interface listEvent {
  title: string;
  urlImage: string;
  content: string;
  startDate: string;
  endDate: string;
}
export interface BannerProps {
  url: string;
}
export interface PostItemProps {
  id: number;
  title: number;
  content: string;
  description: string;
  new_image: string;
  count_like: number;
  count_comment: number;
  checklike: number;
  created_at: string;
  urlImage: string;
}

export interface ReplyCommentProps {
  id: number;
  postID?: any;
  commentParentID: number;
  countLike: number;
  countComment: number;
  createdDate: Date;
  isIncognito: number;
  userID: number;
  userName: string;
  userImage: string;
  checklike: number;
  content?: any;
}

export interface CommentProps {
  id: number;
  postID?: any;
  commentParentID: number;
  countLike: number;
  countComment: number;
  createdDate: Date;
  isIncognito: number;
  userID: number;
  role: number;
  userName: string;
  userImage: string;
  checklike: number;
  content?: any;
  listReplyComment?: ReplyCommentProps[];
}

export interface PostDetailProps {
  id: number;
  title: number;
  content: string;
  description: string;
  new_image: string;
  html: string;
  listComment: CommentProps[];
  count_like: number;
  count_comment: number;
  created_at: string;
}

export interface RouteProps {
  key: string;
  name: string;
  params: any;
}

export interface UserInfoProps {
  user_name: string;
  phone: string;
  address: string;
}

export interface ProductResponseProps {
  productID: number;
  name: string;
  code: string;
  price: number;
  image: string;
  description: string;
  technical?: any;
}
export interface ListProduct {
  id: number;
  name: string;
  product_image: string;
  price: number;
  quantity: number;
}

export interface OrderProps {
  totalQuantity: string;
  listOrderItem: any;
  orderID: number;
  totalPrice: number;
  code: string;
  image: string;
  name: string;
  status: number;
  qty: number;
  countItem: number;
  date: string;
  createDate: Date;
}

export interface CustomerProps {
  userID: number;
  isAgent: number;
  token: string;
  pointRanking: number;
  rankName?: any;
  description?: any;
  noteNextLevel?: any;
  rankLevel: number;
  id: number;
  point: number;
  typeLogin: number;
  phone: string;
  customerName: string;
  dob: Date;
  dobStr: string;
  sex: number;
  email: string;
  provinceName: string;
  districtName: string;
  wardName: string;
  address: string;
  provinceID: number;
  districtID: number;
  wardID: number;
  urlAvatar: string;
  role: number;
}

export interface LoginResponseProps {
  userID: number;
  isAgent: number;
  token: string;
  pointRanking: number;
  rankName?: any;
  description?: any;
  noteNextLevel?: any;
  rankLevel: number;
  id: number;
  point: number;
  typeLogin: number;
  phone: string;
  customerName: string;
  dob: Date;
  dobStr: string;
  sex: number;
  email: string;
  provinceName: string;
  districtName: string;
  address: string;
  provinceID: number;
  districtID: number;
  urlAvatar: string;
  role: number;
}
export interface ListCategoryResponseProps {
  id: number;
  name: string;
  description: string;
  image: string;
  childCategory: any[];
}

// export interface ListProductResponseProps {
//   limit: number
//   totalCount: number
//   page: number
//   totalPage: number
//   isFlashSale: number
//   isHot: number
//   listProduct: ListProductProps[]
// }

// export interface ListCartResponseProps {
//   totalPrice: number
//   listCart: ListProductProps[]
// }

export interface ProvinceProps {
  provinceID: number;
  province_name: string;
  type: string;
}

export interface DistrictProps {
  districtID: number;
  districtName: string;
  type: string;
  provinceID: number;
}

export interface WardProps {
  wardID: number;
  wardName: string;
  type: string;
  districtID: number;
}
export interface Notify {
  id?: string;
  title?: string;
  type?: number;
  isRead?: number;
  createDate?: string;
  orderID?: number;
  newsID?: number;
  couponID?: number;
}
// export interface Coupon {
//   listItem(arrayChecked: any[] | undefined, listItem: any)
//   id: any
//   name: string
//   code: string
//   imageUrl: any
//   remain: number
//   discount: number
//   typeDiscount: number
//   fromDate: string
//   toDate: string
//   note: string
//   listRank: any
//   isSelected: boolean
//   minOrderValue: number
// }
export interface CartInterface {
  id?: number;
  productName?: string;
  price?: number;
  priceSale?: number;
  quantitySale?: number;
  quantity?: number;
  imageUrl?: string;
  productID?: any;
  unit?: any;
}
