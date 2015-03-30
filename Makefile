SRC = lib/*.js
BIN = iojs

ifeq ($(findstring io.js, $(shell which node)),)
	BIN = node
endif

ifeq (node, $(BIN))
	FLAGS = --harmony
endif

TESTS = test/*

test:
	NODE_ENV=test $(BIN) $(FLAGS) \
					./node_modules/.bin/_mocha \
					--require should \
					$(TESTS) \
					--bail

.PHONY: test
