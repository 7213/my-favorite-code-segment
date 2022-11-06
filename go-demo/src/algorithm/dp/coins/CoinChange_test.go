package coins

import "testing"
import "fmt"

func Test_CoinChange_Case1(t *testing.T) {
	var amount float64 = 18
	coints := []float64{1, 2, 5}
	res := CoinChange1(coints, amount)
	fmt.Printf("%f\n", res)
}