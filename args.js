var cli = require('yargs');

//arguments list
var args = module.exports.arg = cli
.command('create','create new account',function(yargs){
	yargs.option({
		name:{
			demand : true,
			alias : 'n',
			type : String
		},
		userId:{
			demand : true,
			alias : 'u',
			type : String
		},
		password:{
			demand : true,
			alias : 'p',
			type : String
		},
		masterPassword : {
			demand : true,
			alias : 'm',
			type : String
		}
	});
})
.command('get','get account details',function(yargs){
	yargs.option({
		name : {
			demand : true,
			alias : 'n',
			type : String
		},
		masterPassword : {
			demand : true,
			alias : 'm',
			type : String
		}
	});
}).argv;

//extract command from args
module.exports.command = args._[0];
