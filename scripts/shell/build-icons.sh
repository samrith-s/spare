#!/usr/bin/env bash

set -e

node_modules/.bin/svgr \
    --out-dir assets/icons \
    node_modules/remixicon/icons \
    $@