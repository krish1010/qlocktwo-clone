from flask import Flask
from flask_cors import CORS
from constants import GRID
from helpers import get_grid_info

app = Flask(__name__)
CORS(app=app)


@app.route('/spell')
def get_current_time_spell():
    spell, lights = get_grid_info()
    return {'data': GRID, 'spell': spell, 'lights': lights}
