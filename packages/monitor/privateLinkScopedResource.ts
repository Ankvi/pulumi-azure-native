import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A private link scoped resource
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2021-07-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native monitor [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class PrivateLinkScopedResource extends pulumi.CustomResource {
    /**
     * Get an existing PrivateLinkScopedResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PrivateLinkScopedResource {
        return new PrivateLinkScopedResource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:monitor:PrivateLinkScopedResource';

    /**
     * Returns true if the given object is an instance of PrivateLinkScopedResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PrivateLinkScopedResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PrivateLinkScopedResource.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The kind of scoped Azure monitor resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * The resource id of the scoped Azure monitor resource.
     */
    public readonly linkedResourceId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * State of the Azure monitor resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The location of a scoped subscription. Only needs to be specified for metric dataplane subscriptions.
     */
    public readonly subscriptionLocation!: pulumi.Output<string | undefined>;
    /**
     * System data
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PrivateLinkScopedResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateLinkScopedResourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.scopeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopeName'");
            }
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["linkedResourceId"] = args ? args.linkedResourceId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scopeName"] = args ? args.scopeName : undefined;
            resourceInputs["subscriptionLocation"] = args ? args.subscriptionLocation : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["linkedResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["subscriptionLocation"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:insights/v20210701preview:PrivateLinkScopedResource" }, { type: "azure-native:insights/v20210901:PrivateLinkScopedResource" }, { type: "azure-native:insights/v20230601preview:PrivateLinkScopedResource" }, { type: "azure-native:insights:PrivateLinkScopedResource" }, { type: "azure-native:monitor/v20191017preview:PrivateLinkScopedResource" }, { type: "azure-native:monitor/v20210701preview:PrivateLinkScopedResource" }, { type: "azure-native:monitor/v20210901:PrivateLinkScopedResource" }, { type: "azure-native:monitor/v20230601preview:PrivateLinkScopedResource" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PrivateLinkScopedResource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PrivateLinkScopedResource resource.
 */
export interface PrivateLinkScopedResourceArgs {
    /**
     * The kind of scoped Azure monitor resource.
     */
    kind?: pulumi.Input<string | types.enums.ScopedResourceKind>;
    /**
     * The resource id of the scoped Azure monitor resource.
     */
    linkedResourceId?: pulumi.Input<string>;
    /**
     * The name of the scoped resource object.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the Azure Monitor PrivateLinkScope resource.
     */
    scopeName: pulumi.Input<string>;
    /**
     * The location of a scoped subscription. Only needs to be specified for metric dataplane subscriptions.
     */
    subscriptionLocation?: pulumi.Input<string>;
}