export const LoggerType = {
    /**
     * Azure Event Hub as log destination.
     */
    AzureEventHub: "azureEventHub",
    /**
     * Azure Application Insights as log destination.
     */
    ApplicationInsights: "applicationInsights",
} as const;

/**
 * Logger type.
 */
export type LoggerType = (typeof LoggerType)[keyof typeof LoggerType];
