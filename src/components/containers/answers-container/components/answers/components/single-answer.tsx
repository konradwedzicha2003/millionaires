import React from 'react'

interface AnswerProps {
  text: string,
  isTrue: boolean,
}

const SingleAnswer = ({ text, isTrue }: AnswerProps) => {
  return (
    <div>
      <span>{isTrue.toString()}</span>
      <p>{text}</p>
    </div>
  )
}

export default SingleAnswer