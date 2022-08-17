const defaultSelect = () => {
    const element = document.querySelector('.choices');
    const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
    });
  };
  
  defaultSelect();

  $( function() {
    $( ".guest__group" ).accordion({
         icons: false,
         heightStyle: "content",
         collapsible: true,
         active: false,
       });
    });

    document.querySelectorAll('.guest__btn').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.guest__btn').forEach(function(btn){
      btn.classList.remove('guest__btn--active')});
      e.currentTarget.classList.add('guest__btn--active');
    document.querySelectorAll('.guest__card').forEach(function(tabsBtn){
        tabsBtn.classList.remove('guest__card--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('guest__card--active');
      });
    });