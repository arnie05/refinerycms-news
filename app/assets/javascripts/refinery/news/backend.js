$(document).ready(function(){
  
  $('#page-tabs').tabs();
  $('#copy_body_link').click(function(event) {
    // Find the WYMEditor that maps to the custom_teaser field
    var teaserTextArea = $('#post_custom_teaser')[0];
    var teaserEditor = null;
    $.each(WYMeditor.INSTANCES, function(index, editor) {
      if (editor._element[0] == teaserTextArea) {
        teaserEditor = editor;
      }
    });

    if (teaserEditor) {
      teaserEditor.html($('#post_body').val());
    }

    event.preventDefault();
  });

  page_options.init(false, '', '');

});