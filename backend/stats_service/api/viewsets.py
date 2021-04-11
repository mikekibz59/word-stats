""" word stats viewsets"""

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

from stats_service.lib import (handle_error, validate_post_params,
                            calculate_ngrams)


class StatsViewSet(viewsets.ViewSet):
    """ Word stats api endpoints declarations """

    @handle_error
    @action(methods=['POST'], detail=False)
    def create_stats(self, request):
        """ create stats """

        post_params = request.data
        validate_post_params(post_params)
        ngram = post_params.get('ngram', 1)
        body = post_params.get('body')
        case_sensitive = post_params.get('case_sensitive', True)
        length = post_params.get('length', 100)

        stats = calculate_ngrams(ngram=int(ngram), body=body,
                                 case_sensitive=case_sensitive, length=int(length))

        return Response(stats, status=status.HTTP_201_CREATED)
