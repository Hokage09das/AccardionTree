export const buildTree = (data) => {
  console.log(data);
  const nodes = {};
  const tree = [];

  data.forEach((item) => {
    nodes[item.id] = { ...item, children: [] };
  });

  data.forEach((item) => {
    if (item.parent_id === null) {
      tree.push(nodes[item.id]);
    } else if (nodes[item.parent_id]) {
      nodes[item.parent_id].children.push(nodes[item.id]);
    }
  });

  return tree;
};
