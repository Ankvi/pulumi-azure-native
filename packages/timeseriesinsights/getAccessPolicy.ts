import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the access policy with the specified name in the specified environment.
 *
 * Uses Azure REST API version 2020-05-15.
 *
 * Other available API versions: 2021-03-31-preview, 2021-06-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native timeseriesinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccessPolicy(args: GetAccessPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:timeseriesinsights:getAccessPolicy", {
        "accessPolicyName": args.accessPolicyName,
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessPolicyArgs {
    /**
     * The name of the Time Series Insights access policy associated with the specified environment.
     */
    accessPolicyName: string;
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: string;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: string;
}

/**
 * An access policy is used to grant users and applications access to the environment. Roles are assigned to service principals in Azure Active Directory. These roles define the actions the principal can perform through the Time Series Insights data plane APIs.
 */
export interface GetAccessPolicyResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * An description of the access policy.
     */
    readonly description?: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The objectId of the principal in Azure Active Directory.
     */
    readonly principalObjectId?: string;
    /**
     * The list of roles the principal is assigned on the environment.
     */
    readonly roles?: string[];
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets the access policy with the specified name in the specified environment.
 *
 * Uses Azure REST API version 2020-05-15.
 *
 * Other available API versions: 2021-03-31-preview, 2021-06-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native timeseriesinsights [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccessPolicyOutput(args: GetAccessPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccessPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:timeseriesinsights:getAccessPolicy", {
        "accessPolicyName": args.accessPolicyName,
        "environmentName": args.environmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessPolicyOutputArgs {
    /**
     * The name of the Time Series Insights access policy associated with the specified environment.
     */
    accessPolicyName: pulumi.Input<string>;
    /**
     * The name of the Time Series Insights environment associated with the specified resource group.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}