export const renderUnorderedList = (name) => {
  return `
  <h4>${name}</h4>
  <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`;
};

export const renderOrderedList = (name) => {
  return `
  <h4>${name}</h4>
  <ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol`;
};

export const renderDescriptionList = (name) => {
  return `
  <h4>${name}</h4>
  <dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>`;
};
