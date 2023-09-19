import * as pulumi from "@pulumi/pulumi";
/**
 * The overview of the compliance result for one report.
 */
export interface OverviewStatusResponse {
    /**
     * The count of all failed full automation control.
     */
    failedCount?: number;
    /**
     * The count of all manual control.
     */
    manualCount?: number;
    /**
     * The count of all passed full automation control.
     */
    passedCount?: number;
}

/**
 * A list which includes all the compliance result for one report.
 */
export interface ReportComplianceStatusResponse {
    /**
     * The Microsoft 365 certification name.
     */
    m365?: OverviewStatusResponse;
}

/**
 * Report's properties.
 */
export interface ReportPropertiesResponse {
    /**
     * Report compliance status.
     */
    complianceStatus: ReportComplianceStatusResponse;
    /**
     * Report id in database.
     */
    id: string;
    /**
     * Report last collection trigger time.
     */
    lastTriggerTime: string;
    /**
     * Report next collection trigger time.
     */
    nextTriggerTime: string;
    /**
     * Report offer Guid.
     */
    offerGuid?: string;
    /**
     * Azure lifecycle management
     */
    provisioningState: string;
    /**
     * Report name.
     */
    reportName: string;
    /**
     * List of resource data.
     */
    resources: ResourceMetadataResponse[];
    /**
     * Report status.
     */
    status: string;
    /**
     * List of subscription Ids.
     */
    subscriptions: string[];
    /**
     * Report's tenant id.
     */
    tenantId: string;
    /**
     * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
     * An example of valid timezone id is "Pacific Standard Time".
     */
    timeZone: string;
    /**
     * Report collection trigger time.
     */
    triggerTime: string;
}

/**
 * Single resource Id's metadata.
 */
export interface ResourceMetadataResponse {
    /**
     * Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1".
     */
    resourceId: string;
    /**
     * Resource kind.
     */
    resourceKind?: string;
    /**
     * Resource name.
     */
    resourceName?: string;
    /**
     * Resource type.
     */
    resourceType?: string;
    /**
     * Resource's tag type.
     */
    tags?: {[key: string]: string};
}

/**
 * Metadata pertaining to creation and last modification of the resource.
 */
export interface SystemDataResponse {
    /**
     * The timestamp of resource creation (UTC).
     */
    createdAt?: string;
    /**
     * The identity that created the resource.
     */
    createdBy?: string;
    /**
     * The type of identity that created the resource.
     */
    createdByType?: string;
    /**
     * The timestamp of resource last modification (UTC)
     */
    lastModifiedAt?: string;
    /**
     * The identity that last modified the resource.
     */
    lastModifiedBy?: string;
    /**
     * The type of identity that last modified the resource.
     */
    lastModifiedByType?: string;
}
