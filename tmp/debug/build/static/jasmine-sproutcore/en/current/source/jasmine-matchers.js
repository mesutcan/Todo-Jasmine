beforeEach(function() {
  this.addMatchers({
    toHaveClass: function(className) {
      this.message = function() {
        return [
            "Expected object to have the '" + className + "' CSS class, but it did not",
            "Expected object not to have the '" + className + "' CSS class, but it did"
        ];
      };

      return this.actual.hasClass(className);

    },

    toHaveContent: function(content) {
      this.message = function() {
        return [
            "Expected page to have '" + content + "' within its content, but it did not",
            "Expected page not to have '" + content + "' within its content, but it did"
        ];
      };

      return this.actual.hasContent(content);
    }
  });
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('jasmine-sproutcore');