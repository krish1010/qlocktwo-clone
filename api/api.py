from flask import Flask
from flask_cors import CORS
from constants import GRID, HOUR_MAP, MIN_MAP
from datetime import datetime

app = Flask(__name__)
CORS(app=app)


@app.route('/spell')
def get_current_time_spell():
    spell, lights = calc()
    return {'data': GRID, 'spell': spell, 'lights': lights}


def get_current_time():
    hour, minutes = (datetime.now().strftime('%H:%M')).split(':')
    return int(hour), int(minutes)


def calc():
    spell = ['it', 'is', 'o', 'clock']
    hour, minutes = get_current_time()
    # import random
    # hour = random.randint(1, 23)
    # minutes = random.randint(1, 59)
    if hour >= 12:
        spell.append('pm')
        hour -= 12
    else:
        spell.append('am')

    min_ = minutes
    count = 4
    lights = [1, 1, 1, 1]
    while min_ % 5 != 0:
        min_ -= 1
        count -= 1
        lights[count] = 0
    if min_ > 30:
        spell.append('to')
        spell.append(MIN_MAP.get(60 - min_))
        hour += 1
    else:
        if min_ == 25:
            spell.append('twenty-min-f')
            spell.append('five-min')
        else:
            spell.append(MIN_MAP.get(min_))
        if min_ != 0:
            spell.append('past')
    if min_ == 15 or 60 - min_ == 15:
        spell.append('a')
    spell.append(HOUR_MAP.get(hour))

    return spell, lights
