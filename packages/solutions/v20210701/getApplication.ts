import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the managed application.
 */
export function getApplication(args: GetApplicationArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:solutions/v20210701:getApplication", {
        "applicationName": args.applicationName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationArgs {
    /**
     * The name of the managed application.
     */
    applicationName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Information about managed application.
 */
export interface GetApplicationResult {
    /**
     * The fully qualified path of managed application definition Id.
     */
    readonly applicationDefinitionId?: string;
    /**
     * The collection of managed application artifacts.
     */
    readonly artifacts: types.outputs.ApplicationArtifactResponse[];
    /**
     * The  read-only authorizations property that is retrieved from the application package.
     */
    readonly authorizations: types.outputs.ApplicationAuthorizationResponse[];
    /**
     * The managed application billing details.
     */
    readonly billingDetails: types.outputs.ApplicationBillingDetailsDefinitionResponse;
    /**
     * The client entity that created the JIT request.
     */
    readonly createdBy: types.outputs.ApplicationClientDetailsResponse;
    /**
     * The read-only customer support property that is retrieved from the application package.
     */
    readonly customerSupport: types.outputs.ApplicationPackageContactResponse;
    /**
     * Resource ID
     */
    readonly id: string;
    /**
     * The identity of the resource.
     */
    readonly identity?: types.outputs.IdentityResponse;
    /**
     * The managed application Jit access policy.
     */
    readonly jitAccessPolicy?: types.outputs.ApplicationJitAccessPolicyResponse;
    /**
     * The kind of the managed application. Allowed values are MarketPlace and ServiceCatalog.
     */
    readonly kind: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * ID of the resource that manages this resource.
     */
    readonly managedBy?: string;
    /**
     * The managed resource group Id.
     */
    readonly managedResourceGroupId?: string;
    /**
     * The managed application management mode.
     */
    readonly managementMode: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Name and value pairs that define the managed application outputs.
     */
    readonly outputs: any;
    /**
     * Name and value pairs that define the managed application parameters. It can be a JObject or a well formed JSON string.
     */
    readonly parameters?: any;
    /**
     * The plan information.
     */
    readonly plan?: types.outputs.PlanResponse;
    /**
     * The managed application provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The publisher tenant Id.
     */
    readonly publisherTenantId: string;
    /**
     * The SKU of the resource.
     */
    readonly sku?: types.outputs.SkuResponse;
    /**
     * The read-only support URLs property that is retrieved from the application package.
     */
    readonly supportUrls: types.outputs.ApplicationPackageSupportUrlsResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The client entity that last updated the JIT request.
     */
    readonly updatedBy: types.outputs.ApplicationClientDetailsResponse;
}
/**
 * Gets the managed application.
 */
export function getApplicationOutput(args: GetApplicationOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationResult> {
    return pulumi.output(args).apply((a: any) => getApplication(a, opts))
}

export interface GetApplicationOutputArgs {
    /**
     * The name of the managed application.
     */
    applicationName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}