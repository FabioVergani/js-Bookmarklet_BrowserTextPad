(w=>{
	const d=w.document,
	f=()=>{
		const b=d.body;
		b.spellcheck=false;
		b.contentEditable=true
	};
	if('complete'!==d.readyState){
		const l=x=>{d[x+'EventListener']('load',g,true)},
		g=e=>{
			l('remove');
			f()
		};
		l('add')
	}else{
		f()
	}
})(window.open());
