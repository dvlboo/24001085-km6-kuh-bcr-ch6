"use client";
import { Badge, Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CarsList({ cars }) {
  return (
    <Link to={`/cars/${cars?.id}`}>
      <Card className="max-w-sm hover:cursor-pointer"> 
        <Card className="w-80 h-auto">
          <img  src={cars?.photo}/>
        </Card>
        <div>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {cars?.name}
          </h5>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Rp. {cars?.rent_per_day} / Day
        </p>
        <Badge color="indigo" size="lg">
          {cars?.size?.size_category}
        </Badge>
      </Card>
    </Link>
  )
}

CarsList.propTypes = {
  cars : CarsList.object
}