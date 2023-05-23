import requests


login = 'User'
password = 'User'

res = requests.get(f"http://127.0.0.1:5000/login/{login}_{password}")
log = res.text.strip()

if log == 'false':
    print('Вы ввели некорректные данные')
if log == 'true':
    print('Успешный вход')
