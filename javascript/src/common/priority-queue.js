class PriorityQueue {
  /**
   * Create a new PriorityQueue
   * @param {function} comparator - Optional comparison function
   *        (a, b) => number where:
   *        - Negative number if a should come before b
   *        - Positive number if b should come before a
   *        - Zero if a and b are equivalent
   */
  constructor(comparator = (a, b) => a - b) {
    this.heap = [];
    this.comparator = comparator;
  }

  /**
   * Add an element to the priority queue
   * @param {*} element - The element to add
   */
  offer(element) {
    this.heap.push(element);
    this._bubbleUp(this.heap.length - 1);
  }

  /**
   * Remove and return the top element of the queue
   * @returns {*} The top element, or undefined if empty
   */
  poll() {
    if (this.isEmpty()) return undefined;

    const top = this.heap[0];
    const last = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = last;
      this._bubbleDown(0);
    }

    return top;
  }

  /**
   * Return the top element without removing it
   * @returns {*} The top element, or undefined if empty
   */
  peek() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  /**
   * Check if the queue is empty
   * @returns {boolean} True if the queue is empty
   */
  isEmpty() {
    return this.heap.length === 0;
  }

  /**
   * Get the number of elements in the queue
   * @returns {number} The size of the queue
   */
  size() {
    return this.heap.length;
  }

  /**
   * Clear all elements from the queue
   */
  clear() {
    this.heap = [];
  }

  /**
   * Internal method to maintain heap property when adding an element
   * @param {number} index - Index of the element to bubble up
   */
  _bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.comparator(this.heap[index], this.heap[parentIndex]) < 0) {
        // Swap elements
        [this.heap[index], this.heap[parentIndex]] =
          [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  /**
   * Internal method to maintain heap property when removing top element
   * @param {number} index - Index of the element to bubble down
   */
  _bubbleDown(index) {
    const lastIndex = this.heap.length - 1;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      // Check left child
      if (leftChildIndex <= lastIndex &&
        this.comparator(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0) {
        smallestIndex = leftChildIndex;
      }

      // Check right child
      if (rightChildIndex <= lastIndex &&
        this.comparator(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0) {
        smallestIndex = rightChildIndex;
      }

      // If no change needed, we're done
      if (smallestIndex === index) break;

      // Swap elements
      [this.heap[index], this.heap[smallestIndex]] =
        [this.heap[smallestIndex], this.heap[index]];

      // Continue bubbling down
      index = smallestIndex;
    }
  }
}

export default PriorityQueue;