const parser = new DOMParser();
const el = parser
  .parseFromString(
    `
  <div id="status">
    <p><span>当前温度</span><span id="temperature">...</span></p>
    <p>(超过 25℃ 模型报警)</p>
  </div>
  `,
    'text/html'
  )
  .querySelector('#status');

const createPoiNode = (ssp) => {
  ssp.createPoiNode({
    type: '3D',
    element: el,
    id: 'status_node',
    name: 'status_node',
    position: {
      x: 0,
      y: 20,
      z: 0,
    },
    scale: {
      width: 0.2,
      height: 0.2,
    },
  });
  return el;
};
