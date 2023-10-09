/**
 * LRU cache
 *
 * Problem: Write a snippet of code to implement a fixed-size LRU cache.
 * LRU cache stands for Least Recently Used Cache.
 * This means that, when the cache is full, adding a new entry will instruct the cache to automatically
 * evict the least recently used entry.
 */

// This should have fixed size, fast data access, fast eviction
// Using Map for access, but for eviction best option is to use Linked List
// Need both directions to remove tail effectively
export class LruCache {
    size = 5
    entries = new Map()
    head
    tail


    constructor(size) {
        this.size = size
    }

    getEntry(key) {
        const found = this.entries.get(key)

        // Need to update entry place in the cache, by adding and removing it
        if (found != null) {
            this._removeNode(found)
            this._addNode(found)
            return found.value
        }

        // I.e. not found
        return -1

    }

    putEntry(key, value) {
        const found = this.entries.get(key)
        // If found need to re-add it to the top of the cache
        if (found != null) {
            found.value = value
            this._removeNode(found)
            this._addNode(found)
        } else {
            // At first both links should be null, but then will be populated
            const newNode = {
                prev: null,
                next: null,
                value: value,
                key: key
            }

            // This will clean up the least used entry if applicable
            // Or simple add a new record
            if (this.entries.size >= this.size) {
                this.entries.delete(this.tail.key)
                this._removeNode(this.tail)
                this._addNode(newNode)
            } else {
                this._addNode(newNode)
            }

            this.entries.set(key, newNode)
        }
    }

    _addNode(node) {
        node.next = this.head
        node.prev = null

        if (this.head != null) {
            this.head.prev = node
        }

        this.head = node
        if (this.tail == null) this.tail = this.head

    }

    _removeNode(node) {
        if (node.prev != null) node.prev.next = node.next
        else this.head = node.next

        if (node.next != null) node.prev.prev = node.prev
        else this.tail = node.prev
    }
}