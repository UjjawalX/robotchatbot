(function(){
	"use strict";
	angular.module("app")
	.controller("chatCtrl",function($scope,$http){
		$scope.name = "Chatbot";
		$scope.usermessages = [];
		$scope.botmessages = [];
		$scope.onSend = onSend;
		
		function onSend(){
			var usersegment = {
				"text":this.msg
			}
			this.msg = "";
			this.usermessages.push(usersegment);
			$http.post("http://localhost:8080/messages/",usersegment).then(function(response){
				console.log(response.data);
				var unbreakedText = response.data.messages;
				var botsegment = {
					"id":response.data.id,
					"text":unbreakedText,
					"type":"bot"
				}
				$scope.usermessages.push(botsegment);
			});
		}
	});
})();