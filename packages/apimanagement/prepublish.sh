#!/usr/bin/env bash

if [ ! -f ./index.js ]; then
    pnpm run build
fi
