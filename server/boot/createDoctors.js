const moment = require('moment');

moment.locale('ru');

const doctors = [
    {
        spec: 'surgeon',
        name: 'Jon',
        working: {
            days: {
                start: '15/04/10',
                end: moment(new Date()).add(4, 'd').format('YY/MM/DD'),
            },
            hours: {
                start: '10:00',
                end: '15:00',
            },
        },
        busy: [
            {
                start: `${moment(new Date()).format('YY/MM/DD')} 16:00`,
                end: `${moment(new Date()).format('YY/MM/DD')} 17:00`,
            },
        ],

    },
    {
        spec: 'therapist',
        name: 'Bob',
        working: {
            days: {
                start: '15/04/12',
                end: moment(new Date()).add(5, 'd').format('YY/MM/DD'),
            },
            hours: {
                start: '10:00',
                end: '16:00',
            },
        },
        busy: [
            {
                start: `${moment(new Date()).format('YY/MM/DD')} 10:00`,
                end: `${moment(new Date()).format('YY/MM/DD')} 11:00`,
            },
            {
                start: `${moment(new Date()).format('YY/MM/DD')} 11:00`,
                end: `${moment(new Date()).format('YY/MM/DD')} 12:00`,
            },
        ],
    },
    {
        spec: 'dentist',
        name: 'Mike',
        working: {
            days: {
                start: moment(new Date()).format('YY/MM/DD'),
                end: moment(new Date()).add(7, 'd').format('YY/MM/DD'),
            },
            hours: {
                start: '10:00',
                end: '13:00',
            },
        },
        busy: [
            {
                start: `${moment(new Date()).format('YY/MM/DD')} 11:00`,
                end: `${moment(new Date()).format('YY/MM/DD')} 12:00`,
            },
            {
                start: `${moment(new Date()).add(1, 'd').format('YY/MM/DD')} 11:00`,
                end: `${moment(new Date()).add(1, 'd').format('YY/MM/DD')} 12:00`,
            },
            {
                start: `${moment(new Date()).add(2, 'd').format('YY/MM/DD')} 12:00`,
                end: `${moment(new Date()).add(2, 'd').format('YY/MM/DD')} 13:00`,
            },
        ],
    },
    {
        spec: 'dentist',
        name: 'Ken',
        working: {
            days: {
                start: moment(new Date()).format('YY/MM/DD'),
                end: moment(new Date()).add(14, 'd').format('YY/MM/DD'),
            },
            hours: {
                start: '10:00',
                end: '13:00',
            },
        },
        busy: [
            {
                start: `${moment(new Date()).add(1, 'd').format('YY/MM/DD')} 11:00`,
                end: `${moment(new Date()).add(1, 'd').format('YY/MM/DD')} 12:00`,
            },
            {
                start: `${moment(new Date()).add(2, 'd').format('YY/MM/DD')} 12:00`,
                end: `${moment(new Date()).add(2, 'd').format('YY/MM/DD')} 13:00`,
            },
            {
                start: `${moment(new Date()).add(3, 'd').format('YY/MM/DD')} 12:00`,
                end: `${moment(new Date()).add(3, 'd').format('YY/MM/DD')} 13:00`,
            },
        ],
    },
];

module.exports = (app) => {
    app.dataSources.mongoDs.automigrate('Doctors', (err) => {
        if (err) throw err;

        app.models.Doctors.create(
            doctors, (err, doctorsCreated) => {
                if (err) throw err;

                console.log('Models created: \n', doctorsCreated);
            });
    });
};
