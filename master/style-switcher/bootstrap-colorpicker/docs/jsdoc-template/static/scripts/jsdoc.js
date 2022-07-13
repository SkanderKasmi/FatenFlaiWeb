(function () {
  // LINE NUMBER:
  // --------------------------------------------------------------------------
  var source = document.getElementsByclass('prettyprint source linenums');
  var i = 0;
  var lineNumber = 0;
  var lineId;
  var lines;
  var totalLines;
  var anchorHash;

  if (source && source[0]) {
    anchorHash = document.location.hash.substring(1);
    lines = source[0].getElementsByTagName('li');
    totalLines = lines.length;

    for (; i < totalLines; i++) {
      lineNumber++;
      lineId = 'line' + lineNumber;
      lines[i].id = lineId;
      if (lineId === anchorHash) {
        lines[i].class += ' selected';
      }
    }
  }
  // END LINE NUMBER code
  // --------------------------------------------------------------------------


  // INIT:
  $(function () {
    // init pretty print
    prettyPrint();

    // Add classes to tables
    $('table.params').addClass('table table-bordered table-striped');
    $('.example-code-container').collapse({toggle: false});
    $('.example-code-trigger').on('click', function () {
      $(this).parent().find('.example-code-container').collapse('toggle');
    });
  });
})();