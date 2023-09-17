import React from 'react'
import SingleAnswer from './components/single-answer'

interface SingleAnswer {
  content: string,
  isTrue: boolean,
}

interface Answers {
  answers: SingleAnswer[],
}

const Answers = ({answers}: Answers) => {
  return (
    <div className='answers'>
      {answers.map(answer => {
        return (
          <SingleAnswer
            text={answer.content}
            isTrue={answer.isTrue}
          />
        )
      })}
    </div>
  )
}

export default Answers