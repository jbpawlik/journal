import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Entry } from './journal.js';

//User Interface Logic

$(document).ready(function() {
  $('#submitButton').click(function(event) {
    event.preventDefault();
    
    let title = $('#titleinput').val();
    let body = $('#bodyinput').val();
    let entry1 = new Entry(title, body);
    let total = entry1.numberOfWords();
    $('#titleoutput').text(title);
    $('#bodyoutput').text(body);
    $('#totaloutput').text(total);

  });
});