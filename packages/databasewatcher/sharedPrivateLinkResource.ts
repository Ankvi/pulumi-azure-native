import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Concrete proxy resource types can be created by aliasing this type using a specific property type.
 * Azure REST API version: 2023-09-01-preview.
 */
export class SharedPrivateLinkResource extends pulumi.CustomResource {
    /**
     * Get an existing SharedPrivateLinkResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SharedPrivateLinkResource {
        return new SharedPrivateLinkResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databasewatcher:SharedPrivateLinkResource';

    /**
     * Returns true if the given object is an instance of SharedPrivateLinkResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SharedPrivateLinkResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SharedPrivateLinkResource.__pulumiType;
    }

    /**
     * The DNS zone to be included in the DNS name of the shared private link. Value is service-specific.
     */
    public readonly dnsZone!: pulumi.Output<string | undefined>;
    /**
     * The group id from the provider of resource the shared private link resource is for.
     */
    public readonly groupId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource id of the resource the shared private link resource is for.
     */
    public readonly privateLinkResourceId!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The request message for requesting approval of the shared private link resource.
     */
    public readonly requestMessage!: pulumi.Output<string>;
    /**
     * Status of the shared private link resource. Can be Pending, Approved, Rejected or Disconnected.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SharedPrivateLinkResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SharedPrivateLinkResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.privateLinkResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateLinkResourceId'");
            }
            if ((!args || args.requestMessage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'requestMessage'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.watcherName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'watcherName'");
            }
            resourceInputs["dnsZone"] = args ? args.dnsZone : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["privateLinkResourceId"] = args ? args.privateLinkResourceId : undefined;
            resourceInputs["requestMessage"] = args ? args.requestMessage : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sharedPrivateLinkResourceName"] = args ? args.sharedPrivateLinkResourceName : undefined;
            resourceInputs["watcherName"] = args ? args.watcherName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["dnsZone"] = undefined /*out*/;
            resourceInputs["groupId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["privateLinkResourceId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["requestMessage"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databasewatcher/v20230901preview:SharedPrivateLinkResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SharedPrivateLinkResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SharedPrivateLinkResource resource.
 */
export interface SharedPrivateLinkResourceArgs {
    /**
     * The DNS zone to be included in the DNS name of the shared private link. Value is service-specific.
     */
    dnsZone?: pulumi.Input<string>;
    /**
     * The group id from the provider of resource the shared private link resource is for.
     */
    groupId: pulumi.Input<string>;
    /**
     * The resource id of the resource the shared private link resource is for.
     */
    privateLinkResourceId: pulumi.Input<string>;
    /**
     * The request message for requesting approval of the shared private link resource.
     */
    requestMessage: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The Shared Private Link resource name.
     */
    sharedPrivateLinkResourceName?: pulumi.Input<string>;
    /**
     * The database watcher name.
     */
    watcherName: pulumi.Input<string>;
}