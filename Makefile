test:
	mocha -r should --reporter list

bench:
	node tests/bench

.PHONY: test
