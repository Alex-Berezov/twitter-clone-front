import axios from 'axios'
import { Tweet, TweetState } from '../../store/tweets/contracts/state'

export const TweetsAPI = {
  fetchTweets(): Promise<TweetState['items']> {
    return axios.get('/tweets?_sort=id&_order=desc').then(({ data }) => data)
  },
  addTweet(payload: Tweet): Promise<Tweet> {
    return axios.post('/tweets', payload).then(({ data }) => data)
  },
}
