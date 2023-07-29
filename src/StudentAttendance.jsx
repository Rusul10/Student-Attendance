const list = [
  {
    stu: "Mais",
    attend: false
  },
  {
    stu: "Athra",
    attend: true
  },
  {
    stu: "Zahraa",
    attend: false
  },
  {
    stu: "Nada",
    attend: true
  }
];

export default function StudentAttendance() {
  return (
    <div>
      {list.map((student) => {
        if (student.attend === true) {
          return (
            <li>
              <p className="here">{student.stu}</p>
              <p className="phrase"> She is here</p>
            </li>
          );
        }
        if (student.attend === false) {
          return (
            <li>
              <p className="nothere"> {student.stu}</p>
              <p className="phrase"> She is not here</p>
            </li>
          );
        }
      })}
    </div>
  );
}
