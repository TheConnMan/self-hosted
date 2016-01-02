var repos = [{
	owner: 'theconnman',
	repo: 'Transient',
	port: 8080
}, {
	owner: 'remie',
	repo: 'YouTransfer',
	port: 8081
}, {
	owner: 'rocketchat',
	repo: 'rocket.chat',
	port: 8082
}, {
	owner: 'dularion',
	repo: 'streama',
	port: 8083
}];

function renderList() {
	Q.all(repos.map(getRepo)).then(function(repos) {
		$('.ui.list').html(repos.map(renderRepo).join(''));
	});
}

function getRepo(repoInfo) {
	var d = Q.defer();
	$.ajax({
		url: 'https://api.github.com/repos/' + repoInfo.owner + '/' + repoInfo.repo,
		success: function(data) {
			data.port = repoInfo.port;
			d.resolve(data);
		}
	});
	return d.promise;
}

function renderRepo(repo) {
	return [
		'<div class="item">',
			'<img class="ui avatar image" src="' + repo.owner.avatar_url + '">',
			'<div class="content">',
				'<a href="#" onclick="window.location.port=' + repo.port + '" class="header">' + repo.name + '</a>',
				'<div class="description">',
					repo.description,
					' (<a href="' + repo.html_url + '">GitHub</a>)',
				'</div>',
			'</div>',
		'</div>'
	].join('');
}
