import { Avatar, Modal, Table } from "flowbite-react";
import DeleteModal from "../Modal/Delete";
import EditCar from "../Modal/EditCar";
import { useState } from "react";

export default function CarsComponent() {
  const [ editCarModal, setEditCarModal ] = useState(false)
  const [ deleteModal, setDeleteModal ] = useState(false)
  
  return (
    <div className="bg-blue-50 w-full p-6">
      <h2 className="text-2xl font-semibold">Daftar Mobil</h2>

      <div className="overflow-x-auto mt-4">
      <Table className="text-center">
        <Table.Head>
          <Table.HeadCell>Photo</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Rent per Day</Table.HeadCell>
          <Table.HeadCell>Size</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell> {/* Menggabungkan kedua elemen Table.HeadCell menjadi satu */}
        </Table.Head>
        
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <Avatar bordered />
            </Table.Cell>
            <Table.Cell>Supra</Table.Cell>
            <Table.Cell>Rp. 12000000</Table.Cell>
            <Table.Cell>Small</Table.Cell>
            <Table.Cell>
              <a onClick={() => setEditCarModal(true)} className="font-medium text-blue-700 hover:underline dark:text-cyan-500 hover:cursor-pointer">
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
      <Modal show={editCarModal} size="md" popup onClose={() => setEditCarModal(false)} >
        <Modal.Header />
        <Modal.Body>
          <EditCar/>
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