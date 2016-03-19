/*VietHoaTime*/
(function ($) {
   $.fn.replaceText = function (a) {
      var c = $.extend({}, a);
      return this.each(function (a, f) {
         $(this).html(function () {
            var b = this.innerHTML;
            $.each(Object.keys(c), function (a, d) {
               var e = RegExp(d.replace(/(\"|\'|\(|\)|\[|\]|\.|\*|\!|\?|\$|\||\ |\^|\/|\,|\;)/g, "\\$1"), "gi");
               b = b.replace(e, c[d])
            });
            return b
         })
      })
   };
}(jQuery));
timevh=function(){$('.time').replaceText({"Mon":"Thứ 2 ngày","Tue":"Thứ 3 ngày","Wed":"Thứ 4 ngày","Thu":"Thứ 5 ngày","Fri":"Thứ 6 ngày","Sat":"Thứ 7 ngày","Sun":"Chủ nhật ngày"," Jan ":" tháng 1 "," Feb ":" tháng 2 "," Mar ":" tháng 3 "," Apr ":" tháng 4 "," May ":" tháng 5 "," Jun ":" tháng 6 "," Jul ":" tháng 7 "," Aug ":" tháng 8 "," Sep ":" tháng 9 "," Oct ":" tháng 10 "," Nov ":" tháng 11 "," Dec ":" tháng 12 "," - ":" lúc ","on ":" ","Today at":"Hôm nay lúc","Yesterday at":"Hôm qua lúc","vào ngày ":"vào "," pm":" tối"," am":" sáng",", 2":"/2"});$('.time').each(function(){if($(this).text().indexOf('ngày tháng ')>20){$(this).replaceText({"ngày tháng ":"tháng "})}})};timevh();
