(ns calculator.state
  (:require [reagent.core :refer [atom]]))

;; Globals / constants

;; These identifiers correspond to css classes that are used to style the expression-history (history)
(defonce expression-groups ["A" "B" "C" "D"])
(defonce nums "1234567890")
(defonce default-display-value "0")

(defonce expression-history (atom '()))
(defonce screen-state (atom {:display "0"
                             :resulted false}))
