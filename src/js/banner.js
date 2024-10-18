import $ from 'jquery';

$(document).ready(function () {
    $('.banner .js-button').on('click', function () {
        const $button = $(this);
        $button.toggleClass('button--state-success');
        $button.toggleClass('button--state-danger');
    });
});