$(document).ready(function () {
    // Format all uj_tables
    $('.uj_table').each(function () {
        $(this).find('tr').each(function () {
            $(this).css('border-style', 'solid');
            $(this).css('border-width', '0px 0px 1px');
            $(this).css('border-color', '#D3D3D3');
            $(this).attr('originalBackgroundColor', $(this).css('background-color'));
            $(this).hover(function () {
                $(this).css('background-color', '#fff8dc');
            }, function () {
                $(this).css('background-color', $(this).attr('originalBackgroundColor'));
            })
        })
    })
});