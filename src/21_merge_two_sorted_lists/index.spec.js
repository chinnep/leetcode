const { mergeTwoLists } = require('./index')

class ListNode {
  constructor (val, next) {
    this.val = (val === undefined ? 0 : val)
    this.setNext = (next === undefined ? null : next)
  }

  setNext (next) {
    this.next = next
  }
}

function createList (arr) {
  if (arr.length === 0) return null

  const head = new ListNode(arr[0])
  let p = head

  for (let i = 1; i < arr.length; i++) {
    p.next = new ListNode(arr[i])
    p = p.next
  }
  return head
}

describe('mergeTwoLists', () => {
  it('one pair', () => {
    const list1 = createList([1, 2, 4])
    const list2 = createList([1, 3, 4])
    const expected = createList([1, 1, 2, 3, 4, 4])
    const actual = mergeTwoLists(list1, list2)
    expect(actual).toStrictEqual(expected)
  })

  it('should merge 2 empty lists', () => {
    const list1 = createList([])
    const list2 = createList([])
    const expected = createList([])
    const actual = mergeTwoLists(list1, list2)
    expect(actual).toStrictEqual(expected)
  })

  it('should merge one empty list', () => {
    const list1 = createList([])
    const list2 = createList([1, 3, 4])
    const expected = createList([1, 3, 4])
    const actual = mergeTwoLists(list1, list2)
    expect(actual).toStrictEqual(expected)
  })

  it('should merge one empty list and one single element list', () => {
    const list1 = createList([])
    const list2 = createList([1])
    const expected = createList([1])
    const actual = mergeTwoLists(list1, list2)
    expect(actual).toStrictEqual(expected)
  })
})
