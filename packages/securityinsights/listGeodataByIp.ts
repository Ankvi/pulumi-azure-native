import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get geodata for a single IP address
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listGeodataByIp(args: ListGeodataByIpArgs, opts?: pulumi.InvokeOptions): Promise<ListGeodataByIpResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:listGeodataByIp", {
        "enrichmentType": args.enrichmentType,
        "ipAddress": args.ipAddress,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListGeodataByIpArgs {
    /**
     * Enrichment type
     */
    enrichmentType: string;
    /**
     * The dotted-decimal or colon-separated string representation of the IP address
     */
    ipAddress?: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Geodata information for a given IP address
 */
export interface ListGeodataByIpResult {
    /**
     * The autonomous system number associated with this IP address
     */
    readonly asn?: string;
    /**
     * The name of the carrier for this IP address
     */
    readonly carrier?: string;
    /**
     * The city this IP address is located in
     */
    readonly city?: string;
    /**
     * A numeric rating of confidence that the value in the 'city' field is correct, on a scale of 0-100
     */
    readonly cityConfidenceFactor?: number;
    /**
     * The continent this IP address is located on
     */
    readonly continent?: string;
    /**
     * The county this IP address is located in
     */
    readonly country?: string;
    /**
     * A numeric rating of confidence that the value in the 'country' field is correct on a scale of 0-100
     */
    readonly countryConfidenceFactor?: number;
    /**
     * The dotted-decimal or colon-separated string representation of the IP address
     */
    readonly ipAddr?: string;
    /**
     * A description of the connection type of this IP address
     */
    readonly ipRoutingType?: string;
    /**
     * The latitude of this IP address
     */
    readonly latitude?: string;
    /**
     * The longitude of this IP address
     */
    readonly longitude?: string;
    /**
     * The name of the organization for this IP address
     */
    readonly organization?: string;
    /**
     * The type of the organization for this IP address
     */
    readonly organizationType?: string;
    /**
     * The geographic region this IP address is located in
     */
    readonly region?: string;
    /**
     * The state this IP address is located in
     */
    readonly state?: string;
    /**
     * The abbreviated name for the state this IP address is located in
     */
    readonly stateCode?: string;
    /**
     * A numeric rating of confidence that the value in the 'state' field is correct on a scale of 0-100
     */
    readonly stateConfidenceFactor?: number;
}
/**
 * Get geodata for a single IP address
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native securityinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listGeodataByIpOutput(args: ListGeodataByIpOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListGeodataByIpResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:listGeodataByIp", {
        "enrichmentType": args.enrichmentType,
        "ipAddress": args.ipAddress,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListGeodataByIpOutputArgs {
    /**
     * Enrichment type
     */
    enrichmentType: pulumi.Input<string>;
    /**
     * The dotted-decimal or colon-separated string representation of the IP address
     */
    ipAddress?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}