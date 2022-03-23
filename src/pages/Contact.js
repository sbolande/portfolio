import ContactForm from "../components/Contact/ContactForm";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Contact() {
  useDocumentTitle("Contact Me");

  return <ContactForm />;
}
