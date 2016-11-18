		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyCfGN726WyMJV709-jq82m7CiWOB62-71E",
			authDomain: "iogur-654b5.firebaseapp.com",
			databaseURL: "https://iogur-654b5.firebaseio.com",
			storageBucket: "iogur-654b5.appspot.com",
			messagingSenderId: "428225819798"
		};
		firebase.initializeApp(config);




		firebase.database().ref('queja').on('value', function(snapshot) {
			var output = [];

			snapshot.forEach(function(child) {
				output.push(child.val().date+'-'+child.val().desc+'<br/>');	
				console.log(child.val().desc);
			});
			$('#data-table').html(output.join(''));
		});

		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				alert(user.email);
			} else {
				alert("NO LOG");
			}
		});


		function login() {
			var email = "antrorc@gmail.com";
			var password = "testUser";
			
			firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
				console.log("HOLA");
			}, function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				alert(errorCode);
			});			
		}

		
		function logout() {
			firebase.auth().signOut().then(function() {
			  alert("SIGNED OUT");
			}, function(error) {
			  alert("ERROR SIGNING OUT");
			});				
		}


		function addpush() {
			var llave = firebase.database().ref('queja').push({
				userid: "goojoob",
				desc: "text desc",
				coor: 21,
				date: firebase.database.ServerValue.TIMESTAMP
			}, function(error) {
				if (error) {
					alert("Error adding register: " + error);
				}
			}).key;		
		}
		
		
		function add() {
			var reference = firebase.database().ref('queja').child("id1");
			reference.set({
				userid: "goojoob",
				desc: "text desc",
				coor: 21,
				date: firebase.database.ServerValue.TIMESTAMP
			}, function(error) {
				if (error) {
					alert("Error adding register: " + error);
				}
			});		
		}