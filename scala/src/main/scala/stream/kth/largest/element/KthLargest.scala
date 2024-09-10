package stream.kth.largest.element

import scala.math.{Ordering, min}

class KthLargest(_k: Int, _nums: Array[Int]) {

  private val minHeap = scala.collection.mutable.PriorityQueue[Int]()(Ordering[Int].reverse)

  _nums.foreach(minHeap.enqueue(_))

  def add(`val`: Int): Int = {
    minHeap.enqueue(`val`)
    while(minHeap.size > _k) {
      minHeap.dequeue()
    }
    minHeap.head
  }

}
