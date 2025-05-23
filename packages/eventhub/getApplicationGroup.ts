import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an ApplicationGroup for a Namespace.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationGroup(args: GetApplicationGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub:getApplicationGroup", {
        "applicationGroupName": args.applicationGroupName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationGroupArgs {
    /**
     * The Application Group name 
     */
    applicationGroupName: string;
    /**
     * The Namespace name
     */
    namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: string;
}

/**
 * The Application Group object
 */
export interface GetApplicationGroupResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The Unique identifier for application group.Supports SAS(SASKeyName=KeyName) or AAD(AADAppID=Guid)
     */
    readonly clientAppGroupIdentifier: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Determines if Application Group is allowed to create connection with namespace or not. Once the isEnabled is set to false, all the existing connections of application group gets dropped and no new connections will be allowed
     */
    readonly isEnabled?: boolean;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of group policies that define the behavior of application group. The policies can support resource governance scenarios such as limiting ingress or egress traffic.
     */
    readonly policies?: types.outputs.ThrottlingPolicyResponse[];
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    readonly type: string;
}
/**
 * Gets an ApplicationGroup for a Namespace.
 *
 * Uses Azure REST API version 2024-01-01.
 *
 * Other available API versions: 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventhub [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getApplicationGroupOutput(args: GetApplicationGroupOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetApplicationGroupResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventhub:getApplicationGroup", {
        "applicationGroupName": args.applicationGroupName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetApplicationGroupOutputArgs {
    /**
     * The Application Group name 
     */
    applicationGroupName: pulumi.Input<string>;
    /**
     * The Namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the resource group within the azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}