import { DashboardGridProvider } from "graph-italia-components";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

// Replace these with your real values from the project settings
const API_KEY = import.meta.env.PUBLIC_GRAPHITALIA_API_KEY ?? "your_api_key";
const ENDPOINT =
  import.meta.env.PUBLIC_GRAPHITALIA_ENDPOINT ?? "http://localhost:3003";
const DASHBOARD_ID =
  import.meta.env.PUBLIC_GRAPHITALIA_DASHBOARD_ID ?? "your_dashboard_id";

export default function Dashboard({ dashboardId }: { dashboardId?: string }) {
  const isConfigValid = API_KEY && ENDPOINT && (dashboardId || DASHBOARD_ID);

  return (
    <div className="row">
      <div className="col-12">
        {!isConfigValid && (
          <div className="p-10 bg-red-100 text-red-800 rounded">
            <h1 className="text-2xl font-bold mb-4">Configuration Error</h1>
            <p className="text-lg">
              Please ensure that the following environment variables are set
              correctly:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>
                <strong>PUBLIC_GRAPHITALIA_API_KEY</strong>: Your API key from
                Graph Italia.
              </li>
              <li>
                <strong>PUBLIC_GRAPHITALIA_ENDPOINT</strong>: The endpoint URL
                for your Graph Italia instance.
              </li>
            </ul>
          </div>
        )}
        {isConfigValid && (
          <DashboardGridProvider
            apiKey={API_KEY}
            endpoint={ENDPOINT}
            dashboardId={dashboardId || DASHBOARD_ID}
            showHeading
            rowHeight={380}
            margin={16}
            detectUserPrefColorsSchema={false}
          />
        )}
      </div>
    </div>
  );
}
