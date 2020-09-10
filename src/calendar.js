var CLIENT_ID = '858688757515-cr7dlhi1qsism0mvk8aif04u1vqv7obf.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAZpvfPo1fqUATdqe4mjCJRzb79IITYdno';


function getNextEvent(){
    let today = new Date().toISOString();
    let request = 'GET https://www.googleapis.com/calendar/v3/calendars/thisisnotnora%40gmail.com/events?maxResults=1&timeMax='+ today +'&key='+ API_KEY;

    return $.getJSON(request);
}

