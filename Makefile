SRC = lib/*.js
BIN = node

ifeq ($(findstring io.js, $(shell which iojs)),)
	BIN = iojs
endif

ifeq (node, $(BIN))
	FLAGS = --harmony
endif

TESTS = test/*

test:
	@NODE_ENV=test $(BIN) $(FLAGS) \
					./node_modules/.bin/_mocha \
					--require should \
					$(TESTS) \
					--bail

.PHONY: test
