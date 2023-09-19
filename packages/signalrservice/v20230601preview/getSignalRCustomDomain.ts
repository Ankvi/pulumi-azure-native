import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a custom domain.
 */
export function getSignalRCustomDomain(args: GetSignalRCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetSignalRCustomDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:signalrservice/v20230601preview:getSignalRCustomDomain", {
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSignalRCustomDomainArgs {
    /**
     * Custom domain name.
     */
    name: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * A custom domain
 */
export interface GetSignalRCustomDomainResult {
    /**
     * Reference to a resource.
     */
    readonly customCertificate: types.outputs.ResourceReferenceResponse;
    /**
     * The custom domain name.
     */
    readonly domainName: string;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a custom domain.
 */
export function getSignalRCustomDomainOutput(args: GetSignalRCustomDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSignalRCustomDomainResult> {
    return pulumi.output(args).apply((a: any) => getSignalRCustomDomain(a, opts))
}

export interface GetSignalRCustomDomainOutputArgs {
    /**
     * Custom domain name.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
