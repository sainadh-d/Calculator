(ns calculator.handlers
  (:require [calculator.state :refer [expression-history screen-state default-display-value]]
            [calculator.utils :as utils]))

;; Note:
;; If expression is evaluated and a new number is pressed then it will be the start of a new expresssion
;; But if an operator is pressed, then the old expression will continue
;; This logic is handled using :evaluated key in screen-state atom

(defn update-state! [screen-state value]
  (let [expression (:display @screen-state)
        evaluated  (:evaluated @screen-state)]
    (case value
      "←"  (if-not (= expression default-display-value)
             (swap! screen-state assoc :display (utils/backspace expression))
             (swap! expression-history rest))
      "="  (do
             (swap! screen-state assoc :evaluated true)
             (swap! expression-history conj expression)
             (swap! screen-state assoc :display (utils/evaluate expression)))
      ;; default case
      (if (or
            (= expression "Error")
            (= expression default-display-value)
            (and (utils/is-num value) evaluated))
        (do
          (swap! screen-state assoc :evaluated false)
          (swap! screen-state assoc :display value))
        (do
          (swap! screen-state assoc :evaluated false)
          (swap! screen-state assoc :display (str expression value)))))))


(defn key-click-handler [event]
  "Callback function which takes the click event and updates the state"
  ;; (.. event -target -value) is same as (-> event .-target .-value) is same as (.-value (.-target event)
  ;; JS obj properties are accessed using .-property
  (update-state! screen-state (.. event -target -innerText)))

(defn expression-click-handler [event]
  (swap! screen-state assoc :evaluated false)
  (swap! screen-state assoc :display (.. event -target -innerText)))
