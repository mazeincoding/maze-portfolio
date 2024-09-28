import ContactForm from "./contact-form";
import { Button } from "./ui/button";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Mail } from "lucide-react";

const social_links = [
  { href: "https://github.com/mazeincoding", icon: FaGithub },
  { href: "https://twitter.com/mazewinther1", icon: FaTwitter },
  { href: "mailto:hi@mazecoding.com", icon: Mail },
];

export default function Contact() {
  return (
    <section
      className="flex flex-col items-center gap-4 mt-32 px-12"
      id="contact-section"
    >
      <h2 className="text-4xl font-bold text-primary">Get in touch</h2>
      <div className="text-center">
        <p className="text-base text-muted-foreground">
          Send a message to <span className="font-semibold">hi@mazecoding.com</span>
        </p>
      </div>
      <ContactForm />
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-muted-foreground">Or reach out directly:</p>
        <div className="flex gap-4">
          {social_links.map(({ href, icon: Icon }) => (
            <Button key={href} variant="outline" size="lg" asChild>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
