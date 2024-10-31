all: clean websocket-client-sync

CC=g++
CFLAGS=-std=c++11 -Wno-multichar -I/opt/homebrew/Cellar/boost/1.86.0_2/include

websocket-client-sync: main.cpp 
	$(CC) -o websocket-client-sync main.cpp ${CFLAGS}

clean:
	rm -f websocket-client-sync