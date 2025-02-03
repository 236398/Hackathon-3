
import { groq } from "next-sanity";

export const allProducts = groq `*[_type == "products"]{
  _id,
  title,
  badge,
  price,
  priceWithoutDiscount,
  "imageUrl": image.asset->url
}
`
export const singlePage = groq `*[_type == "products" && _id == _id][0]{
  _id,
  title,
  badge,
  price,
  priceWithoutDiscount,
  "imageUrl": image.asset->url
}
`

export const instagram = groq `*[_type == "products" && "instagram" in tags][0..5] {
  "imageUrl": image.asset->url,
  }`

export const featureProducts = groq `*[_type == "products" && "featured" in tags][0..3]{
 _id,
  title,
  badge,
  price,
   "imageUrl": image.asset->url
 }`

 export const categories = groq `*[_type == "categories" ]{
    title,
   "imageUrl": image.asset->url,
 }`

 export const gallery = groq `*[_type == "products" && "gallery" in tags][0..4] {
    "imageUrl": image.asset->url,
    }`

 export const ourProducts = groq `*[_type == "products"][0..7] {
     _id,
     title,
     price,
     priceWithoutDiscount,
     badge,
        "imageUrl": image.asset->url,
        }`