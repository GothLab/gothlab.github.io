// ON INCOMING LINK GET 4 STATES / CAT / SUB / TYPE / OBJ . CLICK ON EQ TO INDEXES TO NAV TO CERTAIN OBJECT OR CAT

function mapname_get () {
    
    function get_query(){
    var url = document.location.href;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}

var result = get_query();

$.each(result, function() {
  var key = Object.keys(this)[0];
  var value = this[key];
}); 
 mapname = result.mapname;
 savedmap = localStorage.getItem(mapname);
 saved_maps.push(mapname);
// localStorage.setItem('saved_maps',saved_maps);   
};