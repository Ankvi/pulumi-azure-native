import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified NSP access rule by name.
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2021-02-01-preview, 2023-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNspAccessRule(args: GetNspAccessRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNspAccessRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getNspAccessRule", {
        "accessRuleName": args.accessRuleName,
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNspAccessRuleArgs {
    /**
     * The name of the NSP access rule.
     */
    accessRuleName: string;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: string;
    /**
     * The name of the NSP profile.
     */
    profileName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * The NSP access rule resource
 */
export interface GetNspAccessRuleResult {
    /**
     * Inbound address prefixes (IPv4/IPv6)
     */
    readonly addressPrefixes?: string[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Direction that specifies whether the access rules is inbound/outbound.
     */
    readonly direction?: string;
    /**
     * Outbound rules email address format.
     */
    readonly emailAddresses?: string[];
    /**
     * Outbound rules fully qualified domain name format.
     */
    readonly fullyQualifiedDomainNames?: string[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Rule specified by the perimeter id.
     */
    readonly networkSecurityPerimeters: types.outputs.PerimeterBasedAccessRuleResponse[];
    /**
     * Outbound rules phone number format.
     */
    readonly phoneNumbers?: string[];
    /**
     * The provisioning state of the scope assignment resource.
     */
    readonly provisioningState: string;
    /**
     * Inbound rules service tag names.
     */
    readonly serviceTags?: string[];
    /**
     * List of subscription ids
     */
    readonly subscriptions?: types.outputs.SubscriptionIdResponse[];
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets the specified NSP access rule by name.
 *
 * Uses Azure REST API version 2023-08-01-preview.
 *
 * Other available API versions: 2021-02-01-preview, 2023-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native network [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getNspAccessRuleOutput(args: GetNspAccessRuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNspAccessRuleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getNspAccessRule", {
        "accessRuleName": args.accessRuleName,
        "networkSecurityPerimeterName": args.networkSecurityPerimeterName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetNspAccessRuleOutputArgs {
    /**
     * The name of the NSP access rule.
     */
    accessRuleName: pulumi.Input<string>;
    /**
     * The name of the network security perimeter.
     */
    networkSecurityPerimeterName: pulumi.Input<string>;
    /**
     * The name of the NSP profile.
     */
    profileName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}