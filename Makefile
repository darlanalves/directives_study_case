test:
	./node_modules/karma/bin/karma start karma.conf.js --single-run

tdd:
	./node_modules/karma/bin/karma start karma.conf.js

coverage:
	./node_modules/karma/bin/karma start karma.coverage.js --single-run

build:
	./node_modules/.bin/gulp build

watch:
	./node_modules/.bin/gulp watch

.PHONY: test tdd build coverage watch