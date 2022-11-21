interface Data {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    message: string | undefined;
}

export async function postMail(data: Data) {
    fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    }).then((res) => {
        console.log(res);
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
    });
}
