CLASSPATH=/usr/local/Cellar/antlr/4.8_1/antlr-4.8-complete.jar:.
build:
	antlr btrs.g4;
	javac -cp ${CLASSPATH} btrs*.java
run: 
	grun btrs btrsfile sample.bai -gui
clean:
	rm -rf btrs*.{class,java,interp,tokens}