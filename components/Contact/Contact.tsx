import styles from "./Contact.module.scss";
import { InfoBox } from "./InfoBox";
import { Form } from "./Form";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export default function Contact() {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <NotificationsProvider>
        <div id="contact" className={styles.page_container}>
          <InfoBox />
          <Form />
        </div>
      </NotificationsProvider>
    </MantineProvider>
  );
}
