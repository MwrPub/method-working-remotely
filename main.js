'use strict';
(function () {
	let kv = new MwrClient({
		https: true,
		host: 'rpc.mwr.pub',
		port: 80,
		endpoint: 'kv'
	});
    let txtKey = document.getElementById('txt_key');
    let txtValue = document.getElementById('txt_value');
	let txtKeyS = document.getElementById('txt_key_s');
    let txtValueS = document.getElementById('txt_value_s');
	document.getElementById('btn_get').addEventListener('click', async function(){
        txtValue.value = await kv.get(txtKey.value);
    });
	document.getElementById('btn_set').addEventListener('click', async function(){
        kv.set(txtKeyS.value,txtValueS.value).then(res=>{
			$('#dialog').modal();
		});
    });
})();
