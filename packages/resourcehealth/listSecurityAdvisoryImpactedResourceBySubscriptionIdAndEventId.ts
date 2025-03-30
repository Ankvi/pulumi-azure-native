import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists impacted resources in the subscription by an event (Security Advisory).
 *
 * Uses Azure REST API version 2022-10-01.
 *
 * Other available API versions: 2022-10-01-preview, 2023-07-01-preview, 2023-10-01-preview, 2024-02-01.
 */
export function listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventId(args: ListSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdArgs, opts?: pulumi.InvokeOptions): Promise<ListSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:resourcehealth:listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventId", {
        "eventTrackingId": args.eventTrackingId,
        "filter": args.filter,
    }, opts);
}

export interface ListSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdArgs {
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
export interface ListSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdResult {
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
 * Lists impacted resources in the subscription by an event (Security Advisory).
 *
 * Uses Azure REST API version 2022-10-01.
 *
 * Other available API versions: 2022-10-01-preview, 2023-07-01-preview, 2023-10-01-preview, 2024-02-01.
 */
export function listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdOutput(args: ListSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:resourcehealth:listSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventId", {
        "eventTrackingId": args.eventTrackingId,
        "filter": args.filter,
    }, opts);
}

export interface ListSecurityAdvisoryImpactedResourceBySubscriptionIdAndEventIdOutputArgs {
    /**
     * Event Id which uniquely identifies ServiceHealth event.
     */
    eventTrackingId: pulumi.Input<string>;
    /**
     * The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
     */
    filter?: pulumi.Input<string>;
}