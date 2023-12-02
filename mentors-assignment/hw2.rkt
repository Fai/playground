#lang racket

(define (area-of-circle r)
  (* pi (* r r)))

(define (area-of-square s)
  (* s s))

(define (area-in-between-square s)
  (-
   (area-of-circle (/ s 2))
   (area-of-square (* 0.5 (* s s)))))

(define (n-area-in-between-square s n)
  (if (= n 0)
      0
      (+ (area-in-between-square s)
         (n-area-in-between-square (/ s (sqrt 2)) (- n 1)))))