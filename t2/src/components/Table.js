import React from 'react'
import TableHeader from './TableHeader'
import TableData from './TableData'

export default function Table ({ tableName, tableData }) {
  return (
    <table>
      <caption>{tableName}</caption>
      <thead>
        <tr>
          <th colSpan={3} />
          {tableData.headings.map((heading, index) => (
            <TableHeader key={index} heading={heading} />
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.rows.map((values, index) => (
          <tr key={index}>
            <th colSpan={3}>{'Group ' + (index + 1)}</th>
            {values.map((value, index) => (
              <TableData key={index} value={value} heading={tableData.headings[index]} />
            ))}

            {/* Loop for each missing data in current row (index + values.length to continue from last datacell in row) */}
            {[...Array(amtMissingDataInRow(tableData.headings, values))].map((e, index) =>
              <TableData key={index + values.length} value='?' heading={tableData.headings[index + values.length]} />
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function amtMissingDataInRow (headings, rowValues) {
  return headings.length - rowValues.length
}
