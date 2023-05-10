import { Header } from "./Header";
import { Navbar } from "./Navbar";


export function Tasks() {
  const tasks = [{
    text: 'Javascript - Day -1 : Introduction to Browser & web',
    batch: "(B40 WD Tamil)",
    date: "submitted on 07/09/2022",
    score: 8
    },
    {
      text: 'Javascript - Day -2 : Request & Response cycle',
      batch: "(B40 WD Tamil)",
      date: "submitted on 15/09/2022",
      score: 8
      },
      {
        text: 'Javascript - Day -3 : JS array & objects',
        batch: "(B40 WD Tamil)",
        date: "submitted on 17/09/2022",
        score: 9
        },
        {
          text: 'DOM- Day -3 : Recap of Topics',
          batch: "(B40 WD Tamil)",
          date: "submitted on 15/10/2022",
          score: 8
          },
          {
            text: 'Async programming- Day -1 : Callback',
            batch: "(B40 WD Tamil)",
            date: "submitted on 20/10/2022",
            score: 8
            },
            {
              text: 'Async programming- Day -2 : Promise',
              batch: "(B40 WD Tamil)",
              date: "submitted on 25/10/2022",
              score: 8
              },
          ];
  return (
    <div>
        <Navbar />
      <Header />
      <div className='task-page'>
      {tasks.map((data, index) => (
        <TasksDetails task={data} key={index}  />
      ))}
      </div>
    </div>
  );
}

export function TasksDetails({task}) {
// const task = {
// text: 'Javascript - Day -1 : Introduction to Browser & web',
// batch: "(B40 WD Tamil)",
// date: "submitted on 07/09/2022",
// score: 8
// };
  return (
    <div className='task'>
      <div>
       <h6><b>{task.batch}</b></h6>
       <p>{task.date}</p>
      </div>
      <div>
       <p>{task.text}</p>
       <p>{task.score}</p>
      </div>
    </div>
  );
}

