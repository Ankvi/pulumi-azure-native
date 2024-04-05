import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists impacted resources in the tenant by an event (Security Advisory).
 */
export function listSecurityAdvisoryImpactedResourceByTenantIdAndEventId(args: ListSecurityAdvisoryImpactedResourceByTenantIdAndEventIdArgs, opts?: pulumi.InvokeOptions): Promise<ListSecurityAdvisoryImpactedResourceByTenantIdAndEventIdResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resourcehealth/v20221001preview:listSecurityAdvisoryImpactedResourceByTenantIdAndEventId", {
        "eventTrackingId": args.eventTrackingId,
        "filter": args.filter,
    }, opts);
}

export interface ListSecurityAdvisoryImpactedResourceByTenantIdAndEventIdArgs {
    /**
     * Event Id which uniquely identifies ServiceHealth event.
     */
    eventTrackingId: string;
    /**
     * The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     */
    filter?: string;
}

/**
 * The List of eventImpactedResources operation response.
 */
export interface ListSecurityAdvisoryImpactedResourceByTenantIdAndEventIdResult {
    /**
     * The URI to fetch the next page of events. Call ListNext() with this URI to fetch the next page of impacted resource.
     */
    readonly nextLink?: string;
    /**
     * The list of eventImpactedResources.
     */
    readonly value: types.outputs.EventImpactedResourceResponse[];
}
/**
 * Lists impacted resources in the tenant by an event (Security Advisory).
 */
export function listSecurityAdvisoryImpactedResourceByTenantIdAndEventIdOutput(args: ListSecurityAdvisoryImpactedResourceByTenantIdAndEventIdOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListSecurityAdvisoryImpactedResourceByTenantIdAndEventIdResult> {
    return pulumi.output(args).apply((a: any) => listSecurityAdvisoryImpactedResourceByTenantIdAndEventId(a, opts))
}

export interface ListSecurityAdvisoryImpactedResourceByTenantIdAndEventIdOutputArgs {
    /**
     * Event Id which uniquely identifies ServiceHealth event.
     */
    eventTrackingId: pulumi.Input<string>;
    /**
     * The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     */
    filter?: pulumi.Input<string>;
}