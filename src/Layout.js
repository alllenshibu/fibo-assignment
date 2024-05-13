import Navigation from "./components/Navigation";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen">
      <main className="px-6 pt-6">{children}</main>
      <Navigation />
    </div>
  );
}
