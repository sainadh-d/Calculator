goog.provide('calculator.components');
calculator.components.calc_key = (function calculator$components$calc_key(type,value,symbol){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["key key-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__27780_SHARP_){
return calculator.handlers.key_click_handler(p1__27780_SHARP_);
})], null),(function (){var G__27781 = type;
switch (G__27781) {
case "number":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),symbol], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null),symbol], null);

}
})()], null);
});
calculator.components.screen = (function calculator$components$screen(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.screen","div.screen",1429371602),new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(calculator.state.screen_state))], null);
});
calculator.components.expression_history_display = (function calculator$components$expression_history_display(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.expression-history","div.expression-history",-1879394434),(function (){var iter__4564__auto__ = (function calculator$components$expression_history_display_$_iter__27783(s__27784){
return (new cljs.core.LazySeq(null,(function (){
var s__27784__$1 = s__27784;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27784__$1);
if(temp__5735__auto__){
var s__27784__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27784__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__27784__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__27786 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__27785 = (0);
while(true){
if((i__27785 < size__4563__auto__)){
var exp = cljs.core._nth(c__4562__auto__,i__27785);
cljs.core.chunk_append(b__27786,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["group ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(calculator.state.expression_groups))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27785,exp,c__4562__auto__,size__4563__auto__,b__27786,s__27784__$2,temp__5735__auto__){
return (function (p1__27782_SHARP_){
return calculator.handlers.expression_click_handler(p1__27782_SHARP_);
});})(i__27785,exp,c__4562__auto__,size__4563__auto__,b__27786,s__27784__$2,temp__5735__auto__))
], null),exp], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null)));

var G__27788 = (i__27785 + (1));
i__27785 = G__27788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27786),calculator$components$expression_history_display_$_iter__27783(cljs.core.chunk_rest(s__27784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27786),null);
}
} else {
var exp = cljs.core.first(s__27784__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["group ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(calculator.state.expression_groups))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (exp,s__27784__$2,temp__5735__auto__){
return (function (p1__27782_SHARP_){
return calculator.handlers.expression_click_handler(p1__27782_SHARP_);
});})(exp,s__27784__$2,temp__5735__auto__))
], null),exp], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.rand.cljs$core$IFn$_invoke$arity$0()], null)),calculator$components$expression_history_display_$_iter__27783(cljs.core.rest(s__27784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.deref(calculator.state.expression_history));
})()], null);
});
calculator.components.keyboard = (function calculator$components$keyboard(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard","div.keyboard",1307558669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-row","div.keyboard-row",-1229156960),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","1","1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","2","2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","3","3"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-row","div.keyboard-row",-1229156960),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","4","4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","5","5"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","6","6"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-row","div.keyboard-row",-1229156960),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","7","7"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","8","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","9","9"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-row","div.keyboard-row",-1229156960),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","+-","+/-"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number","0","0"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"number",".","."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-row","div.keyboard-row",-1229156960),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"operator","divide","\u00F7"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"operator","subtract","-"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"operator","add","+"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"operator","multiply","x"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-row","div.keyboard-row",-1229156960),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"action","back","\u2190"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.calc_key,"action","equal","="], null)], null)], null);
});
calculator.components.calculator = (function calculator$components$calculator(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.screen], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.expression_history_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [calculator.components.keyboard], null)], null);
});

//# sourceMappingURL=calculator.components.js.map
