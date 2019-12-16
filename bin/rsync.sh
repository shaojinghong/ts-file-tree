function sync_testing() {
    #echo "build..."
    #npm run build

    echo "clean dist..."
    ssh root@139.198.12.177 rm -rf ~/ant-blog/dist
    echo "done"

    echo "rsync..."
    rsync -azrvP --exclude-from=exclude.list ./ root@139.198.12.177:~/ant-blog/
    echo "done"
}

if [ "$1" = "testing" ]; then
   sync_testing
fi

exit 0