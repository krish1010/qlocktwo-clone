from flask import Flask
from flask_cors import CORS
from constants import GRID
from datetime import datetime

app = Flask(__name__)
CORS(app=app)


@app.route('/spell')
def get_current_time_spell():
    return {'data': GRID, 'time': calc()}


def get_current_time():
    hour, minutes = (datetime.now().strftime('%H:%M')).split(':')
    return int(hour), int(minutes)


def calc():
    l = ['it', 'is', 'o', 'clock']
    hour, minutes = get_current_time()
    hour = 19
    minutes = 45
    if hour > 12:
        l.append('pm')
        hour -= 12
    else:
        l.append('am')
    min_map = {
        0: '',
        5: 'five-min',
        10: 'ten-min',
        15: 'quarter',
        20: 'twenty-min',
        25: 'twenty-min-f',
        30: 'half',
    }
    hour_map = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
    }
    min_ = minutes
    _ = 5
    while min_ % 5 != 0:
        min_ -= 1
        _ -= 1
    if min_ > 30:
        l.append('to')
        l.append(min_map.get(60 - min_))
        hour += 1
    else:
        if min_ == 25:
            l.append('twenty-min-f')
            l.append('five-min')
        else:
            l.append(min_map.get(min_))
        if min_ != 0:
            l.append('past')
    l.append(hour_map.get(hour))

    return l
