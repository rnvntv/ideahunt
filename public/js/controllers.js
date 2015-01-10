var ideaHuntApp = angular.module('ideaHuntApp', []);

// Begin of ideaService 
ideaHuntApp.service('ideaService', function($http){
	this.addIdea = function(idea){
		console.log('Inside IdeaService.addIdea');
		console.log(idea);
		return $http.post('http://toprecur.cloudapp.net/ideas', idea);
	};

	this.getIdeas = function(){
		console.log('Inside IdeaService.getIdeas');
		return $http.get('http://toprecur.cloudapp.net/ideas');
	};
});
// End of ideaService 
ideaHuntApp.controller('IdeaHuntListCtrl', function ($scope, ideaService) {
 	console.log('Inside IdeaHuntListCtrl');

	$scope.showUserMenuFlag = false;
	
	//$scope.posts = data.hits;

	$scope.posts = [];
	
	// Call get ideas and populate front end.
	//$scope.getIdeas();

	$scope.addPostFormClass ='new-post-modal hidden';
	$scope.bodyExtraClassOnAddPostForm  ='';

	// ToDO: test author
	//var author = $scope.posts[0].author;
	
	$scope.newPost = {name:'', tagline:'', url:''};

	// Show add post form
	$scope.showAddPostForm = function(){
		console.log('Inside showAddPostForm');
		$scope.addPostFormClass ='new-post-modal';
		$scope.bodyExtraClassOnAddPostForm ='showing-discussion';

	};

	// Hide add post form
	$scope.hideAddPostForm = function(){
		console.log('Inside hideAddPostForm');
		$scope.addPostFormClass ='new-post-modal hidden';
		$scope.bodyExtraClassOnAddPostForm ='';
	};

	// Up vote the post by member
	$scope.upVotePost = function() {

	};

	// remove the vote for the post by voted by member.
	$scope.downvotePost = function() {

	};

	// toggle vote
	$scope.toggleVote = function(post) {
		console.log('Inside toggleVote');
		post.isVote = !post.isVote;
		console.log(post);
	};

	// Handle add post.
	$scope.addPost = function(){
		console.log('Inside add post');
		console.log($scope.newPost);

		console.log('Calling ideaService.addIdea ');
		ideaService.addIdea($scope.newPost).then(function(idea){
				// Add new post to post.
			$scope.posts.push(idea);

			// Reset newPost
			$scope.newPost = {name:'', tagline:'', url:''};

			//Hide addPost form
			$scope.hideAddPostForm();

		},

		function(err){
			console.log('Unable to add idea due to error');
			console.log(err);
		});

		// Populate ideas in front end.
		$scope.populateIdeas = function(){
			ideaService.getIdeas().then(
				function(response){
					$scope.posts = response.data;
				},
				function(err){
					console.log('Unable to get idea from idea service ');
					console.log(err);
				}
			);
		};
	};

	$scope.toggleUserMenu = function(){
		console.log('Inside toggleUserMenu');
		$scope.showUserMenuFlag = !$scope.showUserMenuFlag;
	};
});