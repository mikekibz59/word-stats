# pull python official image
FROM python:3

ENV PYTHONUNBUFFERED 1
# set working directory
WORKDIR /app

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . ./

EXPOSE 8000
