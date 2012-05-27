test:
	mocha --reporter list

bench:
	node tests/bench

.PHONY: test
