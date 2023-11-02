import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the details of the customLocation with a specified resource group and name.
 * Azure REST API version: 2021-08-15.
 *
 * Other available API versions: 2021-08-31-preview.
 */
export function getCustomLocation(args: GetCustomLocationArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomLocationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:extendedlocation:getCustomLocation", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetCustomLocationArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Custom Locations name.
     */
    resourceName: string;
}

/**
 * Custom Locations definition.
 */
export interface GetCustomLocationResult {
    /**
     * This is optional input that contains the authentication that should be used to generate the namespace.
     */
    readonly authentication?: types.outputs.CustomLocationPropertiesResponseAuthentication;
    /**
     * Contains the reference to the add-on that contains charts to deploy CRDs and operators.
     */
    readonly clusterExtensionIds?: string[];
    /**
     * Display name for the Custom Locations location.
     */
    readonly displayName?: string;
    /**
     * Connected Cluster or AKS Cluster. The Custom Locations RP will perform a checkAccess API for listAdminCredentials permissions.
     */
    readonly hostResourceId?: string;
    /**
     * Type of host the Custom Locations is referencing (Kubernetes, etc...).
     */
    readonly hostType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Identity for the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Kubernetes namespace that will be created on the specified cluster.
     */
    readonly namespace?: string;
    /**
     * Provisioning State for the Custom Location.
     */
    readonly provisioningState?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the details of the customLocation with a specified resource group and name.
 * Azure REST API version: 2021-08-15.
 *
 * Other available API versions: 2021-08-31-preview.
 */
export function getCustomLocationOutput(args: GetCustomLocationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCustomLocationResult> {
    return pulumi.output(args).apply((a: any) => getCustomLocation(a, opts))
}

export interface GetCustomLocationOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Custom Locations name.
     */
    resourceName: pulumi.Input<string>;
}
