import { api } from "./AxiosService.js"

class FeedBackService{
async sendFeedBack(data){
await api.post('api/feedbacks',data)
  
}
}
export const feedBackService = new FeedBackService()