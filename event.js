const School = require('./eventraise');
const school = new School();

//register a listener for bellRing event
school.on('bellRing', function ({ period, text }) {
    console.log(`we need to run ${period} ${text}`);
});

school.startPeriod();
