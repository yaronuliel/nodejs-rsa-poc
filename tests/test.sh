#!/usr/bin/env bash

DIR=`cd $(dirname ${BASH_SOURCE[0]}) 2>/dev/null && pwd`
cd $DIR

input=$(cat input.json);

enc_text=$(node ../main.js encrypt ../key/demo.pub "$input")

echo "Encrypted Text:"
echo "---------";
echo $enc_text
echo "---------";

dec_text=$(node ../main.js decrypt ../key/demo "$enc_text")
echo "Decrypted Text:"
echo "---------";
echo $dec_text
echo "---------";
echo
if [ "$input" = "$dec_text" ]; then
    echo "✅  Decrypted text matches input"
    exit 0
else
    echo "❌ Decrypted text does not match input"
    exit 1
fi
