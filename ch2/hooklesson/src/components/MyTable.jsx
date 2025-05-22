
export default function MyTable() {

  const students = [
    {id: 1, name: '김일', major: '컴퓨터공학과'},
    {id: 2, name: '김이', major: '경영학과'},
    {id: 3, name: '김삼', major: '패션디자인과'},
  ];

  return (
    <>
      <table>
        <tbody>
          {
            students.map(students =>
              <tr key={students.id}>
                <td>{students.name} |</td>
                <td>{students.major}</td>
              </tr>
            )
}
        </tbody>
      </table>
    </>
  )
}