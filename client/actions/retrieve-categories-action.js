import axios from 'axios';
import { browserHistory } from 'react-router';

export const CATEGORIES = 'CATEGORIES';

export function retrieveCategories(organizationId) {
  let url = `api/organizations/${organizationId}/categories`;
    return function(dispatch) {
      axios.get(url).then(function(response) {
        console.log('payload in retrieveCategories...', response);
        dispatch( {type:CATEGORIES, payload: response} );
      });
    }
}
