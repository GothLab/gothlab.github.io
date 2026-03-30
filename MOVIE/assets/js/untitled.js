$(document).ready(function() {
  var imdbRatings = window.IMDB_RATINGS || {};

  function buildViews() {
    $('.tab-pane ul').each(function() {
      var $list = $(this);
      $list.addClass('list-view');

      $list.find('li').each(function() {
        var $li = $(this);
        var textNode = $li.contents().filter(function() {
          return this.nodeType === 3 && $.trim(this.nodeValue) !== '';
        }).first();

        if (textNode.length) {
          var titleText = $.trim(textNode[0].nodeValue);
          textNode[0].nodeValue = '';
          if ($li.find('.film-title').length === 0) {
            $li.prepend('<div class="film-title">' + titleText + '</div>');
          }
        }

        $li.find('.film-title').insertAfter($li.find('img'));
      });

      var $tableView = $('<div class="table-view"></div>');
      var tableHtml = '<table class="table-shell">' +
        '<thead><tr>' +
        '<th>Poster</th>' +
        '<th class="sortable" data-sort="title">Title</th>' +
        '<th class="sortable" data-sort="year">Year</th>' +
        '<th class="sortable" data-sort="rating">IMDB</th>' +
        '</tr></thead><tbody></tbody></table>';

      $tableView.html(tableHtml);

      $list.find('li').each(function() {
        var $li = $(this);
        var title = $li.find('.film-title').text().trim();
        var yearMatch = title.match(/\((\d{4})\)/);
        var year = yearMatch ? yearMatch[1] : '';
        var titleOnly = title.replace(/\s*\(\d{4}\)\s*/, '').trim();
        var poster = $li.find('img').attr('src');
        var alt = $li.find('img').attr('alt') || title;
        var ratingValue = imdbRatings[title] || '--';
        var rowHtml = '<tr data-title="' + title.toLowerCase() + '" data-year="' + (year || '') + '" data-rating="' + ratingValue + '">' +
          '<td><img class="table-poster" src="' + poster + '" alt="' + alt + '"></td>' +
          '<td><div class="table-title">' + titleOnly + '</div></td>' +
          '<td class="table-muted">' + (year || '-') + '</td>' +
          '<td><span class="table-rating"><span class="rating-badge">IMDB</span> ' + ratingValue + '</span></td>' +
          '</tr>';
        $tableView.find('tbody').append(rowHtml);
      });

      $tableView.on('click', 'th.sortable', function() {
        var $th = $(this);
        var sortKey = $th.data('sort');
        var ascending = !$th.hasClass('sorted-asc');
        $tableView.find('th.sortable').removeClass('sorted-asc sorted-desc');
        $th.addClass(ascending ? 'sorted-asc' : 'sorted-desc');

        var rows = $tableView.find('tbody tr').get();
        rows.sort(function(a, b) {
          var aVal = $(a).data(sortKey) || '';
          var bVal = $(b).data(sortKey) || '';

          if (sortKey === 'rating') {
            aVal = parseFloat(aVal) || 0;
            bVal = parseFloat(bVal) || 0;
          }

          if (sortKey === 'year') {
            aVal = parseInt(aVal, 10) || 0;
            bVal = parseInt(bVal, 10) || 0;
          }

          if (aVal < bVal) return ascending ? -1 : 1;
          if (aVal > bVal) return ascending ? 1 : -1;
          return 0;
        });

        $.each(rows, function(_, row) {
          $tableView.find('tbody').append(row);
        });
      });

      $list.after($tableView);
    });
  }

  buildViews();

  $('.view-toggle .icon-btn').on('click', function() {
    var view = $(this).data('view');
    $('.view-toggle .icon-btn').removeClass('active');
    $(this).addClass('active');
    $('body').toggleClass('view-table', view === 'table');
    $('body').toggleClass('view-list', view === 'list');
  });
});