
help:
	@echo "help      - show make usage"
	@echo "install   - install files"
	@echo "run_local - run local web server"

install:
	scp code.js tanyadonovan@towerandstar.com:/home/tanyadonovan/public_html/
	scp index.html tanyadonovan@towerandstar.com:/home/tanyadonovan/public_html/
	scp images/song_triptych.jpg tanyadonovan@towerandstar.com:/home/tanyadonovan/public_html/images/

run_local:
	@echo "http://localhost:8080/"
	python -m SimpleHTTPServer 8080
