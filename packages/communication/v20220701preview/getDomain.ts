import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the Domains resource and its properties.
 */
export function getDomain(args: GetDomainArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:communication/v20220701preview:getDomain", {
        "domainName": args.domainName,
        "emailServiceName": args.emailServiceName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainArgs {
    /**
     * The name of the Domains resource.
     */
    domainName: string;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A class representing a Domains resource.
 */
export interface GetDomainResult {
    /**
     * The location where the Domains resource data is stored at rest.
     */
    readonly dataLocation: string;
    /**
     * Describes how a Domains resource is being managed.
     */
    readonly domainManagement: string;
    /**
     * P2 sender domain that is displayed to the email recipients [RFC 5322].
     */
    readonly fromSenderDomain: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * P1 sender domain that is present on the email envelope [RFC 5321].
     */
    readonly mailFromSenderDomain: string;
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
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Describes whether user engagement tracking is enabled or disabled.
     */
    readonly userEngagementTracking?: string;
    /**
     * Collection of valid sender usernames. This is a key-value pair where key=username and value=display name.
     */
    readonly validSenderUsernames?: {[key: string]: string};
    /**
     * List of DnsRecord
     */
    readonly verificationRecords: types.outputs.DomainPropertiesResponseVerificationRecords;
    /**
     * List of VerificationStatusRecord
     */
    readonly verificationStates: types.outputs.DomainPropertiesResponseVerificationStates;
}
/**
 * Get the Domains resource and its properties.
 */
export function getDomainOutput(args: GetDomainOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainResult> {
    return pulumi.output(args).apply((a: any) => getDomain(a, opts))
}

export interface GetDomainOutputArgs {
    /**
     * The name of the Domains resource.
     */
    domainName: pulumi.Input<string>;
    /**
     * The name of the EmailService resource.
     */
    emailServiceName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
