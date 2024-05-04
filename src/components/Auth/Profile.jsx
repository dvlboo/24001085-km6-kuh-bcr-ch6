import { Card } from "flowbite-react";

export default function ProfileComponent() {
  return (
    <Card className="flex items-center">
      <h2>My Profile</h2>
      <Card className="flex items-center w-80 h-80">
        <img src="/assets/text.png" alt=""/>
      </Card>
      <p>Name : </p>
      <p>Email : </p>
      <p>Role : </p>
    </Card>
  )
}