export const renderUnorderedList = (name, style) => {
  return `
  <h4>${name}</h4>
  <ul style='${style}'>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`;
};

export const renderOrderedList = (name, style) => {
  return `
  <h4>${name}</h4>
  <ol style='${style}'>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol`;
};

export const renderDescriptionList = (name, style) => {
  return `
  <h4>${name}</h4>
<dl style='${style}'>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>`;
};
