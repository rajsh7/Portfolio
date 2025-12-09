import { redirect } from "next/navigation";

export default function ResumeRedirect() {
  redirect("/resume.pdf"); // stored in /public
}
