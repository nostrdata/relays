#!/usr/bin/env bash

curl https://relays.xport.top/ | grep 'let relays' | sed 's/.* = //' | jq > data/xtop.json
