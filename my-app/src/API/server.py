from flask import Flask, jsonify, abort, request, render_template


app = Flask(__name__)


users = [
    {
    'id': 1,
    'login': 'Admin',
    'password': 'Admin'
    },
    {
    'id': 2,
    'login': 'User',
    'password': 'User'
    }
]


@app.route('/login', methods=['GET'])
def get_login():
    return jsonify({'users':users})


@app.route('/login/<string:login_name>_<string:password>', methods=['GET'])
def get_id(login_name, password):

    log = list(filter(lambda t: t['login'] == login_name, users))
    passw = list(filter(lambda t: t['password'] == password, users))

    if len(log) == 0 or len(passw) == 0:
        return jsonify(False)
    if len(log) != 0 and len(passw) != 0:
        return jsonify(True)
    else:
        abort(404)

@app.route('/regis', methods=['POST'])
def create_task(data):
    if not request.json or not 'login' in request.json:
        abort(400)
    user = {
        'id': users[-1]['id'] + 1,
        'login': request.json['login'],
        'password': request.json['password']
    }
    users.append(user)
    return jsonify({'user': user}), 201

@app.errorhandler(400)
def not_found_error(error):
    print(error)

@app.errorhandler(500)
def not_found_error(error):
    print(error)




if __name__ == '__main__':
    app.run(debug=True)
