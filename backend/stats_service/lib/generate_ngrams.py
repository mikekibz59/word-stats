""" Helper file to build ngrams """


def _build_dict_from_arr(arr: list):
    """ Method to return a dict based length passed"""
    temp_dict = dict()
    for key_pair in arr:
        key, value = key_pair
        temp_dict[key] = value
    return temp_dict


def calculate_ngrams(body=str(), ngram=1, length=100, case_sensitive=True):
    # remove spaces from article if they exist
    body = ''.join(body.split(' '))
    if not case_sensitive:
        body = body.upper()

    ngram_dict = dict()
    for idx in range(len(body)-ngram+1):
        seq = body[idx:idx+ngram]
        if seq not in ngram_dict:
            ngram_dict[seq] = 1
        else:
            ngram_dict[seq] += 1
    sorted_ngram_dict = sorted(ngram_dict.items(), key=lambda x: x[1],
                               reverse=True)[:length]
    return _build_dict_from_arr(sorted_ngram_dict)
