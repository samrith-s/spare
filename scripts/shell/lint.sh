#!/usr/bin/env bash

export ESLINT_USE_FLAT_CONFIG=false
node_modules/.bin/eslint --ext .ts,.tsx,.json,.js,.jsx $@ .