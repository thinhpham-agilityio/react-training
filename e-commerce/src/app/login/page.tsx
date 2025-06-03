import LoginForm from "@/components/login/login-form";

export default function LoginPage() {
  return (
    <div className="mx-auto w-fit mt-30 border border-border-foreground p-15 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <LoginForm />
    </div>
  );
}
