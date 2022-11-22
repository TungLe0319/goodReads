import { AppState } from "../AppState.js";
import { Review } from "../models/Review.js";
import { api } from "./AxiosService.js"

class ReviewsService{
async createReview(data){
  console.log(data);
  const res = await api.post('api/reviews',data)
  // console.log(res.data);
  AppState.reviews.push(new Review(res.data))
  // console.log(AppState.reviews);
}
async getReviews(){
  const res = await api.get('api/reviews')
  
}
async deleteReview(id){
  
  await api.delete(`api/reviews/${id}`)
 AppState.reviews = AppState.reviews.filter(r=> r.id != id)
}
}
export const reviewsService = new ReviewsService()