import { useForm } from "react-hook-form";
import { send } from "emailjs-com";
import styles from "./Contact.module.css";
import InputS from "../../Shared/Input";
import TextareaS from "../../Shared/Textarea";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_n5muktg", "template_go1n4z4", data, "AwzASSl8lbR6arECh")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    console.log(data);
  };

  return (
    <div id="contact" className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Contactame</h2>
        <form className={styles.generalForm} onSubmit={handleSubmit(onSubmit)}>
          <InputS
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            label="Name"
            register={register}
            error={errors.name}
          />
          <InputS
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            label="Email"
            register={register}
            error={errors.email}
          />
          <TextareaS
            label="Leave your message"
            name="message"
            placeholder="Message"
            register={register}
            error={errors.message}
          />
          <div className={styles.formButtons}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <div className={styles.right}>
        <p className={styles.simplyText}>
          Tienes una oferta, consulta o solo una duda? no dudes en enviarme un
          mensaje
        </p>
      </div>
    </div>
  );
};

export default Contact;
