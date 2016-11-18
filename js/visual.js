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
	$("#loginButton").unbind().click(function() {});
	$("#loginButton").click(function() {
		login();
	});	
}



function hideLogoutButton() {
	console.log("Visual: hideLogoutButton");
	$("#logoutButton").hide();
}

function showLogoutButton() {
	console.log("Visual: showLogoutButton");
	$("#logoutButton").show();
    $("#logoutButton").unbind().click(function() {});	
	$("#logoutButton").click(function() {
		logout();
	});	
}