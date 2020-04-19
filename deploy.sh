#!/usr/bin/env sh

# abort on errors
set -e

git add .
git commit -m 'deploy'

git push -f https://github.com/AleroGroup/FES.git

cd -