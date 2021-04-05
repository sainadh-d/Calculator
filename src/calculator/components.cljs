(ns calculator.components
  (:require [calculator.state    :refer [screen-state expression-history expression-groups]]
            [calculator.handlers :refer [key-click-handler expression-click-handler]]))

;; Components
(defn calc-key [type value symbol]
  [:div {:class (str "key key-" type)
         :on-click #(key-click-handler %)}
   (case type
     "number" [:div symbol]
     [:div {:class (str type " " value)} symbol])])

(defn screen []
  [:div.screen (:display @screen-state)])

(defn expression-history-display []
  [:div.expression-history
   (for [exp @expression-history]
     ^{:key (rand)}
     [:span {:class (str "group " (rand-nth expression-groups))
             :on-click #(expression-click-handler %)} exp])])

(defn keyboard []
  [:div.keyboard
   [:div.keyboard-row
    [calc-key "number" "1" "1"]
    [calc-key "number" "2" "2"]
    [calc-key "number" "3" "3"]]
   [:div.keyboard-row
    [calc-key "number" "4" "4"]
    [calc-key "number" "5" "5"]
    [calc-key "number" "6" "6"]]
   [:div.keyboard-row
    [calc-key "number" "7" "7"]
    [calc-key "number" "8" "8"]
    [calc-key "number" "9" "9"]]
   [:div.keyboard-row
    [calc-key "number" "+-" "+/-"]
    [calc-key "number" "0" "0"]
    [calc-key "number" "." "."]]
   [:div.keyboard-row
    [calc-key "operator" "divide" "÷"]
    [calc-key "operator" "subtract" "-"]
    [calc-key "operator" "add" "+"]
    [calc-key "operator" "multiply" "x"]]
   [:div.keyboard-row
    [calc-key "action" "back" "←"]
    [calc-key "action" "equal" "="]]])

(defn calculator []
  [:div.main
   [screen]
   [expression-history-display]
   [keyboard]])
