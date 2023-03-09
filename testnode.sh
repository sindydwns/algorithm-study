#/bin/bash
if [ -z "$1" ]; then
    echo "첫 번째 인자 누락: 몇 주차 스터디?";
    echo "예제) ./testnode.sh week01";
    exit;
fi
if [ -z "$2" ]; then
    echo "두 번째 인자 누락: 문제 번호?";
    echo "예제) ./getsample.sh week01 00000";
    exit;
fi
rundir="$1/$2"
runfile=$3
if [ -z "$runfile" ]; then
    runfile="main.js"
fi
for dir in $rundir/test*/ ; do
    node $rundir/$runfile < $dir"input" > $dir"result"
    if diff $dir"result" $dir"output"; then
        echo $dir success;
    else
        echo $dir fail;
        break;
    fi
done