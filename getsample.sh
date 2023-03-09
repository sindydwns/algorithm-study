#/bin/bash
if [ -z "$1" ]; then
    echo "첫 번째 인자 누락: 몇 주차 스터디?";
    echo "예제) ./getsample.sh week01";
    exit;
fi
if [ -z "$2" ]; then
    echo "두 번째 인자 누락: 문제 번호?";
    echo "예제) ./getsample.sh week01 00000";
    exit;
fi
node ./sample-crawler/app.js $1 $2
touch $1/subject.md
touch $1/$2/main.js
touch $1/$2/strategy.md