import { api } from "./AxiosService.js"

class FeedBackService{
async sendFeedBack(data){
 const res= await api.post('api/feedbacks',data)
 // console.log(res.data);
}
}
export const feedBackService = new FeedBackService()