""" Generate N-Gram tests"""

from django.test import TestCase
from stats_service.lib import calculate_ngrams


class TestGenerateNgram(TestCase):

    def setUp(self):
        self.params = {
            'ngram': 2,
            'length': 100,
            'case_sensitive': True,
            'body': 'Hello!!!'
        }

    def test_ngram_generation(self):
        """ create n-grams """
        value = calculate_ngrams(**self.params)

        response = {
            '!!': 2,
            'He': 1,
            'el': 1,
            'll': 1,
            'lo': 1,
            'o!': 1
        }
        self.assertEqual(value, response)

    def test_order_returned(self):
        """ ensure the highest count start starts first"""
        self.params['body'] = 'hello!!!1111'
        value = calculate_ngrams(**self.params)
        temp_arr = list()
        for k,v in value.items():
            temp_arr.append((k,v))
        self.assertEqual(temp_arr.pop(0)[0], '11')

    def test_capitalization(self):
        """
            returned n-gram should be capitalize if
            case_sensitive flag is false
        """
        self.params['case_sensitive'] = False
        value = calculate_ngrams(**self.params)
        self.assertTrue('HE' in value)