import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get whois information for a single domain name
 * Azure REST API version: 2024-01-01-preview.
 */
export function listWhoisByDomain(args: ListWhoisByDomainArgs, opts?: pulumi.InvokeOptions): Promise<ListWhoisByDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:listWhoisByDomain", {
        "domain": args.domain,
        "enrichmentType": args.enrichmentType,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWhoisByDomainArgs {
    /**
     * The domain name
     */
    domain?: string;
    /**
     * Enrichment type
     */
    enrichmentType: string;
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
 * Whois information for a given domain and associated metadata
 */
export interface ListWhoisByDomainResult {
    /**
     * The timestamp at which this record was created
     */
    readonly created?: string;
    /**
     * The domain for this whois record
     */
    readonly domain?: string;
    /**
     * The timestamp at which this record will expire
     */
    readonly expires?: string;
    /**
     * The whois record for a given domain
     */
    readonly parsedWhois?: types.outputs.EnrichmentDomainWhoisDetailsResponse;
    /**
     * The hostname of this registrar's whois server
     */
    readonly server?: string;
    /**
     * The timestamp at which this record was last updated
     */
    readonly updated?: string;
}
/**
 * Get whois information for a single domain name
 * Azure REST API version: 2024-01-01-preview.
 */
export function listWhoisByDomainOutput(args: ListWhoisByDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWhoisByDomainResult> {
    return pulumi.output(args).apply((a: any) => listWhoisByDomain(a, opts))
}

export interface ListWhoisByDomainOutputArgs {
    /**
     * The domain name
     */
    domain?: pulumi.Input<string>;
    /**
     * Enrichment type
     */
    enrichmentType: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}