import { Alert, AlertTitle, AlertDescription } from "@/app/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { SubdomainLink } from "@/app/components/subdomain-link";

interface FreeEndpointTipAlertProps {
  endpoint: string,
}

export function FreeEndpointTipAlert({ endpoint }: FreeEndpointTipAlertProps) {
  return <Alert className="mb-4">
    <InfoIcon color="#00bb00" />
    <AlertTitle>Tip</AlertTitle>
    <AlertDescription>
      <p>
        <strong className="font-bold">{endpoint}</strong> requests do not count against your <SubdomainLink href="/billing/">subscription</SubdomainLink> limits!
      </p>
    </AlertDescription>
  </Alert>;
}
