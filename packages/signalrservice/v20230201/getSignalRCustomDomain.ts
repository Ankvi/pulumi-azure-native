import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get a custom domain.
 */
export function getSignalRCustomDomain(args: GetSignalRCustomDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetSignalRCustomDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:signalrservice/v20230201:getSignalRCustomDomain", {
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
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
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
    readonly customCertificate: types.outputs.signalrservice.v20230201.ResourceReferenceResponse;
    /**
     * The custom domain name.
     */
    readonly domainName: string;
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.signalrservice.v20230201.SystemDataResponse;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
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
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
