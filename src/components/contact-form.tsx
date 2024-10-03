"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Loader2, Download } from "lucide-react";

export default function ContactForm() {
  const [form_data, set_form_data] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, set_errors] = useState({ name: "", email: "", message: "" });
  const [is_sending, set_is_sending] = useState(false);
  const [sent_message, set_sent_message] = useState<string | null>(null);

  const validate_form = () => {
    const new_errors = {
      name: !form_data.name.trim() ? "Name is required" : "",
      email: !form_data.email.trim()
        ? "Email is required"
        : !/\S+@\S+\.\S+/.test(form_data.email)
        ? "Email is invalid"
        : "",
      message: !form_data.message.trim() ? "Message is required" : "",
    };
    set_errors(new_errors);
    return Object.values(new_errors).every((error) => error === "");
  };

  const handle_submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate_form()) return;
    set_is_sending(true);

    const form_data = new FormData(e.currentTarget);
    const data = Object.fromEntries(form_data);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
        set_sent_message(JSON.stringify(data, null, 2));
        set_form_data({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
        set_sent_message(JSON.stringify(data, null, 2));
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
      set_sent_message(JSON.stringify(data, null, 2));
    } finally {
      set_is_sending(false);
    }
  };

  const handle_input_change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    set_form_data((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      set_errors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const render_input = (
    name: keyof typeof form_data,
    type: string,
    placeholder: string
  ) => (
    <div>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={form_data[name]}
        onChange={handle_input_change}
        required
        disabled={is_sending}
        className={
          errors[name]
            ? "border-destructive focus-visible:border-destructive focus-visible:bg-background"
            : ""
        }
      />
      {errors[name] && (
        <p className="text-sm text-destructive mt-1">{errors[name]}</p>
      )}
    </div>
  );

  const handle_download = () => {
    if (!sent_message) return;
    const blob = new Blob([sent_message], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sent_message.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <form onSubmit={handle_submit} className="w-full space-y-4" noValidate>
      {render_input("name", "text", "Your Name")}
      {render_input("email", "email", "Your Email")}
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={form_data.message}
          onChange={handle_input_change}
          required
          disabled={is_sending}
          className={
            errors.message
              ? "border-destructive focus-visible:border-destructive focus-visible:bg-background"
              : ""
          }
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={is_sending}>
        {is_sending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
      {sent_message && (
        <Button
          type="button"
          variant="outline"
          className="w-full mt-2 space-x-2"
          onClick={handle_download}
        >
          <Download className="h-4 w-4" />
          <span>Download sent message</span>
        </Button>
      )}
    </form>
  );
}
