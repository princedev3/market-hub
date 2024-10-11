"use client"
import toast from 'react-hot-toast';
export async function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_EMAIL as string);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        toast.success("Email Sent")
        form.reset();
    }
}