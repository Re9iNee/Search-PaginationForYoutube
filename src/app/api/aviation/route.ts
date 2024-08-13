import airplanesJson from "@/app/mocks/airplanes.json";

export async function GET() {
  return new Response(JSON.stringify(airplanesJson));
}
