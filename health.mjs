export default async () => Response.json({
  ok: true,
  service: "bharat-setu-starter",
  message: "Netlify Function is running. Marketplace, authentication, database, AI and payments still require setup."
});
export const config = { path: "/api/health" };
