import requests
import json


login = "Alexd"
password = "Comard"


res = requests.post(f"http://192.168.31.188:5000/regis", json={"login": f"{login}", "password": f"{password}"})

ress = requests.get(f"http://192.168.31.188:5000/login/{login}_{password}")
log = ress.text.strip()

try:
    if log == 'false':
        print('Вы ввели некорректные данные')
    if log == 'true':
        print('Успешный вход')
except Exception as _ex:
    print(_ex)
