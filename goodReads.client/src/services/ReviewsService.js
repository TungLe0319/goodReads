import { api } from "./AxiosService.js"

class ReviewsService{
async createReview(data){
  const res = await api.put('api/reviews/',data)
  console.log(res.data);
}
async getReviews(){
  const res = await api.get('api/reviews')
  
}
async deleteReview(id){
  
  const res = await api.delete(`api/reviews/${id}`)
  
}
}
export const reviewsService = new ReviewsService()