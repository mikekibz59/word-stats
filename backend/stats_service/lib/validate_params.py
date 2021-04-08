""" File to handle validations """

from rest_framework.exceptions import ParseError, ValidationError


def validate_post_params(params: dict):
    """ validate post params """
    allowed_fields = ('body', 'case_sensitive', 'ngram',
                       'case_sensitive', 'length')
    _sanitize_params(params, allowed_fields)
    _validate_params(**params)

def _sanitize_params(params: dict, fields: tuple):
    """ check whether foreigh fields are passed """

    for key, val in params.items():
        if key not in fields:
            raise ParseError(f"{key} shouldn't be in the params")

def _validate_params(**kwargs):
    """ check whether the params are valid """
    ngram = kwargs.get('ngram', None)
    case_sensitive = kwargs.get('case_sensitive', None)
    length = kwargs.get('length', None)
    body = kwargs.get('body', None)

    if ngram and int(ngram) < 1:
        raise ValidationError('ngram must be a positive number and greater than 0')
    
    if case_sensitive and not isinstance(case_sensitive, bool):
        raise ValidationError("case_sensitive must be a boolean value")
    
    if length and int(length) < 1:
        raise ValidationError('length must be a positive number and greater than 0')
    
    if not body:
        raise ValidationError('text must exist to calculate ngrams')



