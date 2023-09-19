import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns the DNS records specified by the referencing targetResourceIds.
 */
export function getDnsResourceReferenceByTarResources(args?: GetDnsResourceReferenceByTarResourcesArgs, opts?: pulumi.InvokeOptions): Promise<GetDnsResourceReferenceByTarResourcesResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20180501:getDnsResourceReferenceByTarResources", {
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
 */
export function getDnsResourceReferenceByTarResourcesOutput(args?: GetDnsResourceReferenceByTarResourcesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDnsResourceReferenceByTarResourcesResult> {
    return pulumi.output(args).apply((a: any) => getDnsResourceReferenceByTarResources(a, opts))
}

export interface GetDnsResourceReferenceByTarResourcesOutputArgs {
    /**
     * A list of references to azure resources for which referencing dns records need to be queried.
     */
    targetResources?: pulumi.Input<pulumi.Input<types.inputs.SubResourceArgs>[]>;
}
