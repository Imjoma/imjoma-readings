const tableContainer = document.querySelector(".table-container");

const renderTable = `<table>
<tr>
<th>This</th>
<th>is</th>
  <th>Table</th>
  <th>Head</th>
</tr>
<tr>
  <td>This</td>
  <td>is</td>
  <td>Table</td>
  <td>Data</td>
</tr>
 
<tr>
  <td>table-data1</td>
  <td>table-data2</td>
  <td>table-data3</td>
  <td>table-data4</td>
</tr>
</table>
`;

tableContainer.innerHTML = renderTable;

// STYLE: after render
const border = "1px solid black";

// ... table
const table = tableContainer.getElementsByTagName("table")[0];

table.style.width = "60%";
table.style.border = border;
table.style.borderCollapse = "collapse";

// ... table head
const tableHeadRow = table.getElementsByTagName("tr")[0];

tableHeadRow.style.backgroundColor = "#dddddd";

// ... table cells
const tableData = table.getElementsByTagName("td");
const tableHeads = table.getElementsByTagName("th");

const cells = [...tableData, ...tableHeads];

for (let i = 0; i < cells.length; i++) {
  cells[i].style.border = border;
  cells[i].style.padding = ".4rem";
}
