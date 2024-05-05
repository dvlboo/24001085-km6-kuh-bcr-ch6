import { Button, Label, Select, TextInput } from "flowbite-react";

export default function EditUserRoles() {

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit User Roles</h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="User Name" />
        </div>
        <TextInput id="username" value="nama akun" disabled />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="roles" value="Roles" />
        </div>
        <Select id="roles" required>
          <option value="" hidden >Role Saat Ini</option>
          <option value="superadmin">Superadmin</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
      </Select>
      </div>
      <Button>Save</Button>
    </div>
  )
}