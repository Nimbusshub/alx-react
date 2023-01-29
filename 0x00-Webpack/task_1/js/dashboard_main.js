import $ from 'jquery';
import { debounce } from 'lodash';

let click_count = 0;

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  click_count++;
  $('#count').html(`${click_count} clicks on the button`);
}

$('button').on('click', debounce(updateCounter, 100));