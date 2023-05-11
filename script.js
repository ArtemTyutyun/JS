// Set API endpoints
const usersEndpoint = "https://gorest.co.in/public/v2/users";
const postsEndpoint = "https://gorest.co.in/public/v2/posts";
const commentsEndpoint = "https://gorest.co.in/public/v2/comments";

// Set access token
const accessToken = "cd5339c5e61bc85b55b1428a13ddc5a9f015ee4c493fd6ecd56407922f21e510";

// Get user list
$.ajax({
	url: usersEndpoint,
	type: "GET",
	dataType: "json",
	headers: {
		"Authorization": `Bearer ${accessToken}`
	},
	success: function(users) {
		// Add each user to the list
		users.data.forEach(function(user) {
			$("#user-list").append(`<li data-user-id="${user.id}">${user.name}</li>`);
		});
	},
	error: function( error) {
		console.error(error);
	}
});

// Handle user click event //
$(document).on("click", "#user-list li", function() {
	// Get user ID
	const userId = $(this).data("user-id");

	// Clear post and comment lists
	$("#post-list").empty();
	$("#comment-list").empty();

	// Get post list for user
	$.ajax({
		url: postsEndpoint,
		type: "GET",
		dataType: "json",
		data: {
			"user_id": userId
		},
		headers: {
			"Authorization": `Bearer ${accessToken}`
		},
		success: function(posts) {
			// Add each post to the list
			posts.data.forEach(function(post) {
				$("#post-list").append(`<li data-post-id="${post.id}">${post.title}</li>`);
			});
		},
		error: function( error) {
			console.error(error);
		}
	});
});

// Handle post click event
$(document).on("click", "#post-list li", function() {
	// Get post ID
	const postId = $(this).data("post-id");

	// Clear comment list
	$("#comment-list").empty();

	// Get post details
	$.ajax({
		url: `${postsEndpoint}/${postId}`,
		type: "GET",
		dataType: "json",
		headers: {
			"Authorization": `Bearer ${accessToken}`
		},
		success: function(post) {
			// Add post title and body to the list
			$("#comment-list").append(`<li><h2>${post.data.title}</h2><p>${post.data.body}</p></li>`);
		},
		error: function( error) {
			console.error(error);
		}
	});
});