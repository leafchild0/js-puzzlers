/**
 * Loop start detection
 *
 * Problem: Consider a singly linked list of integers that contains a loop.
 * In other words, the tail of the linked list points to one of the previous nodes defining a loop or a circularity.
 * Write a snippet of code that detects the first node of the loop (that is, the node from which the loop starts).
 */

export function findLoopStart(head) {

    let slow = head
    let fast = head

    while (fast != null && fast.next != null) {
        slow = slow.next
        fast = fast.next.next
        // Once the met
        if (slow === fast) {
            console.log('The meet point is at the node with value: ' + slow)
            break
        }
    }

    // If no meeting point was found then there is no loop
    if (fast == null || fast.next == null) {
        return
    }

    // the slow moves to the head of the linked list
    // the fast remains at the meeting point
    // they move simultaneously node-by-node and they should meet at the loop start
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }

    // Both pointers points to the start of the loop
    console.log('Loop start detected at the node with value: ' + fast)

}

export function fillList(size) {

    const head = new Node(0, null);
    const tail = new Node(1, head);

    let currentNode = head;
    const rnd = Math.floor(Math.random() * size - 1)

    for (let i = 0; i < rnd; i++) {
        currentNode = currentNode.next;
    }

    console.log("The generated loop starts at the node with value: " + currentNode);

    // create a loop
    tail.next = currentNode;

    return head
}