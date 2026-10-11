export default async () => {
  const configured = Boolean(process.env.AI_PROVIDER_API_KEY);
  return Response.json({
    ok: true,
    configured,
    status: configured ? "Provider key detected; provider integration and testing still required." : "AI provider not configured. Add AI_PROVIDER_API_KEY in Netlify environment variables.",
    agents: 25,
    liveAgents: 0
  });
};
export const config = { path: "/api/ai-status" };
