var getUser = (id, callback) => {
	var user = {
		id: id,
		name: 'Peter'
	};

	setTimeout(() => {
		callback(user);
	}, 3000);
};

getUser(555, (user) => {
	console.log(user);
});