
ideaHuntApp.controller('IdeaHuntListCtrl', function ($scope, ideaService, authService) {
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
		console.log('Inside toggleVote for idea id: ' + post._id);
		console.log(post);

		if (typeof userId != 'undefined'){
			console.log('user id: ' + userId);
			ideaService.toggleIdeaVote(post._id, userId).then(
				function(data){
					console.log("ideaService toggleIdeaVote success ");
					console.log(data);
					post.isVote = !post.isVote;
					// set votes properly
					post.votes = data.data.data.votes;
					console.log(post);
				},
				function(err){
					console.log("Unable to toggle idea vote due to error " );
					console.log(err);
				}
			);
		}else {
			alert('Please login to vote idea.');
		}
	};

	// Populate ideas in front end.
	$scope.populateIdeas = function(){
		console.log('Inside populateIdeas()');
		ideaService.getIdeas().then(
			function(response){
				console.log('Got get ideas response from server is ');
				console.log(response);
				$scope.posts = response.data.data;
			},
			function(err){
				console.log('Unable to get idea from idea service ');
				console.log(err);
			}
		);
	};

	//calling populate ideas 
	$scope.populateIdeas();

	// Handle add post.
	$scope.addPost = function(){
		console.log('Inside add post');
		console.log($scope.newPost);

		console.log('Calling ideaService.addIdea ');
		ideaService.addIdea($scope.newPost).then(
			function(idea){
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

	};

	
	

	$scope.toggleUserMenu = function(){
		console.log('Inside toggleUserMenu');
		$scope.showUserMenuFlag = !$scope.showUserMenuFlag;
	};
});