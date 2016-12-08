//include required modules
var crypto = require('crypto-js');
var storage = require('node-persist');

//initialize storage
storage.initSync();

module.exports.createAccount = function(account,masterPassword){

	//get encrypted data from storage
	var enc_accounts = storage.getItemSync('accounts');
	var accounts = [];
	//if data exists.. decrypt accounts to array
	if(typeof enc_accounts !== 'undefined'){
		var bytes = crypto.AES.decrypt(enc_accounts,masterPassword);
		accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}
	//add the new account to array
	accounts.push(account);
	//encrypt the array
	var enc_accounts = crypto.AES.encrypt(JSON.stringify(accounts),masterPassword);
	//store the array
	storage.setItemSync('accounts',enc_accounts.toString());
	console.log("account added to manager");
}

module.exports.getAccount = function(name,masterPassword){
	var enc_accounts = storage.getItemSync('accounts');
	if(typeof enc_accounts === 'undefined'){
		console.log("no account in manager");
	}
	else{
		var accounts = [];
		var bytes = crypto.AES.decrypt(enc_accounts,masterPassword);
		accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
		var found;
		accounts.forEach(function(account){
			if(account.name === name)
				found = account;
		});
		if(typeof found !== 'undefined'){

			console.log("account found :");
			console.log("userId :"+found.userId);
			console.log("password :"+found.password);
		}
		else{
			console.log(name+" not found in manager");
		}
	}

}