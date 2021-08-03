from flask import Flask
from flask_cors import CORS
from constants import GRID, HOUR_MAP, MIN_MAP
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
    # hour = 21
    # minutes = 42
    if hour >= 12:
        l.append('pm')
        hour -= 12
    else:
        l.append('am')

    min_ = minutes
    _ = 5
    while min_ % 5 != 0:
        min_ -= 1
        _ -= 1
    if min_ > 30:
        l.append('to')
        l.append(MIN_MAP.get(60 - min_))
        hour += 1
    else:
        if min_ == 25:
            l.append('twenty-min-f')
            l.append('five-min')
        else:
            l.append(MIN_MAP.get(min_))
        if min_ != 0:
            l.append('past')
    if min_ == 15 or 60 - min_ == 15:
        l.append('a')
    l.append(HOUR_MAP.get(hour))

    return l
