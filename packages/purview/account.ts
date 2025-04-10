import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Account resource
 *
 * Uses Azure REST API version 2021-12-01. In version 1.x of the Azure Native provider, it used API version 2020-12-01-preview.
 *
 * Other available API versions: 2020-12-01-preview, 2021-07-01, 2023-05-01-preview, 2024-04-01-preview.
 */
export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Account {
        return new Account(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:purview:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Account.__pulumiType;
    }

    /**
     * Gets or sets the status of the account.
     */
    public /*out*/ readonly accountStatus!: pulumi.Output<types.outputs.AccountPropertiesResponseAccountStatus>;
    /**
     * Cloud connectors.
     * External cloud identifier used as part of scanning configuration.
     */
    public /*out*/ readonly cloudConnectors!: pulumi.Output<types.outputs.CloudConnectorsResponse | undefined>;
    /**
     * Gets the time at which the entity was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * Gets the creator of the entity.
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * Gets the creators of the entity's object id.
     */
    public /*out*/ readonly createdByObjectId!: pulumi.Output<string>;
    /**
     * The URIs that are the public endpoints of the account.
     */
    public /*out*/ readonly endpoints!: pulumi.Output<types.outputs.AccountPropertiesResponseEndpoints>;
    /**
     * Gets or sets the friendly name.
     */
    public /*out*/ readonly friendlyName!: pulumi.Output<string>;
    /**
     * Identity Info on the tracked resource
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * Gets or sets the location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     *  Gets or sets the state of managed eventhub. If enabled managed eventhub will be created, if disabled the managed eventhub will be removed.
     */
    public readonly managedEventHubState!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the managed resource group name
     */
    public readonly managedResourceGroupName!: pulumi.Output<string | undefined>;
    /**
     * Gets the resource identifiers of the managed resources.
     */
    public /*out*/ readonly managedResources!: pulumi.Output<types.outputs.AccountPropertiesResponseManagedResources>;
    /**
     * Gets or sets the public network access for managed resources.
     */
    public readonly managedResourcesPublicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Gets the private endpoint connections information.
     */
    public /*out*/ readonly privateEndpointConnections!: pulumi.Output<types.outputs.PrivateEndpointConnectionResponse[]>;
    /**
     * Gets or sets the state of the provisioning.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Gets or sets the public network access.
     */
    public readonly publicNetworkAccess!: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the Sku.
     */
    public /*out*/ readonly sku!: pulumi.Output<types.outputs.AccountResponseSku>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.TrackedResourceResponseSystemData>;
    /**
     * Tags on the azure resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Gets or sets the type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccountArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedEventHubState"] = (args ? args.managedEventHubState : undefined) ?? "NotSpecified";
            resourceInputs["managedResourceGroupName"] = args ? args.managedResourceGroupName : undefined;
            resourceInputs["managedResourcesPublicNetworkAccess"] = (args ? args.managedResourcesPublicNetworkAccess : undefined) ?? "NotSpecified";
            resourceInputs["publicNetworkAccess"] = (args ? args.publicNetworkAccess : undefined) ?? "Enabled";
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["accountStatus"] = undefined /*out*/;
            resourceInputs["cloudConnectors"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdByObjectId"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["managedResources"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accountStatus"] = undefined /*out*/;
            resourceInputs["cloudConnectors"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdByObjectId"] = undefined /*out*/;
            resourceInputs["endpoints"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedEventHubState"] = undefined /*out*/;
            resourceInputs["managedResourceGroupName"] = undefined /*out*/;
            resourceInputs["managedResources"] = undefined /*out*/;
            resourceInputs["managedResourcesPublicNetworkAccess"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateEndpointConnections"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publicNetworkAccess"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:purview/v20201201preview:Account" }, { type: "azure-native:purview/v20210701:Account" }, { type: "azure-native:purview/v20211201:Account" }, { type: "azure-native:purview/v20230501preview:Account" }, { type: "azure-native:purview/v20240401preview:Account" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Account.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * The name of the account.
     */
    accountName?: pulumi.Input<string>;
    /**
     * Identity Info on the tracked resource
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * Gets or sets the location.
     */
    location?: pulumi.Input<string>;
    /**
     *  Gets or sets the state of managed eventhub. If enabled managed eventhub will be created, if disabled the managed eventhub will be removed.
     */
    managedEventHubState?: pulumi.Input<string | types.enums.ManagedEventHubState>;
    /**
     * Gets or sets the managed resource group name
     */
    managedResourceGroupName?: pulumi.Input<string>;
    /**
     * Gets or sets the public network access for managed resources.
     */
    managedResourcesPublicNetworkAccess?: pulumi.Input<string | types.enums.ManagedResourcesPublicNetworkAccess>;
    /**
     * Gets or sets the public network access.
     */
    publicNetworkAccess?: pulumi.Input<string | types.enums.PublicNetworkAccess>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Tags on the azure resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}