export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8 border-t mt-12">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Maze. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
