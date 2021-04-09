""" Validate params tests """

import pytest
from stats_service.lib import validate_post_params
from django.test import TestCase
from rest_framework.exceptions import ParseError, ValidationError


class TestValidateParams(TestCase):

    def setUp(self):
        self.params = {
            'ngram': 1,
            'length': 100,
            'case_sensitive': True,
            'body': 'Hello!!!'
        }

    def test_everything_pass(self):
        """ when valid params are passed returns nil """
        val = validate_post_params(self.params)
        self.assertEqual(val, None)

    def test_when_ngram_less_than_one(self):
        """ fails """
        self.params['ngram'] = -1

        with pytest.raises(ValidationError) as err:
            validate_post_params(self.params)

        self.assertEqual(
            err.value.status_code, 400
        )
        self.assertEqual(str(err.value.detail[0]),
                         'ngram must be a positive number and greater than 0')

    def test_when_length_is_less_than_one(self):
        """ raises and error """

        self.params['length'] = -1

        with pytest.raises(ValidationError) as err:
            validate_post_params(self.params)

        self.assertEqual(
            err.value.status_code, 400
        )
        self.assertEqual(str(err.value.detail[0]),
                         'length must be a positive number and greater than 0')
    
    def test_body_is_null_or_empty(self):
        """ raises and error """

        self.params['body'] = ''

        with pytest.raises(ValidationError) as err:
            validate_post_params(self.params)

        self.assertEqual(
            err.value.status_code, 400
        )
        self.assertEqual(str(err.value.detail[0]),
                         'text must exist to calculate ngrams')
    
    def test_when_unknow_params_are_passed(self):
        """ raises and error """

        self.params['some_param'] = 'None'

        with pytest.raises(ParseError) as err:
            validate_post_params(self.params)

        self.assertEqual(
            err.value.status_code, 400
        )
        self.assertEqual(str(err.value.detail),
                         "some_param shouldn't be in the params")
  

