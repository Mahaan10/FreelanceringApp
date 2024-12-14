import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import ChangeUserStatus from "./ChangeUserStatus";

function UserRow({ index, user }) {
  const [open, setOpen] = useState(false);
  const { status } = user;

  const userStatus = [
    {
      label: "رد شده",
      className: "badge--danger",
    },
    {
      label: "در انتظار تایید",
      className: "badge--secondary",
    },
    {
      label: "تایید شده",
      className: "badge--success",
    },
  ];

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.role}</td>
      <td>
        <span className={`badge ${userStatus[status].className}`}>
          {userStatus[status].label}
        </span>
      </td>
      <td>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="تغییر وضعیت کاربر"
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default UserRow;
