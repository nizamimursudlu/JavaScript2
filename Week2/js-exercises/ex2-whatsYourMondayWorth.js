function dayWorth(tasks, hourlyRate) {
  const taskDuration = tasks.map(task => {
    return (task.duration)
  })
  const mondayWorth = taskDuration.reduce((a, b) => { return a + b }, 0)
  return Math.round((mondayWorth / 60 * hourlyRate) * 100) / 100 + " €"
}

const mondayTasks = [{
  name: 'Daily standup',
  duration: 30, // specified in minutes
},
{
  name: 'Feature discussion',
  duration: 120,
},
{
  name: 'Development time',
  duration: 240,
},
{
  name: 'Talk to different members from the product team',
  duration: 60,
},
];

console.log(dayWorth(mondayTasks, 25))
console.log(dayWorth(mondayTasks, 13.37))