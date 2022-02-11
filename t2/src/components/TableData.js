import React from 'react'

export default function TableData ({ value, heading }) {
  return (
    <td data-label={heading} data-value={getRiskGrade(value)}>{value}</td>
  )
}

function getRiskGrade (value) {
  let riskGrade = 'none'

  if (value < 2) {
    riskGrade = 'critical'
  } else if (value >= 2 && value <= 4) {
    riskGrade = 'high'
  } else if (value >= 4 && value <= 6) {
    riskGrade = 'moderate'
  } else if (value >= 6 && value <= 8) {
    riskGrade = 'normal'
  } else if (value > 8) {
    riskGrade = 'low'
  }

  return riskGrade
}
