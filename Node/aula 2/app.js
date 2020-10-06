var http = require("http");
var operacoes = require("./operacoes");

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(
  	"A soma de 7 + 7 é: " + 
  	operacoes.subtracao(7, 7) +
  	 "<br>" + 
  	 operacoes.divisao(7, 7) 
  	);
  res.end();
}).listen(8081);