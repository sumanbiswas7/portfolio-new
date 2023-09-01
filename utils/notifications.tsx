import { showNotification } from "@mantine/notifications";
import { BiError, BiCheck } from "react-icons/bi";

const DURATION = 1500; // 1.5s

export function showSuccessNotification(message: string) {
  return showNotification({
    title: "Success",
    message: message,
    color: "green",
    icon: <BiCheck fill="#fff" />,
    autoClose: DURATION,
  });
}

export function showWarnNotification(message: string) {
  return showNotification({
    title: "Form Invalid",
    message: message,
    color: "yellow",
    icon: <BiError fill="#fff" />,
    autoClose: DURATION,
  });
}

export function showErrorNotification(message: string) {
  return showNotification({
    title: "Opps",
    message: message,
    color: "red",
    icon: <BiError fill="#fff" />,
    autoClose: DURATION,
  });
}
