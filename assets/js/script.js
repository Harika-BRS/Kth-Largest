function findKthLargest() {
  const array = document
    .getElementById("arrayInput")
    .value.split(",")
    .map(Number);
  const k = parseInt(document.getElementById("kValue").value);

  const kthLargest = findKthLargestElement(array, k);

  document.getElementById(
    "output"
  ).innerText = `Kth Largest Element: ${kthLargest}`;
}

function findKthLargestElement(array, k) {
  if (k > array.length || k <= 0) {
    return "Invalid K value";
  }

  // Sorting the array in descending order
  array.sort((a, b) => b - a);

  // Returning the kth largest element
  return array[k - 1];
}

function findKthSmallest() {
  const array = document
    .getElementById("arrayInput")
    .value.split(",")
    .map(Number);
  const k = parseInt(document.getElementById("kValue").value);

  const kthSmallest = findKthSmallestElement(array, k);

  document.getElementById(
    "output"
  ).innerText = `Kth Smallest Element: ${kthSmallest}`;
}

function findKthSmallestElement(array, k) {
  if (k > array.length || k <= 0) {
    return "Invalid K value";
  }

  // Sorting the array in ascending order
  array.sort((a, b) => a - b);

  // Returning the kth smallest element
  return array[k - 1];
}

// Add this script to clear the input field on page load
document.addEventListener('DOMContentLoaded', function() {
  var arrayInput = document.getElementById('arrayInput');
  arrayInput.value = ''; 
  var kValue = document.getElementById('kValue');
  kValue.value = ''; 
});