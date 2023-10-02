function Questions () {
    return (
     <div className="questionsDiv">
      <div className="leftBlock">
        <div className="question">
         <img src="./images/user.png" alt="" />
          <span>Hey, how are you?</span>
        </div>
        <div className="question" >
          <span>What is a Chatbot?</span>
        </div>
       </div>
       <div className="rightBlock">
        <div className="question" style={{ marginTop: '50px'}}>
           <span>Thanks, how about you?</span>
        </div>
        <div className="question" style={{ marginTop: '50px'}}>
           <span>Okay, bye. </span>
        </div>
       </div>
     </div>
      
  );
}

export default Questions;
