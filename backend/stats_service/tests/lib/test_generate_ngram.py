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
