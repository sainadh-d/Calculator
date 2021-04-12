goog.provide('calculator.core');
calculator.core.start = (function calculator$core$start(){
var G__6963 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calculator], null);
var G__6964 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__6963,G__6964) : reagent.core.render_component.call(null,G__6963,G__6964));
});
calculator.core.init = (function calculator$core$init(){
return calculator.core.start();
});
goog.exportSymbol('calculator.core.init', calculator.core.init);
calculator.core.stop = (function calculator$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=calculator.core.js.map
