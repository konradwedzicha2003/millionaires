import React from 'react'

interface QuestionProps {
  question: string,
}

const Question = ({ question }: QuestionProps) => {
  return (
    <div>{question}</div>
  )
}

export default Question