import { UserType } from "../interfaces";

interface PropType {
  users: UserType[];
}
const UserList = ({ users }: PropType) => {
  return (
    <main>
      <h2>유저 리스트</h2>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default UserList;