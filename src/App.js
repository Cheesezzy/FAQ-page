import React, { useState } from 'react';
import data from './components/data';
import Questions from './components/Questions';


function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>FAQ</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Questions key={question.id} {...question}></Questions>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;