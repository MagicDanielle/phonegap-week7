var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var value1 = “House Key”;
var key2 = “Phone”;
var value2 = “Android”;
var key3 = “Vape”;
var value3 = “Alien”;
var key4 = “Card”;
var value4 = “Visa”;
var key5 = “Money”;
var value5 = “Yes”;

window.localStorage.setItem( key, value );
window.localStorage.setItem( key1, value1 );
window.localStorage.setItem( key2, value2 );
window.localStorage.setItem( key3, value3 );
window.localStorage.setItem( key4, value4 );
window.localStorage.setItem( key5, value5 );


document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }
