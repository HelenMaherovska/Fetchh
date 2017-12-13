$(document).ready(function() {

  loadResponces();


  function loadResponces() {
    $.ajax({
      type: 'GET',
      url: './data/response.json',
      success: function(data) {
        printResponses(data);
      },
      error: function() {
        console.log("Internal Server Error. Not possible to load exercises data.");
      }
    });
  }

  function printResponses(dataArr) {
    dataArr.forEach(function(item) {
      let item_elem = $('<div class="item">');
      if (item.selected) {
        item_elem.addClass('selected');
      } else {
        item_elem.addClass('unselected');
      }
      item_elem
        .append(
          $('<div class="content-wrapper">')
          .append(
            $('<div class="left-content">')
            .append(
              $('<p class="circle">')
            )
            .append(
              $('<p class="item-name">').text(item.menuOption.name)
            )
          )
          .append(
            $('<div class="right-content">')
            .append(
              $('<p class="price">').text('\u00A3' + item.menuOption.price)
              .append(
                $('<span class="currency">')
              )
            )
            .append(
              $('<button type="button" class="edit-icon">')
              .append(
                $('<img src="img/icons/edit-icon.svg" alt="edit-icon">')
              )
            )
            .append(
              $('<button type="button" class="delete-icon">')
              .append(
                $('<img src="img/icons/delete-icon.svg" alt="delete-icon">')
              )
            )
          )

        ).prependTo($('#milk'));
      console.log(item_elem);
    });
  }
  $('.add-new').on('click', function(){
    $('<div class="item">')
    .append(
      $('<div class="content-wrapper">')
      .append(
        $('<div class="left-content">')
        .append(
          $('<p class="circle">')
        )
        .append(
          $('<p class="item-name">')
        )
      )
      .append(
        $('<div class="right-content">')
        .append(
          $('<p class="price">')
          .append(
            $('<span class="currency">')
          )
        )
        .append(
          $('<button type="button" class="edit-icon">')
          .append(
            $('<img src="img/icons/edit-icon.svg" alt="edit-icon">')
          )
        )
        .append(
          $('<button type="button" class="delete-icon">')
          .append(
            $('<img src="img/icons/delete-icon.svg" alt="delete-icon">')
          )
        )
      )

    ).insertBefore($(this));
  });
});
