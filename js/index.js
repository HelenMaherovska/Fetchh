$(document).ready(function() {

loadResponces();


  function loadResponces() {
    $.ajax({
      type: 'GET',
      url: './data/response.json',
      success: function(data) {
        // clearResponces();
        printResponses(data);
      },
      error: function() {
        console.log("Internal Server Error. Not possible to load exercises data.");
      }
    });
  }

  // function clearResponces() {
  //   $('.item') each(function() {
  //     $(this.remove());
  //   });
  // }
  function printResponses(dataArr) {
    dataArr.forEach(function(item) {
      // if (item.selected === 'true') {
      console.log(item);
        $('<div class="item">')
          .addClass('selected')
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
                $('<p class="price">').text(item.menuOption.price)
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

          ).appendTo($('#milk'));
          console.log($('#milk'));
      // }
    })
  }
});
