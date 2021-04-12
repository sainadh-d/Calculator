goog.provide('calculator.handlers');
calculator.handlers.update_state_BANG_ = (function calculator$handlers$update_state_BANG_(screen_state,value){
var expression = new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(screen_state));
var evaluated = new cljs.core.Keyword(null,"evaluated","evaluated",1286001698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(screen_state));
var G__27778 = value;
switch (G__27778) {
case "\u2190":
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expression,calculator.state.default_display_value)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(screen_state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),calculator.utils.backspace(expression));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(calculator.state.expression_history,cljs.core.rest);
}

break;
case "=":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(screen_state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluated","evaluated",1286001698),true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calculator.state.expression_history,cljs.core.conj,expression);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(screen_state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),calculator.utils.evaluate(expression));

break;
default:
if(cljs.core.truth_((function (){var or__4160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expression,"Error");
if(or__4160__auto__){
return or__4160__auto__;
} else {
var or__4160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expression,calculator.state.default_display_value);
if(or__4160__auto____$1){
return or__4160__auto____$1;
} else {
if(calculator.utils.is_num(value)){
return evaluated;
} else {
return false;
}
}
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(screen_state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluated","evaluated",1286001698),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(screen_state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(screen_state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluated","evaluated",1286001698),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(screen_state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(expression),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
}

}
});
calculator.handlers.key_click_handler = (function calculator$handlers$key_click_handler(event){

return calculator.handlers.update_state_BANG_(calculator.state.screen_state,event.target.innerText);
});
calculator.handlers.expression_click_handler = (function calculator$handlers$expression_click_handler(event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(calculator.state.screen_state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluated","evaluated",1286001698),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(calculator.state.screen_state,cljs.core.assoc,new cljs.core.Keyword(null,"display","display",242065432),event.target.innerText);
});

//# sourceMappingURL=calculator.handlers.js.map
