import requests


login = 'Alex'
password = 'Comar'

res = requests.get(f"http://192.168.31.188:5000/login/{login}_{password}")
log = res.text.strip()

try:
    if log == 'false':
        print('Вы ввели некорректные данные')
    if log == 'true':
        print('Успешный вход')
except Exception as _ex:
    print(_ex)


# http://127.0.0.1:5000/login/User_User
