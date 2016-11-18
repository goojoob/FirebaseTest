function showData() {
	console.log("Visual: showData");
	$("#addRefButton").show();
	$("#addRefButton").unbind().click(function() {});
	$("#addRefButton").click(function() {
		add();
	});		
}

function hideData() {
	console.log("Visual: hideData");
	$("#addRefButton").hide();
}


	
function hideLoginButton() {
	console.log("Visual: hideLoginButton");
	$("#loginButton").hide();
}

function showLoginButton() {
	console.log("Visual: showLoginButton");
	$("#loginButton").show();
	$("#loginButton").one('click',function() {
		login();
	});	
}



function hideLogoutButton() {
	console.log("Visual: hideLogoutButton");
	$("#logoutButton").hide();
}

function showLogoutButton(userEmail) {
	console.log("Visual: showLogoutButton");
	$("#logoutButton").html("logout " + userEmail);
	$("#logoutButton").show();
	$("#logoutButton").one('click',function() {
		logout();
	});
}