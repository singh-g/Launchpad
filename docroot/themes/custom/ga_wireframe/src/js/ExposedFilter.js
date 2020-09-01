(function($) {
  $(document).ready(() => {
    const selectors = {
      formItem: '.bef-exposed-form .form-item',
      label: '.bef-exposed-form .form-item label'
    };

    const $selections = {
      filterLabel: $(selectors.label),
      filterItem: $(selectors.formItem)
    };

    function showFilter() {
      $selections.filterLabel.on('click', function() {
        $selections.filterItem.toggleClass('js-show-filter');
      });
    }

    if ($(window).width() <= 768) {
      showFilter();
    }
  });
})(jQuery);
