(ns calculator.utils
  (:require [clojure.string :as string]
            [calculator.state :refer [default-display-value nums]]))


(defn evaluate [expression]
  (let [sanitized-exp (-> expression
                          (string/replace "x" "*")
                          (string/replace "÷" "/"))]
    (try
      (str (js/eval sanitized-exp))
      (catch js/Error e
        "Error"))))

(defn backspace [value]
  "Emulates backspace i.e, changes xxx -> xx.
  If there is only one digit, then returns default-display-value ie. x -> 0"
  (if (= (count value) 1)
    default-display-value
    (subs value 0 (dec (count value)))))

(defn is-num [x]
  (contains? nums x))
