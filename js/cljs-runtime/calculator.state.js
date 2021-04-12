goog.provide('calculator.state');
if((typeof calculator !== 'undefined') && (typeof calculator.state !== 'undefined') && (typeof calculator.state.expression_groups !== 'undefined')){
} else {
calculator.state.expression_groups = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C","D"], null);
}
if((typeof calculator !== 'undefined') && (typeof calculator.state !== 'undefined') && (typeof calculator.state.nums !== 'undefined')){
} else {
calculator.state.nums = "1234567890";
}
if((typeof calculator !== 'undefined') && (typeof calculator.state !== 'undefined') && (typeof calculator.state.default_display_value !== 'undefined')){
} else {
calculator.state.default_display_value = "0";
}
if((typeof calculator !== 'undefined') && (typeof calculator.state !== 'undefined') && (typeof calculator.state.expression_history !== 'undefined')){
} else {
calculator.state.expression_history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
}
if((typeof calculator !== 'undefined') && (typeof calculator.state !== 'undefined') && (typeof calculator.state.screen_state !== 'undefined')){
} else {
calculator.state.screen_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"0",new cljs.core.Keyword(null,"resulted","resulted",638664353),false], null));
}

//# sourceMappingURL=calculator.state.js.map
