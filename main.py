#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
This is the main script for the Raspberry-chillee project.
It serves as a starting point for the application.
"""

from flask import Flask

app = Flask(__name__)

from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
