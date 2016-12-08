//include arguments module
var Args = require('./args');
//include required functions
var Functions = require('./functions');

//get argument list and command
var arg = Args.arg;
var command = Args.command;

switch(command)
{
	case 'create' : try{
						Functions.createAccount({
							name : arg.name,
							userId : arg.userId,
							password : arg.password
						},
						arg.masterPassword);

					}catch(e){
						console.log("wrong master-Password");
					}
					break;
	case 'get'  : try{
						Functions.getAccount(arg.name,arg.masterPassword);

					}catch(e){
						console.log("wrong master-Password");
					}
					break;
	default     :  console.log("Invalid command");
}
