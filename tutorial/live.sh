#!/usr/bin/env bash

find . -name "*.adoc" -or -name "*.css" | entr ./render.sh
