import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Description for Get the named hostname binding for an app (or deployment slot, if specified).
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppHostNameBindingSlot(args: GetWebAppHostNameBindingSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppHostNameBindingSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:web:getWebAppHostNameBindingSlot", {
        "hostName": args.hostName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppHostNameBindingSlotArgs {
    /**
     * Hostname in the hostname binding.
     */
    hostName: string;
    /**
     * Name of the app.
     */
    name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
     */
    slot: string;
}

/**
 * A hostname binding object.
 */
export interface GetWebAppHostNameBindingSlotResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Azure resource name.
     */
    readonly azureResourceName?: string;
    /**
     * Azure resource type.
     */
    readonly azureResourceType?: string;
    /**
     * Custom DNS record type.
     */
    readonly customHostNameDnsRecordType?: string;
    /**
     * Fully qualified ARM domain resource URI.
     */
    readonly domainId?: string;
    /**
     * Hostname type.
     */
    readonly hostNameType?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * App Service app name.
     */
    readonly siteName?: string;
    /**
     * SSL type
     */
    readonly sslState?: string;
    /**
     * SSL certificate thumbprint
     */
    readonly thumbprint?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Virtual IP address assigned to the hostname if IP based SSL is enabled.
     */
    readonly virtualIP: string;
}
/**
 * Description for Get the named hostname binding for an app (or deployment slot, if specified).
 *
 * Uses Azure REST API version 2024-04-01.
 *
 * Other available API versions: 2016-08-01, 2018-02-01, 2018-11-01, 2019-08-01, 2020-06-01, 2020-09-01, 2020-10-01, 2020-12-01, 2021-01-01, 2021-01-15, 2021-02-01, 2021-03-01, 2022-03-01, 2022-09-01, 2023-01-01, 2023-12-01. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native web [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebAppHostNameBindingSlotOutput(args: GetWebAppHostNameBindingSlotOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebAppHostNameBindingSlotResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:web:getWebAppHostNameBindingSlot", {
        "hostName": args.hostName,
        "name": args.name,
        "resourceGroupName": args.resourceGroupName,
        "slot": args.slot,
    }, opts);
}

export interface GetWebAppHostNameBindingSlotOutputArgs {
    /**
     * Hostname in the hostname binding.
     */
    hostName: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the deployment slot. If a slot is not specified, the API the named binding for the production slot.
     */
    slot: pulumi.Input<string>;
}