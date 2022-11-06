package coins

import (
	"math"
)

func CoinChange1(coins []float64, amount float64) float64 {
	if amount == 0 {
		return 0
	}
	if amount < 0 {
		return -1
	}
	var res = math.MaxFloat64;
	for _, coin := range coins {
		subproblem := CoinChange1(coins, amount - coin)
		if subproblem == -1 {
			continue
		}
		res = math.Min(res, 1 + subproblem)  
	}
	return res
}