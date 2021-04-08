""" API viewsets"""
from rest_framework.test import APIClient, APITestCase


class TestSetsViewSet(APITestCase):
    """ Viewsets tests """

    def setUp(self):
        self.client = APIClient()
        self.params = {
            'ngram': 2,
            'body': 'the quick brown fox jumps over the lazy dog',
            'case_sensitive': False,
            'length': 5
        }

    def test_stats_creation(self):
        expected_res = {'TH': 2, 'HE': 2, 'EQ': 1, 'QU': 1, 'UI': 1}
        path = '/api/stats/create_stats'
        params = self.params
        response = self.client.post(path, params, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data, expected_res)

    def test_with_negative_ngram(self):
        path = '/api/stats/create_stats'
        self.params['ngram'] = -1
        response = self.client.post(path, self.params, format='json')

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data['message'],
                         'ngram must be a positive number and greater than 0')

    def test_with_negative_length(self):
        path = '/api/stats/create_stats'
        self.params['length'] = -1
        response = self.client.post(path, self.params, format='json')

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data['message'],
                         'length must be a positive number and greater than 0')

    def test_with_null_body(self):
        path = '/api/stats/create_stats'
        self.params['body'] = ''
        response = self.client.post(path, self.params, format='json')

        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.data['message'],
                         'text must exist to calculate ngrams')
