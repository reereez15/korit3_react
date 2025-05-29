import { Car } from "../types";
import { DialogContent, TextField, Stack } from "@mui/material";

type DialogFormProps = {
  car: Car;
  handleChange: (event : React.ChangeEvent<HTMLInputElement>) => void;
}

export default function carDialogContent({ car, handleChange } : DialogFormProps) {


  return(
  <DialogContent>
    <Stack spacing={2} mt={1}>
    <TextField name="brand" placeholder="Brand" value={car.brand} onChange={handleChange} />
    <TextField name="model" placeholder="모델명" value={car.model} onChange={handleChange} />
    <TextField name="color" placeholder="Color" value={car.color} onChange={handleChange} />
    <TextField name="registrationNumber" placeholder="등록번호" value={car.registrationNumber} onChange={handleChange} />
    <TextField name="modelYear" placeholder="Model Year" value={car.modelYear} onChange={handleChange} />
    <TextField name="price" placeholder="가격" value={car.price} onChange={handleChange} />
    </Stack>
  </DialogContent>
  );
}