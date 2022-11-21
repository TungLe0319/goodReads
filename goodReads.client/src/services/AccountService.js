import { AppState } from '../AppState'
import { Account } from '../models/Account'
import { Follow } from '../models/Follow'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async follow(id){
    const res = await api.post('/follow', id)
   AppState.follows = [new Follow(res.data), ...AppState.follows]

  }
}

export const accountService = new AccountService()
