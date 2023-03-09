for j in {1..64}; do
    for i in {1..64}; do
        echo -n $((RANDOM%2))
    done
    echo
done