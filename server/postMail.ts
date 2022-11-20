export async function postMail() {
    fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then((res) => {
        console.log(res);
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
    });
}
