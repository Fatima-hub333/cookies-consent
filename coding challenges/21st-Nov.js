// [Binary Search Trees]

let height = 1;
let height_left = -1;
let height_right = -1;

if (root.left)
  height_left = this.getHeight(root.left);

if (root.right)
  height_right = this.getHeight(root.right);

height += (height_left > height_right ? height_left : height_right);

return height;

// [Breadth-first Search Tree]

const q = [root]
while (q.length) {
  const n = q.shift()
  process.stdout.write(n.data + ' ')

  if (n.left) q.push(n.left)
  if (n.right) q.push(n.right)
}