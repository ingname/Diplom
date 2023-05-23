import requests


login = 'Grax'
password = 'Faz'

user = {
    'login': {login},
    'password': {password}
}

requests.post(f"http://127.0.0.1:5000/regis", data=user)

# res = requests.get(f'http://127.0.0.1:5000/login')
# otvet = res.text.strip()
#
# print(otvet)