#!/bin/bash

mkdir /opt/selfhosted
cd /opt/selfhosted
git clone https://github.com/TheConnMan/Transient.git
docker build -t theconnman/transient Transient
git clone https://github.com/dularion/streama.git
docker build -t dularion/streama streama
