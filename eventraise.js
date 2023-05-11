const EventEmitter = require('events'); //it's class

class School extends EventEmitter {
    startPeriod() {
        console.log('class started');
        //raise an event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'period ended',
            });
        }, 2000);
    }
}

module.exports = School;
