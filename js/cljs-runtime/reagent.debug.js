goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36198__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36201__i = 0, G__36201__a = new Array(arguments.length -  0);
while (G__36201__i < G__36201__a.length) {G__36201__a[G__36201__i] = arguments[G__36201__i + 0]; ++G__36201__i;}
  args = new cljs.core.IndexedSeq(G__36201__a,0,null);
} 
return G__36198__delegate.call(this,args);};
G__36198.cljs$lang$maxFixedArity = 0;
G__36198.cljs$lang$applyTo = (function (arglist__36205){
var args = cljs.core.seq(arglist__36205);
return G__36198__delegate(args);
});
G__36198.cljs$core$IFn$_invoke$arity$variadic = G__36198__delegate;
return G__36198;
})()
);

(o.error = (function() { 
var G__36206__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36207__i = 0, G__36207__a = new Array(arguments.length -  0);
while (G__36207__i < G__36207__a.length) {G__36207__a[G__36207__i] = arguments[G__36207__i + 0]; ++G__36207__i;}
  args = new cljs.core.IndexedSeq(G__36207__a,0,null);
} 
return G__36206__delegate.call(this,args);};
G__36206.cljs$lang$maxFixedArity = 0;
G__36206.cljs$lang$applyTo = (function (arglist__36208){
var args = cljs.core.seq(arglist__36208);
return G__36206__delegate(args);
});
G__36206.cljs$core$IFn$_invoke$arity$variadic = G__36206__delegate;
return G__36206;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
