import axios from 'axios';
import { omit } from 'lodash-compat/object';

class Review {
  constructor() {
    let token = ('; ' + document.cookie).split('; VtexIdclientAutCookie=').pop().split(';').shift();
    let workspace = ('; ' + document.cookie).split('; vtex_workspace=').pop().split(';').shift();
    let sandbox = ('; ' + document.cookie).split('; vtex_sandbox=').pop().split(';').shift();

    this.defaultHeaders = {
      'Authorization': `token ${token}`,
      'x-vtex-sandbox': sandbox,
      'x-vtex-workspace': workspace ? workspace : 'master'
    };

    this.reviewsResource = '/_resources/review@vtex.review/';
  }

  get(params) {
    params = omit(params, ['$id']);

    return axios.get(this.reviewsResource, {
      params,
      headers: this.defaultHeaders
    });
  }

}

export default Review;
