import app from "./app";

if (process.env.VERCEL) {
  // When running on Vercel, we just export the Express app
  // and Vercel's Node wrapper handles the port mapping.
} else {
  const rawPort = process.env["PORT"] || "5000";
  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export default app;
