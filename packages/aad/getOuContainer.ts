import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get OuContainer in DomainService instance.
 * Azure REST API version: 2022-12-01.
 */
export function getOuContainer(args: GetOuContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetOuContainerResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:aad:getOuContainer", {
        "domainServiceName": args.domainServiceName,
        "ouContainerName": args.ouContainerName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOuContainerArgs {
    /**
     * The name of the domain service.
     */
    domainServiceName: string;
    /**
     * The name of the OuContainer.
     */
    ouContainerName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Resource for OuContainer.
 */
export interface GetOuContainerResult {
    /**
     * The list of container accounts
     */
    readonly accounts?: types.outputs.ContainerAccountResponse[];
    /**
     * The OuContainer name
     */
    readonly containerId: string;
    /**
     * The Deployment id
     */
    readonly deploymentId: string;
    /**
     * Distinguished Name of OuContainer instance
     */
    readonly distinguishedName: string;
    /**
     * The domain name of Domain Services.
     */
    readonly domainName: string;
    /**
     * Resource etag
     */
    readonly etag?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The current deployment or provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * Status of OuContainer instance
     */
    readonly serviceStatus: string;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Azure Active Directory tenant id
     */
    readonly tenantId: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Get OuContainer in DomainService instance.
 * Azure REST API version: 2022-12-01.
 */
export function getOuContainerOutput(args: GetOuContainerOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOuContainerResult> {
    return pulumi.output(args).apply((a: any) => getOuContainer(a, opts))
}

export interface GetOuContainerOutputArgs {
    /**
     * The name of the domain service.
     */
    domainServiceName: pulumi.Input<string>;
    /**
     * The name of the OuContainer.
     */
    ouContainerName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
