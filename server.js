var http = require('http');
var stack = require('stack');
var creationix = require('creationix');
var vfsLocal = require('vfs-local');
var vfsHttpAdapter = require('vfs-http-adapter');

var vfs = vfsLocal({root: __dirname + '/public/'});

var server = http.createServer(stack(
	creationix.log(),
	vfsHttpAdapter('/', vfs)
)).listen(8080, function() {
	console.log("running at http://localhost:8080");
});
