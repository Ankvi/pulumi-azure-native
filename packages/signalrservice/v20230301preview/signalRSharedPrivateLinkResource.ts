import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Describes a Shared Private Link Resource
 */
export class SignalRSharedPrivateLinkResource extends pulumi.CustomResource {
    /**
     * Get an existing SignalRSharedPrivateLinkResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SignalRSharedPrivateLinkResource {
        return new SignalRSharedPrivateLinkResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:signalrservice/v20230301preview:SignalRSharedPrivateLinkResource';

    /**
     * Returns true if the given object is an instance of SignalRSharedPrivateLinkResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SignalRSharedPrivateLinkResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SignalRSharedPrivateLinkResource.__pulumiType;
    }

    /**
     * The group id from the provider of resource the shared private link resource is for
     */
    public readonly groupId!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The resource id of the resource the shared private link resource is for
     */
    public readonly privateLinkResourceId!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The request message for requesting approval of the shared private link resource
     */
    public readonly requestMessage!: pulumi.Output<string | undefined>;
    /**
     * Status of the shared private link resource
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.signalrservice.v20230301preview.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a SignalRSharedPrivateLinkResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SignalRSharedPrivateLinkResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.privateLinkResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateLinkResourceId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["groupId"] = args ? args.groupId : undefined;
            resourceInputs["privateLinkResourceId"] = args ? args.privateLinkResourceId : undefined;
            resourceInputs["requestMessage"] = args ? args.requestMessage : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["sharedPrivateLinkResourceName"] = args ? args.sharedPrivateLinkResourceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
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
        const aliasOpts = { aliases: [{ type: "azure-native:signalrservice:SignalRSharedPrivateLinkResource" }, { type: "azure-native:signalrservice/v20210401preview:SignalRSharedPrivateLinkResource" }, { type: "azure-native:signalrservice/v20210601preview:SignalRSharedPrivateLinkResource" }, { type: "azure-native:signalrservice/v20210901preview:SignalRSharedPrivateLinkResource" }, { type: "azure-native:signalrservice/v20211001:SignalRSharedPrivateLinkResource" }, { type: "azure-native:signalrservice/v20220201:SignalRSharedPrivateLinkResource" }, { type: "azure-native:signalrservice/v20220801preview:SignalRSharedPrivateLinkResource" }, { type: "azure-native:signalrservice/v20230201:SignalRSharedPrivateLinkResource" }, { type: "azure-native:signalrservice/v20230601preview:SignalRSharedPrivateLinkResource" }, { type: "azure-native:signalrservice/v20230801preview:SignalRSharedPrivateLinkResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(SignalRSharedPrivateLinkResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a SignalRSharedPrivateLinkResource resource.
 */
export interface SignalRSharedPrivateLinkResourceArgs {
    /**
     * The group id from the provider of resource the shared private link resource is for
     */
    groupId: pulumi.Input<string>;
    /**
     * The resource id of the resource the shared private link resource is for
     */
    privateLinkResourceId: pulumi.Input<string>;
    /**
     * The request message for requesting approval of the shared private link resource
     */
    requestMessage?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
    /**
     * The name of the shared private link resource
     */
    sharedPrivateLinkResourceName?: pulumi.Input<string>;
}
