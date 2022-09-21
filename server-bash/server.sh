# https://nivethan.dev/devlog/a-web-server-in-bash.html
# https://github.com/avleen/bashttpd
# https://dev.to/leandronsp/building-a-web-server-in-bash-part-i-sockets-2n8b
# https://funprojects.blog/2021/04/11/a-web-server-in-1-line-of-bash/


declare -r DEBUG=1

log() {
    if [ $DEBUG = 1 ]
    then
        echo "$1" >&2;
    fi
}

serve() {
    nc -l -k 127.0.0.1 7999 | ./server.sh process
}

process() {
    echo "Hello, World"
    log "Hello, Error"
}


nc -l -k 127.0.0.1 7999 | echo "Hello, World" 
