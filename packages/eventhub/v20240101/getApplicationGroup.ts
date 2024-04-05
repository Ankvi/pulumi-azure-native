import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an ApplicationGroup for a Namespace.
 */
export function getApplicationGroup(args: GetApplicationGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetApplicationGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventhub/v20240101:getApplicationGroup", {
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
 */
export function getApplicationGroupOutput(args: GetApplicationGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApplicationGroupResult> {
    return pulumi.output(args).apply((a: any) => getApplicationGroup(a, opts))
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