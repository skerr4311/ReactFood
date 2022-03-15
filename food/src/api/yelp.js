import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer QJPlRDj38EpNSoW_Gsl1SsYpsdu08pHQGIRH7U47ZT-l21939X82KB_kDBgXyYiYGZOMsp7879CGSfTd4CNUc8IuQEbEP_YGkuanHrat5xwueCWXN3a5hcNNEN8vYnYx'
    }
});