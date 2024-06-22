export const ContentType = {
    /**
     * The content type is application/json.
     */
    ApplicationJson: "application/json",
} as const;

/**
 * content type
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export const EnableSslVerification = {
    /**
     * The ssl verification is enabled.
     */
    True: "true",
    /**
     * The ssl verification is not enabled.
     */
    False: "false",
} as const;

/**
 * whether to enable ssl verification
 */
export type EnableSslVerification = (typeof EnableSslVerification)[keyof typeof EnableSslVerification];

export const EvidenceType = {
    /**
     * The evidence is a file.
     */
    File: "File",
    /**
     * The evidence auto collected by App Compliance Automation.
     */
    AutoCollectedEvidence: "AutoCollectedEvidence",
    /**
     * The evidence is data.
     */
    Data: "Data",
} as const;

/**
 * Evidence type.
 */
export type EvidenceType = (typeof EvidenceType)[keyof typeof EvidenceType];

export const NotificationEvent = {
    /**
     * The subscribed report's snapshot is successfully generated.
     */
    Generate_snapshot_success: "generate_snapshot_success",
    /**
     * The subscribed report's snapshot is failed to generate.
     */
    Generate_snapshot_failed: "generate_snapshot_failed",
    /**
     * The subscribed report failed while collecting the assessments.
     */
    Assessment_failure: "assessment_failure",
    /**
     * The subscribed report's configuration is changed.
     */
    Report_configuration_changes: "report_configuration_changes",
    /**
     * The subscribed report is deleted.
     */
    Report_deletion: "report_deletion",
} as const;

/**
 * notification event.
 */
export type NotificationEvent = (typeof NotificationEvent)[keyof typeof NotificationEvent];

export const SendAllEvents = {
    /**
     * Need send notification under any event.
     */
    True: "true",
    /**
     * No need to send notification under any event.
     */
    False: "false",
} as const;

/**
 * whether to send notification under any event.
 */
export type SendAllEvents = (typeof SendAllEvents)[keyof typeof SendAllEvents];

export const UpdateWebhookKey = {
    /**
     * Need update the webhook key.
     */
    True: "true",
    /**
     * No need to update the webhook key.
     */
    False: "false",
} as const;

/**
 * whether to update webhookKey.
 */
export type UpdateWebhookKey = (typeof UpdateWebhookKey)[keyof typeof UpdateWebhookKey];

export const WebhookStatus = {
    /**
     * The webhook is enabled.
     */
    Enabled: "Enabled",
    /**
     * The webhook is disabled.
     */
    Disabled: "Disabled",
} as const;

/**
 * Webhook status.
 */
export type WebhookStatus = (typeof WebhookStatus)[keyof typeof WebhookStatus];
