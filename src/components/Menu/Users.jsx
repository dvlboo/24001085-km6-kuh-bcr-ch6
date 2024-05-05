import { Avatar, Table, Modal } from "flowbite-react";
import { useRef, useState } from "react";
import EditUserRoles from "../Modal/EditUserRoles";
import DeleteModal from "../Modal/Delete";

export default function UsersComponent() {
  const [ editUserModal, setEditUserModal ] = useState(false);
  const [ deleteModal, setDeleteModal ] = useState(false)
  const emailInputRef = useRef(null);

  return (
    <div className="bg-blue-50 w-full p-6">
      <h2 className="text-2xl font-semibold">Daftar User</h2>

      <div className="overflow-x-auto mt-4">
        <Table className="text-center">
          <Table.Head>
            <Table.HeadCell>Photo</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell>
              Action
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Avatar bordered />
              </Table.Cell>
              <Table.Cell>Kukuh</Table.Cell>
              <Table.Cell>Superadmin</Table.Cell>
              <Table.Cell>
                <a onClick={() => setEditUserModal(true)} className="font-medium text-blue-600 hover:underline dark:text-cyan-500 hover:cursor-pointer">
                  Edit
                </a>
                <span className="mx-2">|</span> {/* Separator */}
                <a onClick={() => setDeleteModal(true)} className="font-medium text-red-500 hover:underline dark:text-cyan-500 hover:cursor-pointer">
                  Delete
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      {/* Edit User Modal */}
      <Modal show={editUserModal} size="md" popup onClose={() => setEditUserModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <EditUserRoles />
        </Modal.Body>
      </Modal>


      {/* Delete User Modal */}
      <Modal show={deleteModal} size="md" onClose={() => setDeleteModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <DeleteModal/>
        </Modal.Body>
      </Modal>
    </div>
  )
}