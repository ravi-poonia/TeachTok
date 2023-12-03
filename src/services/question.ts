import {apiClient} from '../utilities/apiClient';

export function fetchQuestion() {
  return apiClient.get('for_you');
}

export function fetchAnswer(id: string) {
  return apiClient.get(`reveal?id=${id}`);
}
