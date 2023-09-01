import { HttpRes, StatusCode } from "../utils/http_response";

export async function postMail(data: ContactFormData) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (res.status === StatusCode.OK) {
      return new HttpRes(StatusCode.OK, "Message has been sent successfully");
    } else {
      return new HttpRes(res.status, "An error occurred while sending message");
    }
  } catch (error) {
    return new HttpRes(
      StatusCode.ServerError,
      "Unable to send request to the server"
    );
  }
}

/**
 * ----------------
 *      Types
 * ----------------
 */
interface ContactFormData {
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  message: string | undefined;
}
