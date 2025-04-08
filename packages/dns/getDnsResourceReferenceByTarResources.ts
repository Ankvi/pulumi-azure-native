import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the DNS records specified by the referencing targetResourceIds.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 *
 * Other available API versions: 2018-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dns [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDnsResourceReferenceByTarResources(args?: GetDnsResourceReferenceByTarResourcesArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsResourceReferenceByTarResourcesResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dns:getDnsResourceReferenceByTarResources", {
        "targetResources": args.targetResources,
    }, opts);
}

export interface GetDnsResourceReferenceByTarResourcesArgs {
    /**
     * A list of references to azure resources for which referencing dns records need to be queried.
     */
    targetResources?: types.inputs.SubResource[];
}

/**
 * Represents the properties of the Dns Resource Reference Result.
 */
export interface GetDnsResourceReferenceByTarResourcesResult {
    /**
     * The result of dns resource reference request. A list of dns resource references for each of the azure resource in the request
     */
    readonly dnsResourceReferences?: types.outputs.DnsResourceReferenceResponse[];
}
/**
 * Returns the DNS records specified by the referencing targetResourceIds.
 *
 * Uses Azure REST API version 2023-07-01-preview.
 *
 * Other available API versions: 2018-05-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native dns [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDnsResourceReferenceByTarResourcesOutput(args?: GetDnsResourceReferenceByTarResourcesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDnsResourceReferenceByTarResourcesResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dns:getDnsResourceReferenceByTarResources", {
        "targetResources": args.targetResources,
    }, opts);
}

export interface GetDnsResourceReferenceByTarResourcesOutputArgs {
    /**
     * A list of references to azure resources for which referencing dns records need to be queried.
     */
    targetResources?: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
}