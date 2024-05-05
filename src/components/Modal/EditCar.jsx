import { Button, FileInput, FloatingLabel, Label, Select } from "flowbite-react";

export default function EditCar() {

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Car</h3>
      <div>
        <div className="mb-4">
          <FloatingLabel variant="outlined" label="Car Name" value={"Supra"}/>
        </div>
        <div className="mb-4">
          <FloatingLabel variant="outlined" label="Rent per Day" value={1200000} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="photo" value="Photo" />
          </div>
          <FileInput id="photo" disabled/>
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="size" value="Size" />
        </div>
        <Select id="size" required>
          <option value={1}>Small</option>
          <option value={2}>Medium</option>
          <option value={3}>Large</option>
        </Select>
      </div>
      <Button>Save</Button>
    </div>
  )
}