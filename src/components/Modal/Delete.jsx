"use client";

import { Button } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DeleteModal() {
  const [ setDeleteModal] = useState(true);

  return (
    <>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure wanna delete?
        </h3>
        <div className="flex justify-center gap-4">
          <Button color="failure" onClick={() => setDeleteModal(false)}>
            {"Yes, I'm sure"}
          </Button>
          <Button color="gray" onClick={() => setDeleteModal(false)}>
            No, cancel
          </Button>
        </div>
      </div>
    </>
  );
}