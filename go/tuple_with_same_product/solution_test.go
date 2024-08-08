package tuple_with_same_product

import "testing"

func TestTupleSameProductForEmptyArray(t *testing.T) {
	nums := []int{}
	want := 0
	result := tupleSameProduct(nums)
	if want != result {
		t.Fatalf("tupleSameProduct = %q, want match for %#q", result, want)
	}
}

func TestTupleSameProductForSingleArray(t *testing.T) {
	nums := []int{1}
	want := 0
	result := tupleSameProduct(nums)
	if want != result {
		t.Fatalf("tupleSameProduct = %q, want match for %#q", result, want)
	}
}

func TestTupleSameProductForArrayWith3Indices(t *testing.T) {
	nums := []int{1, 2, 3}
	want := 0
	result := tupleSameProduct(nums)
	if want != result {
		t.Fatalf("tupleSameProduct = %q, want match for %#q", result, want)
	}
}

func TestTupleSameProductForArrayWithValidTuples(t *testing.T) {
	nums := []int{2, 3, 4, 6}
	want := 8
	result := tupleSameProduct(nums)
	if want != result {
		t.Fatalf("tupleSameProduct = %q, want match for %#q", result, want)
	}
}

func TestTupleSameProductForArrayWithManyValidTuples(t *testing.T) {
	nums := []int{1, 2, 4, 5, 10}
	want := 16
	result := tupleSameProduct(nums)
	if want != result {
		t.Fatalf("tupleSameProduct = %q, want match for %#q", result, want)
	}
}
