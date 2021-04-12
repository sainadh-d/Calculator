goog.provide('calculator.utils');
calculator.utils.evaluate = (function calculator$utils$evaluate(expression){
var sanitized_exp = clojure.string.replace(clojure.string.replace(expression,"x","*"),"\u00F7","/");
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(sanitized_exp));
}catch (e27777){if((e27777 instanceof Error)){
var e = e27777;
return "Error";
} else {
throw e27777;

}
}});
calculator.utils.backspace = (function calculator$utils$backspace(value){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(value),(1))){
return calculator.state.default_display_value;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value,(0),(cljs.core.count(value) - (1)));
}
});
calculator.utils.is_num = (function calculator$utils$is_num(x){
return cljs.core.contains_QMARK_(calculator.state.nums,x);
});

//# sourceMappingURL=calculator.utils.js.map
