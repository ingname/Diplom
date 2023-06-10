from flask import Flask, jsonify, abort, request
import psycopg2

app = Flask(__name__)

connection = psycopg2.connect(
    dbname='diplom',
    user='postgres',
    password='7393',
    host='localhost'
)


@app.route('/login', methods=['GET'])
def get_login():
    cur = connection.cursor()
    cur.execute('SELECT login FROM public."Users";')
    users = cur.fetchall()
    return jsonify({'users': users})


@app.route('/login/<string:login_name>_<string:password>', methods=['GET'])
def get_id(login_name, password):
    cur = connection.cursor()
    cur.execute(
        f''' SELECT login, password FROM public."Users" WHERE login = '{login_name}' and password = '{password}' ''')
    users = cur.fetchone()
    if users is None:
        return jsonify(False)
    else:
        log = users[0]
        passw = users[1]
        if log == '' or passw == '':
            return jsonify(False)
        if log != '' and passw != '':
            return jsonify(True)
        else:
            abort(404)
    cur.close()


@app.route('/regis', methods=['POST'])
def add_new_user():
    content = request.json
    cur = connection.cursor()
    cur.execute(f''' SELECT login FROM public."Users" WHERE login = '{content['login']}' ''')
    res = cur.fetchone()
    if res is None:
        cur.execute(
            f''' SELECT id FROM public."Users" ''')
        last_id = int(cur.fetchall()[-1][0]) + 1
        cur.execute(
            f''' INSERT INTO public."Users"( id, login, password, role) VALUES ('{str(last_id)}', 
                                    '{content['login']}', '{content['password']}', '2'); ''')
        connection.commit()
        cur.close()
        return jsonify(True), 201
    else:
        return jsonify(False)


@app.errorhandler(400)
def not_found_error(error):
    return jsonify(error)


@app.errorhandler(500)
def not_found_error(error):
    return jsonify(error)


if __name__ == '__main__':
    app.run(debug=True, host="192.168.31.188")
