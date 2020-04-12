CLASSPATH=/usr/local/Cellar/antlr/4.8_1/antlr-4.8-complete.jar:.
java:
	antlr -Dlanguage=Java ./btrs.g4
	javac -cp ${CLASSPATH} ./btrs*.java
run: 
	grun btrs btrsFile -tree ./data/01.bai
g: 
	grun btrs btrsFile -gui ./data/01.bai
clean:
	rm -rf *.{class,java,interp,tokens}

# NPM 
b:
	npm build
s: 
	npm start
