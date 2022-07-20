const table = document.getElementById("table");
var text = "";
var head = "";
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
// assigning the header values by looping through tableHeader
head += `<tr>`;
tableInfo.tableHeader.forEach((header) => (head += `<th>${header}</th>`));
head += `</tr>`;
table.innerHTML += head;
// adding rows into the table by looping through tableContent
tableInfo.tableContent.forEach(
  (data) =>
    (text += `
    <tr>
        <td>${data["Student Name"]}</td>
        <td>${data.Age}</td>
        <td>${data.Phone}</td>
        <td>${data.Address}</td>
</tr>
`)
);
table.innerHTML += text;
