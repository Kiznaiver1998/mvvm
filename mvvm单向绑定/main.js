function Subject() {
	this.observes = []
}
Subject.prototype.addObserver = function(observer) {
	this.observers.push(observer)
};
Subject.prototype.removeObserver = function (observer) {
	var index = this.observers.indexOf(observer);
	if (index > -1) {
		this.observers.splice(index,1)
	}
}
Subject.prototype.notify = function () {
	this.observers.forEach(function (observer) {
		observer.update();
	})
}

function Observer(name) {
	this.name = name
	this.update = function () {
		console.log(name + 'update...')
	}
}

var subject = new Subject()

var observer1 = new Observer('hunger')

subject.addObserver(observer1);

var observer2 = new Observer('valley')

subject.addObserver(observer2)

subject.notify();