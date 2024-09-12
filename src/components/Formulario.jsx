import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [arrayFormulario, setArrayFormualrio] = useState([]);
  const [alertaExitosa, setAlertaExitosa] = useState(false);
  const [alertaError, setAlertaError] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setArrayFormualrio([...arrayFormulario, data.nombre, data.apellido, data.email, data.dni]);
    setAlertaExitosa(true);
    setAlertaError(false);
    reset();
  };

  const onError = () => {
    setAlertaError(true);
    setAlertaExitosa(false);
  };

  return (
    <article className="bg-secondary rounded-5 p-5">
      <Form onSubmit={handleSubmit(onSubmit, onError)} className="bg-secondary">
        {alertaExitosa && (
          <Alert variant="success" onClose={() => setAlertaExitosa(false)} dismissible>
            Registro exitoso!
          </Alert>
        )}
        {alertaError && (
          <Alert variant="danger" onClose={() => setAlertaError(false)} dismissible>
            Hubo un error en el registro.
          </Alert>
        )}
        <div className="d-md-flex justify-content-center">
          <div className="me-md-5">
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                {...register("nombre", {
                  required: "Tu nombre es un dato obligatorio",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                  maxLength: {
                    value: 30,
                    message: "Excediste el máximo de caracteres",
                  },
                })}
                type="text"
                placeholder="Ingresa tu nombre"
              />
              <Form.Text className="text-danger mb-3">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                {...register("apellido", {
                  required: "Tu apellido es un dato obligatorio",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" },
                  maxLength: {
                    value: 30,
                    message: "Excediste el máximo de caracteres",
                  },
                })}
                type="text"
                placeholder="Ingresa tu apellido"
              />
              <Form.Text className="text-danger mb-3">
                {errors.apellido?.message}
              </Form.Text>
            </Form.Group>
          </div>
          <div className="ms-md-5">
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register("email", {
                  required: "Tu email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Ingresa un email válido",
                  },
                })}
                placeholder="Tu email"
              />
              <Form.Text className="text-danger mb-3">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                {...register("dni", {
                  required: "El DNI es un dato obligatorio",
                  pattern: {
                    value: /^[0-9]{8}$/,
                    message: "El DNI debe tener exactamente 8 dígitos",
                  },
                })}
                type="text"
                placeholder="Número de DNI"
              />
              <Form.Text className="text-danger mb-3">
                {errors.dni?.message}
              </Form.Text>
            </Form.Group>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Button variant="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </article>
  );
};

export default Formulario;
