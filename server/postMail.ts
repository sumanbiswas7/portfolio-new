interface Data {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    message: string | undefined;
}

export async function postMail(data: Data) {
    const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
    })

    return res
}