"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif" }}>
          <h1 style={{ fontSize: "2rem", color: "#1A3079", marginBottom: "1rem" }}>
            เกิดข้อผิดพลาดร้ายแรง
          </h1>
          <p style={{ color: "#64748b", marginBottom: "2rem" }}>
            A critical error occurred. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{ backgroundColor: "#E39B16", color: "white", padding: "0.75rem 2rem", border: "none", borderRadius: "0.375rem", fontSize: "1rem", fontWeight: "bold", cursor: "pointer" }}
          >
            ลองอีกครั้ง / Try Again
          </button>
        </main>
      </body>
    </html>
  );
}
